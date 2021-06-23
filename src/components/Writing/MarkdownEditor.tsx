import React, { useState } from "react";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";

import loadSuggestions from "utils/loadSuggestions";

interface MarkdownEditorProps {
    defaultValue: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

const MarkdownEditor = ({ defaultValue, onChange }: MarkdownEditorProps) => {
    const [selectedTab, setSelectedTab] =
        useState<"write" | "preview">("write");

    return (
        <ReactMde
            value={defaultValue}
            onChange={onChange}
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
    );
};

export default MarkdownEditor;
