import styled from "@emotion/styled";
import { QuizTitle } from "../components/QuizTitle";
import { Quiz } from "./Quiz";
import { QuizSubmitButton } from "../components/QuizSubmitButton";
import { Space } from "../shared/Space";

const Wrapper = styled.div`
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
  }
`;

export const Quizes = () => {
  return (
    <Wrapper>
      <QuizTitle title={"베이스 입문자들을 위한 알쓸신잡"}></QuizTitle>
      <form>
        <Quiz
          quiz={{
            question: "전기 베이스 기타를 처음으로 제작한 사람은 누구인가요?",
            option: [
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
            ],
          }}
        ></Quiz>
        <Quiz
          quiz={{
            question: "전기 베이스 기타를 처음으로 제작한 사람은 누구인가요?",
            option: [
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
            ],
          }}
        ></Quiz>
        <Quiz
          quiz={{
            question: "전기 베이스 기타를 처음으로 제작한 사람은 누구인가요?",
            option: [
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
            ],
          }}
        ></Quiz>
        <Quiz
          quiz={{
            question: "전기 베이스 기타를 처음으로 제작한 사람은 누구인가요?",
            option: [
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
            ],
          }}
        ></Quiz>
        <Quiz
          quiz={{
            question: "전기 베이스 기타를 처음으로 제작한 사람은 누구인가요?",
            option: [
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
              { num: "1", text: "밥" },
            ],
          }}
        ></Quiz>
        <QuizSubmitButton mode={"Submit"}></QuizSubmitButton>
      </form>
      <Space height={110}></Space>
    </Wrapper>
  );
};
