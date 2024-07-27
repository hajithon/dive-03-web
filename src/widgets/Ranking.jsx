import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles";
import banner from "../assets/images/Banner.svg";

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
      <img src={banner} width="1420px;"></img>
    </Wrapper>
  );
};
