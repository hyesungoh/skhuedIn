import React, { useState } from "react";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";

const WritingPresenter = () => {
    const [value, setValue] = useState<string | undefined>(
        "**Hello WORLD!!!**"
    );
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
        "write"
    );

    console.log(value);
    console.log(typeof value);
    return (
        <div>
            <ReactMde
                value={value}
                onChange={setValue}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(<ReactMarkdown source={markdown} />)
                }
            ></ReactMde>
        </div>
    );
};

export default WritingPresenter;
