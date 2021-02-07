import React, { FC, useEffect, useState } from "react";

type ScramblingMarkupProps = {
    tagName: string;
    innerText: string;
}

const ScramblingMarkup: FC<ScramblingMarkupProps> = ({ tagName, innerText }) => {
    const [text, setText] = useState(innerText);
    const [times, setTimes] = useState(10);

    useEffect(() => {
        if (times > 0) {
            const words = text.split(' ');
            const scrambledWords = words.map(text => text.split('').sort(() => Math.random() * 2 - 1).join(''));
            const newText = scrambledWords.join(' ');
            setText(newText);
        } else {
            setText(innerText);
            return;
        };
        const timeoutId = setTimeout(() => setTimes(times - 1), 500 / times);

        return () => clearTimeout(timeoutId);
    }, [times]);

    const clickHandler = () => {
        setTimes(10);
    }

    return (
        <span onClick={clickHandler}>
            <span className="code">&lt;{tagName}&gt;</span>
            {text}
            <span className="code">&lt;/{tagName}&gt;</span>
        </span>
    )

}

export default ScramblingMarkup;