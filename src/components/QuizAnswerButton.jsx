import React from "react";
import { typo, palette } from "../shared/styles/index";
import styled from "@emotion/styled";
import empty from "../assets/icons/Empty.svg";
import check from "../assets/icons/Check.svg";
import o from "../assets/icons/O.svg";
import x from "../assets/icons/X.svg";

const Wrapper = styled.div`
  background-color: ${(props) =>
    [
      palette.coolGray.gray10,
      palette.primary.blue20,
      palette.coolGray.gray10,
      palette.red.background,
    ][props.mode - 1]};
  box-sizing: border-box;
  padding: 20px 32px;
  width: 620px;
  border: 1px solid
    ${(props) =>
      [
        palette.coolGray.gray10,
        palette.primary.blue70,
        palette.coolGray.gray10,
        palette.red.outline,
      ][props.mode - 1]};
  border-radius: 10px;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .answer {
    .answer-num {
      ${typo.body.h5};
      color: ${({ mode }) =>
        [
          palette.coolGray.gray40,
          palette.primary.blue100,
          palette.coolGray.gray40,
          palette.coolGray.gray40,
        ][mode - 1]};
    }
    .answer-text {
      ${typo.body.h6};
      color: ${({ mode }) =>
        [
          palette.coolGray.gray60,
          palette.coolGray.gray70,
          palette.coolGray.gray60,
          palette.coolGray.gray60,
        ][mode - 1]};
      position: absolute;
      left: 62px;
    }
    display: flex;
    align-items: center;
    position: relative;
  }
`;

export const QuizAnswerButton = ({ mode, quiz }) => {
  return (
    <Wrapper mode={mode}>
      <div className="answer">
        <div className="answer-num">{quiz.num}</div>
        <div className="answer-text">{quiz.text}</div>
      </div>
      <img src={[empty, check, o, x][mode - 1]} width="24px"></img>
    </Wrapper>
  );
};
