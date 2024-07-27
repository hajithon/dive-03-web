import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { typo, palette } from "../styles/index";

export const GlobalStyle = css`
  ${emotionReset}
  body {
    width: 100vw;
    height: 200vh;
    background-color: ${palette.default.backgroundGray};
    font-family: "Pretendard";
    overflow-y: auto;

    background-color: ${palette.default.backgroundGray};
  }
`;
