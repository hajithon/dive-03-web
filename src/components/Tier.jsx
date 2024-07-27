import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles";
import tier_bronze from "../assets/images/Tier1.svg";
import tier_silver from "../assets/images/Tier2.svg";
import tier_gold from "../assets/images/Tier3.svg";
import tier_diamond from "../assets/images/Tier4.svg";
import tier_master from "../assets/images/Tier5.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 4px;
  img {
    position: relative;
  }
  div {
    color: ${palette.default.white};
    ${typo.body.h5};
    position: relative;
  }
`;

export const Tier = ({ tier }) => {
  const TIER = [tier_bronze, tier_silver, tier_gold, tier_diamond, tier_master][
    tier - 1
  ];
  const TIER_TEXT = ["브론즈", "실버", "골드", "다이아몬드", "마스터"][
    tier - 1
  ];
  return (
    <Wrapper>
      <img src={TIER} width="30px"></img>
      <div>{TIER_TEXT}</div>
    </Wrapper>
  );
};
