import { useState, useEffect } from "react";

const setClockFormat = (text: number): string => {
    let value: string = text.toString();

    if (10 > text) {
        value = `0${text}`;
    }

    return value;
};

const Clock = () => {
    const [time, setTime] = useState<string[]>(["0", "0", "0", "0", "0", "0"]);

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            setTime(
                (
                    setClockFormat(date.getHours()) +
                    setClockFormat(date.getMinutes()) +
                    setClockFormat(date.getSeconds())
                ).split("")
            );
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="clock">
            {time.map((word, index) => (
                <span className="clock--element" key={index}>
                    {word}
                </span>
            ))}
        </div>
    );
};

export default Clock;
