import { QuizSubmitButton } from "./components/QuizSubmitButton";
import { QuizAnswerButton } from "./components/QuizAnswerButton";
import { Tag } from "./components/Tag";
import { GNB } from "./widgets/GNB";
import { SNB } from "./widgets/SNB";

function App() {
  return (
    <>
      <GNB props={"베이스 입문자들을 위한 알쓸신잡"}>오예</GNB>
      <SNB user={{ name: "하이픈", tier: "골드", point: 1000 }}></SNB>
      <Tag tag={"인문학"} clicked={false}></Tag>
      <QuizSubmitButton mode={"Submit"}></QuizSubmitButton>
      <QuizAnswerButton mode={2} quiz={"오예"}></QuizAnswerButton>
    </>
  );
}

export default App;
