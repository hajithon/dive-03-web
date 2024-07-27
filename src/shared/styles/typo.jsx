import { css } from "@emotion/react";

const fontFamily = "Pretendard";

export const typo = {
  head: {
    h1: css`
      font-family: ${fontFamily};
      font-size: 32pt;
      font-weight: 700;
      line-height: 150%;
    `,
    h2: css`
      font-family: ${fontFamily};
      font-size: 26pt;
      font-weight: 700;
      line-height: 150%;
    `,
    h3: css`
      font-family: ${fontFamily};
      font-size: 22pt;
      font-weight: 700;
      line-height: 150%;
    `,
    h4: css`
      font-family: ${fontFamily};
      font-size: 22pt;
      font-weight: 500;
      line-height: 170%;
    `,
  },
  body: {
    h5: css`
      font-family: ${fontFamily};
      font-size: 18pt;
      font-weight: 700;
      line-height: 130%;
    `,
    h6: css`
      font-family: ${fontFamily};
      font-size: 18pt;
      font-weight: 500;
      line-height: 150%;
    `,
    h7: css`
      font-family: ${fontFamily};
      font-size: 16pt;
      font-weight: 600;
      line-height: 150%;
    `,
    h8: css`
      font-family: ${fontFamily};
      font-size: 16pt;
      font-weight: 500;
      line-height: 150%;
    `,
    h9: css`
      font-family: ${fontFamily};
      font-size: 14pt;
      font-weight: 500;
      line-height: 130%;
    `,
  },
};
