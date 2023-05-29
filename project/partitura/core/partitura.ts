import { Nota } from "@/project/nota/core/nota"

export class Partitura {
    private state = 0;
    public sections: Array<Nota[]> = []

    hasNextSection(): boolean {
        return this.state < this.sections.length;
    }

    getSection(): Array<Nota> {
        const actualSection = this.sections[this.state]
        this.state++;
        return actualSection;
    }
}

