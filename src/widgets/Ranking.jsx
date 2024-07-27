import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles";
import banner from "../assets/images/Banner.svg";
import { Rank } from "../components/Rank";

const Wrapper = styled.div`
  width: 1420px;
  height: 230px;
  position: relative;

  box-sizing: border-box;
  background-color: ${palette.primary.blue70};
  border-radius: 12px;

  img {
    position: absolute;
  }
`;

export const Ranking = () => {
  return (
    <Wrapper>
      <Rank
        user={{ name: "하이픈", tier: "골드", rank: 3, monthlyPoint: 520 }}
      ></Rank>
      <img src={banner} width="1420px;"></img>
    </Wrapper>
  );
};
