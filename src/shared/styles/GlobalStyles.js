import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { typo, palette } from "../styles/index";

export const GlobalStyle = css`
  ${emotionReset}
  body {
    width: 100vw;
    height: auto;
    font-family: "Pretendard";

    background-color: ${palette.default.backgroundGray};
  }
`;
