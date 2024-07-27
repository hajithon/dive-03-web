import React from "react";
import { typo, palette } from "../shared/styles/index";
import styled from "@emotion/styled";
import check from "../assets/icons/Check.svg";

const DefalutStyle = styled.button`
  background-color: ${palette.coolGray.gray10};

  padding: 20px 32px;
`;

const SelectedStyle = styled.button`
  background-color: ${palette.primary.blue20};
  border: 1px solid ${palette.primary.blue70};
  border-radius: 10px;
  padding: 20px 32px;
  color: ${palette.coolGray.gray70};
  display: flex;

  align-items: center;
`;

const OStyle = styled.button`
  background-color: ${palette.primary.blue20};
  padding: 20px 32px;
`;

const XStyle = styled.button`
  background-color: ${palette.primary.blue20};
  padding: 20px 32px;
`;

const MODE = { 1: DefalutStyle, 2: SelectedStyle, 3: OStyle, 4: XStyle };

export const QuizAnswerButton = ({ mode, quiz }) => {
  switch (mode) {
    case 1:
      return;
    case 2:
      return (
        <SelectedStyle>
          <div>{quiz}</div> <img src={check} />
        </SelectedStyle>
      );
    case 3:
      return;
    case 4:
      return;
  }
};
