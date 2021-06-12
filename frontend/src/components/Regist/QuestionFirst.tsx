import React, { useState } from "react";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import "react-mde/lib/styles/css/react-mde-all.css";

import Clock from "components/Clock/Clock";
import loadSuggestions from "utils/loadSuggestions";

const QuestionFirst = () => {
    const [value, setValue] = useState<string | undefined>(``);
    const [selectedTab, setSelectedTab] =
        useState<"write" | "preview">("write");

    return (
        <div className="writing__form">
            <div className="writing__form__title">
                <div className="writing__form__title__input">
                    <input id="writer" type="text" required />
                    <label
                        htmlFor="writer"
                        className="writing__form__title__input--placeholder"
                    >
                        asdasdf
                    </label>
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
                loadSuggestions={loadSuggestions}
                minEditorHeight={72}
                minPreviewHeight={72}
                heightUnits={"vh"}
            ></ReactMde>

            <a
                href="https://guides.github.com/features/mastering-markdown/"
                className="writing__form__ps"
            >
                <FontAwesomeIcon icon={faMarkdown} />
                &nbsp;마크다운 문법을 지원합니다
            </a>
        </div>
    );
};

export default QuestionFirst;
