import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles";

const Wrapper = styled.div`
  background-color: white;
  color: ${palette.primary.blue70};
  border: 2px solid ${palette.primary.blue70};
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px 16px;
  position: relative;
  ${typo.body.h9};
`;

export const Category = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};
