import { QuizSubmitButton } from "./components/QuizSubmitButton";
import { QuizAnswerButton } from "./components/QuizAnswerButton";
import { Tag } from "./components/Tag";
import { GNB } from "./widgets/GNB";
import { SNB } from "./widgets/SNB";
import { Quiz } from "./widgets/Quiz";

import styled from "@emotion/styled";
import { QuizTitle } from "./components/QuizTitle";
import { Quizes } from "./widgets/Quizes";
import { Article } from "./widgets/Article";
import { Ranking } from "./widgets/Ranking";
import { ArticleNotification } from "./components/ArticleNotification";

const Wrapper = styled.div`
  position: absolute;

  width: 100%;
  top: 80px;
  align-items: center;
`;

function App() {
  return (
    <>
      <GNB props={"베이스 입문자들을 위한 알쓸신잡"}>오예</GNB>
      <SNB user={{ name: "하이픈", tier: "골드", point: 1000 }}></SNB>
      <Wrapper>
        <Ranking></Ranking>
        <ArticleNotification progress={75}></ArticleNotification>
        <Quizes></Quizes>
        <Article
          article={{ title: "2. 베이스의 역사", content: CONTENT }}
        ></Article>
      </Wrapper>
    </>
  );
}

export default App;

const CONTENT =
  "베이스 기타는 현대 음악에서 중요한 역할을 차지하는 악기로, 그 기원과 발전 과정에서 많은 흥미로운 이야기를 담고 있습니다. 베이스 기타는 1950년대 초에 미국의 뮤지션 레오 펜더(Leo Fender)에 의해 처음으로 전기 베이스 기타 형태로 제작되었습니다. 그는 베이스 기타를 작고 가벼운 형태로 만들고자 했고, 그 결과 오늘날 우리가 알고 있는 전기 베이스 기타가 탄생하게 되었습니다.\
베이스 기타는 전통적인 더블 베이스보다 훨씬 작고 휴대성이 뛰어나며, 앰프를 통해 큰 소리를 낼 수 있어 밴드 연주에서 매우 유용합니다. 이는 특히 로큰롤과 재즈 같은 장르에서 큰 인기를 끌었으며, 이후 다양한 음악 장르에서 필수적인 악기로 자리 잡게 되었습니다.\
베이스 기타의 주된 역할은 리듬 섹션에서 드럼과 함께 곡의 기초를 제공하는 것입니다. 이는 곡의 전반적인 리듬과 하모니를 강화하고, 다른 악기들이 더 자유롭게 연주할 수 있도록 도와줍니다. 베이스 기타는 주로 낮은 음역대를 담당하며, 이 때문에 곡의 무게감을 더해줍니다.";
