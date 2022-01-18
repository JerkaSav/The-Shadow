import {intro, outro, interaction} from "../story/locations/hotel.json";


type NPCType = {
    greeting: string[],
    options: string[],
    answers: string[]
}
type Place = {
    intro: string[],
    outro: string[]
    interaction: string[]
}


class location {
    private intro
    private outro
    private interaction
    private pointer = 0
    NPC: NPCType | undefined


    constructor({intro, outro, interaction}: Place) {
        this.intro = intro
        this.outro = outro
        this.interaction = interaction

    }

    async test(action: string): Promise<string | undefined> {
        this.NPC = await import('../story/NPC/' + this.interaction)
        switch (action) {
            case "Greeting":
                return this.NPC?.greeting[0]
        }
    }

    answer(key: number) {
        return this.NPC?.answers[key]
    }

    get options() {
        return this.NPC?.options
    }


    get next() {
        if (this.pointer != 0) {
            return this.outro[0]
        } else {
            if (!this.intro.length) {
                this.pointer = 1
                return this.test("Greeting")
            } else {
                return this.intro[0]
            }
        }
    }

    modifyArray() {
        if (this.pointer != 0) this.outro = this.outro.splice(1)
        else this.intro = this.intro.splice(1)
    }

}

export const testLocation = new location({intro, outro, interaction})
