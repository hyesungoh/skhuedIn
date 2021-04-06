import React, { useEffect, useState } from "react";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";

import "react-mde/lib/styles/css/react-mde-all.css";
import "react-clock/dist/Clock.css";

import "pages/Writing/Writing.scss";

// Suggestion
// function loadSuggestions(text: string): any {
//     return new Promise((accept, reject) => {
//         setTimeout(() => {
//             const suggestions = [
//                 {
//                     preview: "hyesung",
//                     value: "@hyesung",
//                 },
//                 {
//                     preview: "hyesungoh123",
//                     value: "@hyesungoh123",
//                 },
//                 {
//                     preview: "David",
//                     value: "@david",
//                 },
//                 {
//                     preview: "Louise",
//                     value: "@louise",
//                 },
//             ].filter((i) =>
//                 i.preview.toLowerCase().includes(text.toLowerCase())
//             );
//             accept(suggestions);
//         }, 250);
//     });
// }

const WritingPresenter = () => {
    const [value, setValue] = useState<string | undefined>(
        "**Hello WORLD!!!**"
    );
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
        "write"
    );

    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="writing">
            <div className="writing__form">
                

                <ReactMde
                    value={value}
                    onChange={setValue}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={(markdown) =>
                        Promise.resolve(<ReactMarkdown source={markdown} />)
                    }
                    childProps={{
                        writeButton: {
                            tabIndex: -1,
                        },
                    }}
                ></ReactMde>
            </div>
        </div>
    );
};

export default WritingPresenter;
