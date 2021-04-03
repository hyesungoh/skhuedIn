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

## Issue

-   `ERROR` Type 'RefObject<HTMLDivElement>' is missing the following properties

```tsx
interface ISomething {
    refs: React.RefObject<HTMLDivElement>;
}
```
