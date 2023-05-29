import { Nota } from "./nota";

export abstract class AfinationEDO {
    private ocatava = 0;
    protected abstract edo: number
    constructor(private afination: number) { }

    setOctava(octava: number): void {
        this.ocatava = octava;
    }

    private stepInOctava(step: number) {
        return step + (this.edo * this.ocatava)
    }

    protected makeNota(step: number, duration: number): Nota {
        return new Nota(this.afination, this.edo, this.stepInOctava(step), duration);
    }

    abstract laDobleBemol(duration: number): Nota
    abstract laBemol(duration: number): Nota
    abstract la(duration: number): Nota
    abstract laSostenido(duration: number): Nota
    abstract laDobleSotenido(duration: number): Nota

    abstract siDobleBemol(duration: number): Nota
    abstract siBemol(duration: number): Nota
    abstract si(duration: number): Nota
    abstract siSostenido(duration: number): Nota

    abstract doBemol(duration: number): Nota
    abstract do(duration: number): Nota
    abstract doSostenido(duration: number): Nota
    abstract doDobleSotenido(duration: number): Nota

    abstract reDobleBemol(duration: number): Nota
    abstract reBemol(duration: number): Nota
    abstract re(duration: number): Nota
    abstract reSostenido(duration: number): Nota
    abstract reDobleSotenido(duration: number): Nota

    abstract miDobleBemol(duration: number): Nota
    abstract miBemol(duration: number): Nota
    abstract mi(duration: number): Nota
    abstract miSostenido(duration: number): Nota

    abstract faBemol(duration: number): Nota
    abstract fa(duration: number): Nota
    abstract faSostenido(duration: number): Nota
    abstract faDobleSotenido(duration: number): Nota

    abstract solDobleBemol(duration: number): Nota
    abstract solBemol(duration: number): Nota
    abstract sol(duration: number): Nota
    abstract solSostenido(duration: number): Nota
    abstract solDobleSotenido(duration: number): Nota
}