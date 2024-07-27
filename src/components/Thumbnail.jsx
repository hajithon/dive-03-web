import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles";
import bookmark from "../assets/icons/Bookmark.svg";
import { Category } from "./Category";
import { Space } from "../shared/Space";

const Wrapper = styled.div`
  width: 340px;
  height: 270px;
  position: relative;
  background-color: ${palette.default.white};

  border-radius: 8px;
  box-shadow: 0px 0px 4.2px 0px rgba(185, 185, 185, 0.57);
  display: flex;
  flex-direction: column;

  .thumbnail-img {
    background-color: ${palette.coolGray.gray30};
    height: 120px;
    border-radius: 8px 8px 0 0;
    img {
      position: absolute;
      top: 16px;
      right: 20px;
    }
  }
  .thumbnail-content {
    margin: 16px 23px 18px 23px;
    display: flex;
    flex-direction: column;
    .thumbnail-title {
      ${typo.body.h5};
      color: ${palette.coolGray.gray70};
    }
    .thumbnail-time {
      ${typo.body.h9};
      color: ${palette.coolGray.gray40};
    }
  }
`;

export const Thumbnail = () => {
  return (
    <Wrapper>
      <div className="thumbnail-img">
        <img src={bookmark}></img>
      </div>
      <div className="thumbnail-content">
        <Category text={"문화예술"}></Category>
        <Space height={10}></Space>
        <div className="thumbnail-title">{"베이스 입문자를 위한 알쓸신잡"}</div>
        <Space height={36}></Space>

        <div className="thumbnail-time">{"예상 시간 15분"}</div>
      </div>
    </Wrapper>
  );
};
