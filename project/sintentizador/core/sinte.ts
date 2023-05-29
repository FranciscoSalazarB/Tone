export class Sintentizador {
    private context = new AudioContext();
    constructor(
        private oscillator: OscillatorType,
    ) { }

    private makeOscilator() {
        const oscilator = this.context.createOscillator();
        const gain = this.context.createGain();
        gain.connect(this.context.destination);
        oscilator.connect(gain);
        oscilator.type = this.oscillator;
        return { oscilator, gain }
    }

    /**
     * @param frequency values in Hz
     * @param duration values in Segundos
     */
    tocarNota(frequency: number, duration: number): void {
        const { oscilator, gain } = this.makeOscilator();
        oscilator.frequency.value = frequency;
        oscilator.start(0);
        gain.gain.exponentialRampToValueAtTime(0.00001, this.context.currentTime + duration);
    }
}