import hotel from "../story/locations/hotel.json"
import test from "../story/locations/testing.json"

export const locations = [hotel, test]

type NPCType = {
    default: {
        greeting: string[],
        options: string[],
        answers: string[]
    }
}
type Place = {
    intro: string[],
    outro: string[]
    interaction: string[]
}


export class location {
    intro
    private outro
    private readonly interaction
    private pointer = 0
    NPC: NPCType | undefined


    constructor({intro, outro, interaction}: Place) {
        this.intro = intro
        this.outro = outro
        this.interaction = interaction
        console.log(this.intro, this.outro, this.interaction)

    }

    async getNPC(): Promise<string | undefined> {
        this.NPC = await import('../story/NPC/' + this.interaction)
        console.log(this.NPC)
        return this.NPC?.default.greeting[0]
    }

    answer(key: number): string | undefined {
        return this.NPC?.default.answers[key]
    }

    get options(): string[] | undefined {
        return this.NPC?.default.options
    }


    get next(): Promise<string | undefined> | string {
        if (this.pointer != 0) {
            return this.outro[0]
        } else {
            if (!this.intro.length) {
                this.pointer = 1
                return this.getNPC()
            } else {
                return this.intro[0]
            }
        }
    }

    modifyArray(): void {
        if (!this.intro.length && !this.outro.length) {
            return
        } else {
            if (this.pointer != 0) this.outro = this.outro.splice(1)
            else this.intro = this.intro.splice(1)
        }
    }
}






