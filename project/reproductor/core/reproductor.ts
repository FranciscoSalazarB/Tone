import { PartituraPrueba } from "@/project/partitura/lib/partituraPrueba";
import { Sintentizador } from "@/project/sintentizador/core/sinte";

export class Reproductor {
    private synte = new Sintentizador("sine");
    private partitura = PartituraPrueba();

    tocar() {
        if(!this.partitura.hasNextSection()) return null;
        this.partitura.getSection()
            .forEach(nota => this.synte.tocarNota(nota.frequency(), nota.duration))
        setTimeout(() => this.tocar(), 1000)
    }

    static instance() {
        return new Reproductor()
    }
}