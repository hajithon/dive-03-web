import styled from "@emotion/styled";
import { css } from "@emotion/css";
import key from "../assets/images/Key.svg";
import { Category } from "./Category";
import { typo, palette } from "../shared/styles";
import { Space } from "../shared/Space";

const Wrapper = styled.div`
  .quiz-title {
    color: ${palette.coolGray.gray70};
    ${typo.head.h1};
  }

  .quiz-description {
    color: ${palette.coolGray.gray40};
    ${typo.head.h4};
  }
`;

const QuizCount = ({ text }) => {
  const Box = styled.div`
    background-color: white;
    display: inline-block;
    color: ${palette.primary.blue70};
    border: 2px solid ${palette.primary.blue70};
    border-radius: 24px;
    box-sizing: border-box;
    padding: 8px 16px;
    position: relative;
    ${typo.body.h5};
  `;
  return <Box>{text}</Box>;
};

export const QuizTitle = ({ title }) => {
  const Style = css`
    margin-top: 110px;
    display: flex;
    width: 680px;
    justify-content: space-between;
    margin-bottom: 36px;
  `;
  return (
    <div className={Style}>
      <img src={key} width="196px"></img>
      <Wrapper>
        <QuizCount text={"총 5문제"}></QuizCount>
        <Space height={16}></Space>
        <div className="quiz-title">{title}</div>
        <Space height={32}></Space>

        <div className="quiz-description">
          {"글을 다 읽었다면 함께 퀴즈를 풀어보아요!"}
          <br></br>
          {"정답시 한 문항당 5P의 리워드가 제공됩니다."}
        </div>
      </Wrapper>
    </div>
  );
};
