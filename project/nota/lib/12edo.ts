import { AfinationEDO } from "../core/afination";
import { Nota } from "../core/nota";

export class EDO12 extends AfinationEDO {
    protected edo: number = 12;
    laDobleBemol(duration: number): Nota {
        return this.sol(duration)
    }
    laBemol(duration: number): Nota {
        return this.solSostenido(duration)
    }
    la(duration: number): Nota {
        return this.makeNota(0, duration);
    }
    laSostenido(duration: number): Nota {
        return this.makeNota(1, duration);
    }
    laDobleSotenido(duration: number): Nota {
        return this.si(duration);
    }
    siDobleBemol(duration: number): Nota {
        return this.la(duration)
    }
    siBemol(duration: number): Nota {
        return this.laSostenido(duration)
    }
    si(duration: number): Nota {
        return this.makeNota(2, duration);
    }
    siSostenido(duration: number): Nota {
        return this.do(duration)
    }
    doBemol(duration: number): Nota {
        return this.si(duration)
    }
    do(duration: number): Nota {
        return this.makeNota(3, duration);
    }
    doSostenido(duration: number): Nota {
        return this.makeNota(4, duration);
    }
    doDobleSotenido(duration: number): Nota {
        return this.re(duration)
    }
    reDobleBemol(duration: number): Nota {
        return this.do(duration)
    }
    reBemol(duration: number): Nota {
        return this.doSostenido(duration);
    }
    re(duration: number): Nota {
        return this.makeNota(5, duration);
    }
    reSostenido(duration: number): Nota {
        return this.makeNota(6, duration);
    }
    reDobleSotenido(duration: number): Nota {
        return this.mi(duration)
    }
    miDobleBemol(duration: number): Nota {
        return this.re(duration)
    }
    miBemol(duration: number): Nota {
        return this.reSostenido(duration)
    }
    mi(duration: number): Nota {
        return this.makeNota(7, duration);
    }
    miSostenido(duration: number): Nota {
        return this.fa(duration)
    }
    faBemol(duration: number): Nota {
        return this.mi(duration)
    }
    fa(duration: number): Nota {
        return this.makeNota(8, duration);
    }
    faSostenido(duration: number): Nota {
        return this.makeNota(9, duration);
    }
    faDobleSotenido(duration: number): Nota {
        return this.sol(duration);
    }
    solDobleBemol(duration: number): Nota {
        return this.fa(duration)
    }
    solBemol(duration: number): Nota {
        return this.faSostenido(duration);
    }
    sol(duration: number): Nota {
        return this.makeNota(10, duration);
    }
    solSostenido(duration: number): Nota {
        return this.makeNota(11, duration);
    }
    solDobleSotenido(duration: number): Nota {
        return this.la(duration);
    }
}