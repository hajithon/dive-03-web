import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles";
import { Tag } from "./Tag";

const Wrapper = styled.div`
  display: flex;
  gap: 34px;
  justify-content: center;
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

export const SearchOption = () => {
  return (
    <Wrapper>
      <div className="search-option">{text}</div>
      <div className="search-options">
        <Tag tag={"인문학"} clicked={false}></Tag>
      </div>
    </Wrapper>
  );
};
