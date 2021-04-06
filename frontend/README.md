## Frontend Develop Log

## Using

#### TypeScript

```terminal
npx create-react-app frontend --template typescript
```

#### SASS

```terminal
npm i node-sass
npm i @types/node-sass
```

#### Redux

```terminal
npm i redux
npm i react-redux
npm i @types/react-redux
```

#### React-testing-library

```terminal
npm i react-testing-library
npm i jest-dom
npm i @types/jest
```

> jest-dom 은 jest 의 확장으로서, DOM 에 관련된 `matcher` 를 추가해줌

> VSC 사용 경우 `@types/jest` 설치

#### react-router-dom

```terminal
npm i react-router-dom
npm i @types/react-router-dom
```

#### react-transition-group

```terminal
npm i react-transition-group
npm i @types/react-transition-group
```

#### FontAwesome Icon

```terminal
npm i --save @fortawesome/react-fontawesome
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

#### Gh pages

```terminal
npm install gh-pages --save-dev

```

#### Absolute Path

```json
"compilerOptions": {
        "baseUrl": "src",
        ...
}
```

#### React-mde

react markdown editor

```terminal
// react 17.0.2 is not supported
npm i react-mde --force
```

#### React-markdown

markdown converter

```terminal
npm i react-markdown

```

## Development

-   #### React-mde
    마크다운 에디터를 사용하기 위해 설치

```tsx
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";

function Compo() {
    const [value, setValue] = useState<string | undefined>("");
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
        "write"
    );

    return (
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
            minEditorHeight={72} // 에디터 최소 높이
            minPreviewHeight={72} // 프리뷰 최소 높이
            heightUnits={"vh"} // 높이 단위
            // loadSuggestions={function} // 자동 추천
        ></ReactMde>
    );
}
```

-   #### React-markdown
    `React-mde`의 Preview와 마크다운 포맷을 보여주기 위해 사용

```tsx
import ReactMarkdown from "react-markdown";

function Compo() {
    const md = `# Title\n### Something\n> blahblah`;
    return <ReactMarkdown>{md}</ReactMarkdown>;
}
```

## Issue

-   `ERROR` Modal: `ref` is not a prop.
    prop의 이름은 ref가 안됨

```tsx
// refs로 이름을 바꾸어 해결
const TempCompo = () => {
    const tempRef = useRef<HTMLDivElement>(null);

    return <NextCompo refs={tempRef} />;
};

interface INextCompo {
    refs: HTMLDivElement | null;
}
const NextCompo = ({ refs }: INextCompo) => {
    return <div ref={refs}> something </div>;
};
```

-   `ERROR` Type 'RefObject<HTMLDivElement>' is missing the following properties

```tsx
interface ISomething {
    refs: React.RefObject<HTMLDivElement>;
}
```
