import { Nota } from "@/project/nota/core/nota";
import { Partitura } from "./partitura";

export class PartituraBuilder {
    private partitura = new Partitura();
    private actualSection: Array<Nota> = [];

    newPartitura(): this {
        this.partitura = new Partitura();
        return this
    }
    newSection(): this {
        this.actualSection = [];
        return this;
    }
    addActualSection(): this {
        this.partitura.sections.push(this.actualSection);
        return this
    }
    addNota(nota: Nota): this {
        this.actualSection.push(nota);
        return this
    }
    getPartitura(): Partitura {
        return this.partitura;
    }
}