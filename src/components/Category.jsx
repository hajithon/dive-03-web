import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles";

const Wrapper = styled.div`
  max-width: 83px;
  background-color: white;
  display: inline-block;
  color: ${palette.primary.blue70};
  border: 1px solid ${palette.primary.blue70};
  border-radius: 20px;
  box-sizing: border-box;
  padding: 5.5px 16px;
  ${typo.body.h9};
`;

export const Category = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};
