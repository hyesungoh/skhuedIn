import React, { useState } from "react";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";

import "react-mde/lib/styles/css/react-mde-all.css";

import "pages/Writing/Writing.scss";
import Clock from "components/Clock/Clock";

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

    return (
        <div className="writing">
            <div className="writing__form">
                <div className="writing__form__title">
                    <div className="writing__form__title__input">
                        <input type="text" />
                        <label>제목을 입력해주세요</label>
                    </div>
                    <Clock />
                </div>

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
