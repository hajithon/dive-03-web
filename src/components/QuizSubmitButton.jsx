import React from "react";
import { css } from "@emotion/react";
import { typo, palette } from "../shared/styles/index";
import styled from "@emotion/styled";

const SubmitButton = styled.button`
  background-color: ${palette.primary.blue100};
  width: 220px;

  color: ${palette.default.white};

  padding: 16px 20px;
  ${typo.body.h5};
`;

const ReviewButton = styled.button`
  background-color: ${palette.primary.blue30};
  width: 220px;

  color: ${palette.coolGray.gray60};

  padding: 16px 20px;
  ${typo.body.h5};
`;

export const QuizSubmitButton = ({ mode }) => {
  return mode == "Submit" ? (
    <SubmitButton>제출하기</SubmitButton>
  ) : (
    <ReviewButton>다시 검토하기</ReviewButton>
  );
};
