import "../../styles/components-style/playboard.scss";
import {PlayboardBtn} from "../playboardBtns/playboardBtn";
import {PlayboardBtns} from "../playboardBtns/PlayboardBtns"
import {testLocation} from "../../functions/gameLogic";
import {typewriter} from "../../functions/typewriter";
import * as React from "react";
import {useEffect, useState} from "react";


export const Playboard: React.FC = () => {
    const [story, setStory] = useState<string | undefined | Promise<string | undefined>>(testLocation.next)
    const [options, setOptions] = useState<string[]>()
    const progress = async () => {
        testLocation.modifyArray()
        await setStory(await testLocation.next)

    }
    useEffect(() => {
        (async () => {
            await typewriter(story, 20)
        })();
        if (story?.toString().includes("Hello")) {
            setOptions(testLocation.options)
        }
    }, [story]);
    return (
        <div className="playboard">
            <div className="text-container"/>
            {options ? <PlayboardBtns
                    options={options}
                    onClick={(key) => {
                        setStory(testLocation.answer(key))
                        setOptions(undefined)
                    }}/>
                :
                <PlayboardBtn onClick={() => progress()}/>
            }

        </div>
    );
};
