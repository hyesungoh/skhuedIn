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
        `# 큰 글자
## 두 번째로 큰 글자
### 세 번째로 큰 글자
...
중간 선
---
> 누군가 말했어요\n
**강조** *이테릭체*\n
![profile](https://user-images.githubusercontent.com/26461307/113733635-9c85b000-9735-11eb-9775-c54b121d100f.png)\n
[링크 태그](www.hyesungoh.xyz)

`
    );
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
        "write"
    );

    return (
        <div className="writing">
            <div className="writing__form">
                <div className="writing__form__title">
                    <div className="writing__form__title__input">
                        <input type="text" required />
                        <label className="writing__form__title__input--placeholder">
                            제목을 입력해주세요
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
                ></ReactMde>

                <span className="writing__form__ps">
                    좋은 글을 통해 좋은 영향을
                </span>
            </div>
        </div>
    );
};

export default WritingPresenter;
