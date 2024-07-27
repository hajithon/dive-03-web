import { QuizSubmitButton } from "./components/QuizSubmitButton";
import { QuizAnswerButton } from "./components/QuizAnswerButton";
import { Tag } from "./components/Tag";
import { GNB } from "./widgets/GNB";
import { SNB } from "./widgets/SNB";
import { Quiz } from "./widgets/Quiz";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: absolute;
  left: 280px;
  top: 80px;
`;

function App() {
  return (
    <>
      <GNB props={"베이스 입문자들을 위한 알쓸신잡"}>오예</GNB>
      <SNB user={{ name: "하이픈", tier: "골드", point: 1000 }}></SNB>
      <Wrapper>
        <Tag tag={"인문학"} clicked={false}></Tag>
        <QuizSubmitButton mode={"Submit"}></QuizSubmitButton>
        <QuizAnswerButton
          mode={3}
          quiz={{ num: "Q1.", text: "밥" }}
        ></QuizAnswerButton>
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
      </Wrapper>
    </>
  );
}

export default App;
