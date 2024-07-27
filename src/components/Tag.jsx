import { typo, palette } from "../shared/styles/index";
import React from "react";
import { css } from "@emotion/react";

export const Tag = ({ tag }) => {
  return (
    <button
      className={css`
        border-radius: 20px;
        background-color: ${palette.default.white};
      `}
    >
      {tag}
    </button>
  );
};
