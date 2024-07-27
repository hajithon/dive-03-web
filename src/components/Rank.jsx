import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles";

const Wrapper = styled.div`
  height: 168px;
  width: 396px;
  .rank-user {
  }
  .rank-point {
  }
`;
export const Rank = ({ user }) => {
  return (
    <Wrapper>
      <div className="rank-user"></div>
      <div className="rank-point"></div>
    </Wrapper>
  );
};
