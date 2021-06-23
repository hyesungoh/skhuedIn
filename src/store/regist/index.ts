import { atom } from "recoil";

export const slideIdState = atom<number>({
    key: "slideIdState",
    default: 0,
});

export const contentState = atom<string>({
    key: "contentState",
    default: "",
});

export const profileImageState = atom<File | undefined>({
    key: "profileImageState",
    default: undefined,
});

export const questionFirstState = atom<string>({
    key: "questionFirstState",
    default: `### 간단한 자기소개 부탁드립니다 !

**학번** : 201732037

**전공 ( 부전공/복수전공이 있다면 적어주세요)** : 소프트웨어 공학과

**간단한 인사** :

안녕하세요 18학번 허수진 입니다 ! 저를 아는 사람들도 있을텐데 오랜만에 학교 사람들을 만나는 기분이라 설레네요 ~`,
});

export const questionSecondState = atom<string>({
    key: "questionSecondState",
    default: `### 1. 학교에서 학년 별로 어떤 생활을 했었는지 간단히 적어주세요 !

**1학년** :

**2학년** :

**3학년** :

**4학년** :

### 2. 들었던 수업 중 여러 의미로 가장 기억에 남는 수업 썰 2개만 풀어주세요 ~

### 3. 학교 다니면서 자신의 성적은 어땠나요? 구체적으로 말씀하고 싶지 않으시면 상중하로 나누셔도 됩니다!

### 4. 했던 동아리
    `,
});

export const questionThirdState = atom<string>({
    key: "questionThirdState",
    default: `
### 1.	현재 어떤 직군에서 어떤 직업을 가지고 일하고 계시나요?

### 2.	직업을 선택하게 된 계기

### 3.	취업 준비는 어떻게 하셨나요?

### 4.	후배들에게 해주고 싶은 말

`,
});
