export class Nota {
    /**
     * @param afination es el valor en Hz que se le asigna al la central del piano
     * @param entonation es el número de pasos en el que se divide la octava
     * @param step es la nota relativa a la entoncaión
     * @param duration es el tiempo en segundos que dura la nota
     */
    constructor(
        private afination: number,
        private entonation: number,
        private step: number,
        readonly duration: number
    ) { }

    frequency(): number {
        return this.afination * this.edo();
    }

    private edo() {
        return 2 ** (this.step / this.entonation);
    }
}