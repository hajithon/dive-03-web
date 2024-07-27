import styled from "@emotion/styled";
import fish from "../assets/images/Fish.svg";
import { typo, palette } from "../shared/styles";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 665px;
  justify-content: space-between;
  .fish-cheering {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 560px;
    height: 50px;
    background-color: ${palette.primary.blue100};
    border-radius: 30px 40px 40px 0px;

    color: ${palette.default.white};
    ${typo.head.h3};
  }
`;

export const ArticleNotification = ({ progress }) => {
  let num;
  if (progress >= 75) num = 2;
  else if (progress >= 50) num = 1;
  else num = 0;
  const cheer = [
    "어떤 이야기가 있을지 기대감을 안고 읽어보아요!",
    "벌써 절반이나 읽었어요! 조금만 더 힘내요!",
    "거의 다 왔어요! 마지막까지 파이팅~",
  ][num];
  return (
    <Wrapper>
      <img src={fish} width="95px"></img>
      <div className="fish-cheering">{cheer}</div>
    </Wrapper>
  );
};
