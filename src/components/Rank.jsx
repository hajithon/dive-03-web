import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles";
import { Tier } from "./Tier";

const Wrapper = styled.div`
  height: 168px;
  width: 396px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 29px 29px 33px 40px;
  .rank-user {
    margin: 10px 18px 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rank-tier {
        display: flex;
        flex-direction: column;
        gap: 3px;
        .rank-tier-text {
            ${typo.head.h3};
            color: ${palette.default.white};
        }
    }
    .rank-ranking {
        font-family: 'Pretendard';
        font-size: 55px;
        font-weight: 700;
        line-height: 150%
        color: ${palette.default.white};
    }
  }
  .rank-point {
    background-color: ${palette.primary.blue50};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 5px 20px;

    .rank-point-text {
      ${typo.body.h5};
      color: ${palette.primary.blue10};
    }
    .rank-point-value {
      ${typo.head.h1};
      color: ${palette.primary.blue10};
    }
  }
  position: absolute;
`;
export const Rank = ({ user }) => {
  return (
    <Wrapper>
      <div className="rank-user">
        <div className="rank-tier">
          <div className="rank-tier-text">{user.name} 님의 현재 순위</div>
          <Tier tier={3}></Tier>
        </div>
        <div className="rank-ranking">{user.rank}위</div>
      </div>
      <div className="rank-point">
        <div className="rank-point-text">{"이번 달 획득 포인트"}</div>
        <div className="rank-point-value">+ {user.monthlyPoint}P</div>
      </div>
    </Wrapper>
  );
};
