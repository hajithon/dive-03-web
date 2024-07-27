import { css } from "@emotion/react";

const fontFamily = "Pretendard";

export const typo = {
  head: {
    h1: css`
      font-family: ${fontFamily};
      font-size: 32px;
      font-weight: 700;
      line-height: 150%;
    `,
    h2: css`
      font-family: ${fontFamily};
      font-size: 26px;
      font-weight: 700;
      line-height: 150%;
    `,
    h3: css`
      font-family: ${fontFamily};
      font-size: 22px;
      font-weight: 700;
      line-height: 150%;
    `,
    h4: css`
      font-family: ${fontFamily};
      font-size: 22px;
      font-weight: 500;
      line-height: 170%;
    `,
  },
  body: {
    h5: css`
      font-family: ${fontFamily};
      font-size: 18px;
      font-weight: 700;
      line-height: 130%;
    `,
    h6: css`
      font-family: ${fontFamily};
      font-size: 18px;
      font-weight: 500;
      line-height: 150%;
    `,
    h7: css`
      font-family: ${fontFamily};
      font-size: 16px;
      font-weight: 600;
      line-height: 150%;
    `,
    h8: css`
      font-family: ${fontFamily};
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
    `,
    h9: css`
      font-family: ${fontFamily};
      font-size: 14px;
      font-weight: 500;
      line-height: 130%;
    `,
  },
};
