<div align=center>

<h1>
SKHUED-IN</h1>

<p>재학생과 졸업생을 잇는 성공회인 사람도서관</p>
</div>

## Getting Started

#### TypeScript

```terminal
npx create-react-app frontend --template typescript
```

#### SASS

```terminal
npm i node-sass
npm i @types/node-sass
```

#### Recoil

```terminal
npm i recoil
```

#### Styled-components

```terminal
npm i styled-components
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

#### React-query

```terminal
npm i react-query
npm i @types/react-query
```

#### React-google-login

```terminal
npm i react-google-login
```

#### lodash

```terminal
npm i lodash
npm i @types/lodash
```

#### Or just

```bash
npm install # or yarn
```

## Development

-   #### React-mde
    마크다운 에디터를 사용하기 위해 설치

```tsx
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";

function Compo() {
    const [value, setValue] = useState<string | undefined>("");
    const [selectedTab, setSelectedTab] =
        useState<"write" | "preview">("write");

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

-   #### Redux useSelector
    리덕스의 상태값을 조회하기 위한 Hook, `mapStateToProps`

```tsx
import { useSelector } from "react-redux";
import { RootState } from "modules";
...

const currentUser = useSelector((state: RootState) => state.user);
```

-   ##### equalityFn

    이전 값과 다음 값을 비교하여 렌더링 여부를 결정

```tsx
const test = useSelector(
    (state) => state.test,
    (prev, next) => prev.count === next.count
);
```

-   ##### shallowEqual
    비교할 것이 여러 개일 경우 `equalityFn`는 번거로워지기 때문에, 최상위 값들에 한해서 비교를 수행해주는 `shallowEqual`이 존재

```tsx
import { useSelector, shallowEqual } from "react-redux";
...

const test = useSelector((state) => state.test, shallowEqual);
```

-   #### useDispatch
    리덕스 상태를 dispatch하기 위한 Hook, `mapDispatchToProps`

```tsx
import { useDispatch } from "react-reudx";
import { actionCreator } from "modules/something";
...

const dispatch = useDispatch();

const withActionType = () => {
    dispatch({type: ACTION_TYPE })
}

const withActionCreator = (args) => {
    dispatch(actionCreator(args));
}
```

-   #### createPortal
    부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드로 자식을 렌더링하는 방법, 리액트 v16에서 도입된 기능

```tsx
ReactDOM.createPortal(그릴 DOM, 그릴 곳);
```

-   #### Cursor

```css
cursor: pointer;
cursor: text; /* input의 커서 */
cursor: help; /* 도움말 */
cursor: wait; /* 기다림 */
cursor: grab; /* 드래그할 수 있는 것 같이 */
cursor: zoom-in; /* 확대할 수 있는 것 같이 */
```

-   #### Styled-components declaration

```ts
// style/styled.d.ts
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            white: string;
            background: string;
        };
        something: string;
        youWant: string;
    }
}
```

```ts
// style/theme.ts
import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    colors: {
        white: "#ffffff",
        background: "#000000",
    },
    something: "0px",
    youWant: "1rem",
};
```

-   #### React-query useQuery

basic usage

```tsx
import { useQuery } from "react-query";

const someComponent = () => {
    const { data, isLoading, error } = useQuery("someData", () => {
        axiois.get(GET_API_URL);
    });

    if (isLoading) return <Loading />;
    if (error) return <Error />;
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    );
};
```

-   #### Styled-components props with TS

```tsx

const StyledBtn = styled.button<{width: string}>`
    width: ${({width}) => `${width}px`}
`;


interface StyledSpanProps {
    fontSize: string;
    color: string;
    ...
}

const StyledSpan = styled.span<StyledSpanProps>`
    color: ${({color}) => color};
    ...
`;
```

-   #### Recoil atom usage

```ts
// store/user.ts
import { atom } from "recoil";
import { ICurrentUser } from "types";

export const currentUserState = atom<ICurrentUser>({
    key: "currentUserState",
    default: { isSigned: false },
});

// when using state
import { useRecoilState } from "recoil";
import { currentUserState } from "store/user";
...

const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

// when using state's value
import {useRecoilValue} from "recoil";
...

const currentUser = useRecoilValue(currentUserState);

// when using state's set method
import {useSetRecoilState} from "recoil";
...

const setCurrentUser = useSetRecoilState(currentUserState);
```

## Issue

-   `ERROR` Modal: `ref` is not a prop.

    prop의 이름은 ref가 안됨

`Fix`

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

`Fix`

```tsx
interface ISomething {
    refs: React.RefObject<HTMLDivElement>;
}
```

-   `ERROR` `idpiframe_initialization_failed` when google login

mount시 Client ID가 틀렸다고 말하며, 구글 로그인 시 `popup_closed_by_user` 오류를 뱉는 현상

`Fix`

브라우저의 모든 쿠키과 캐시를 삭제하여 해결 ...
