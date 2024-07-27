import styled from "@emotion/styled";
import React from "react";
import { typo, palette } from "../shared/styles/index";
import { QuizAnswerButton } from "../components/QuizAnswerButton";
import { Space } from "../shared/Space";

const Wrapper = styled.div`
  width: 780px;
  background-color: ${palette.default.white};
  box-shadow: 0px 0px 4.2px 0px rgba(185, 185, 185, 0.57);
  border-radius: 12px;
  box-sizing: border-box;

  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 80px;
  .quiz {
    color: ${palette.coolGray.gray70};
    ${typo.head.h3};
  }

  .quiz-option {
    height: 304px;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
  }
`;

export const Quiz = ({ quiz }) => {
  return (
    <Wrapper>
      <div className="quiz">{quiz.question}</div>
      <Space height={30}></Space>
      <div className="quiz-option">
        <QuizAnswerButton mode={1} quiz={quiz.option[0]}></QuizAnswerButton>
        <QuizAnswerButton mode={1} quiz={quiz.option[1]}></QuizAnswerButton>
        <QuizAnswerButton mode={1} quiz={quiz.option[2]}></QuizAnswerButton>
        <QuizAnswerButton mode={1} quiz={quiz.option[3]}></QuizAnswerButton>
      </div>
    </Wrapper>
  );
};
