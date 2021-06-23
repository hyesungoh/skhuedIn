const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

fs.writeFileSync(
    "./.env",
    `REACT_APP_KAKAO_JS_KEY=${process.env.REACT_APP_KAKAO_JS_KEY}
REACT_APP_GOOGLE_CLIENT_ID=${process.env.REACT_APP_GOOGLE_CLIENT_ID}
REACT_APP_NAVER_CLIENT_ID=${process.env.REACT_APP_NAVER_CLIENT_ID}
`
);
