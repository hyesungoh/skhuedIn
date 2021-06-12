function loadSuggestions(text: string): any {
    return new Promise((accept, reject) => {
        setTimeout(() => {
            const suggestions = [
                {
                    preview: "제목",
                    value: "# ",
                },
                {
                    preview: "인용",
                    value: "> ",
                },
                {
                    preview: "강조",
                    value: "** **",
                },
                {
                    preview: "링크 달기",
                    value: "[링크](url)",
                },
                {
                    preview: "이미지",
                    value: "![이미지 글](url)",
                },
            ].filter((i) =>
                i.preview.toLowerCase().includes(text.toLowerCase())
            );
            accept(suggestions);
        }, 250);
    });
}

export default loadSuggestions;
