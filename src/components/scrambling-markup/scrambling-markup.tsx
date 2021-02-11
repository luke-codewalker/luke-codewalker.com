import React, { FC, useEffect, useRef, useState } from "react";
import "./scrambling-markup.scss";

type ScramblingMarkupProps = {
    tagName: string;
    innerText: string;
}

const ScramblingMarkup: FC<ScramblingMarkupProps> = ({ tagName, innerText }) => {
    const [text, setText] = useState(innerText);
    const [times, setTimes] = useState(10);
    const markupNode = useRef(null);

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
        markupNode.current.style.animation = 'none';
        markupNode.current.offsetHeight;
        markupNode.current.style.animation = '';
        setTimes(10);
    }

    return (
        <span ref={markupNode} className="scrambling-markup" onClick={clickHandler}>
            <span className="code">&lt;{tagName}&gt;</span>
            {text}
            <span className="code">&lt;/{tagName}&gt;</span>
        </span>
    )

}

export default ScramblingMarkup;