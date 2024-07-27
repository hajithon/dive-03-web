import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles";
import { Tag } from "./Tag";

const Wrapper = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;

  .search-option {
    width: 70px;
    color: ${palette.primary.blue100};
    ${typo.body.h5};
  }
  .search-options {
    justify-content: center;
    display: flex;
    gap: 20px;
  }
`;

export const SearchOption = ({ text }) => {
  return (
    <Wrapper>
      <div className="search-option">{text}</div>
      <div className="search-options">
        {text == "분야" ? (
          <>
            <Tag text={"인문학"} clicked={false}></Tag>
            <Tag text={"자연과학"} clicked={false}></Tag>
            <Tag text={"사회과학"} clicked={false}></Tag>
            <Tag text={"문화예술"} clicked={false}></Tag>
            <Tag text={"공학"} clicked={false}></Tag>
            <Tag text={"예술"} clicked={false}></Tag>
          </>
        ) : (
          <>
            <Tag text={"5분 미만"} clicked={false}></Tag>
            <Tag text={"5분 - 20분"} clicked={false}></Tag>
            <Tag text={"20분 초과"} clicked={false}></Tag>
          </>
        )}
      </div>
    </Wrapper>
  );
};
