import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { typo, palette } from "../shared/styles";
import search from "../assets/icons/Search.svg";

const Wrapper = styled.div`
  form {
    display: flex;
    gap: 20px;

    .search-input {
      width: 1170px;
      height: 54px;
      background-color: ${palette.default.white};
      border: 1px solid ${palette.coolGray.gray20};
      border-radius: 10px;
      box-sizing: border-radius;
      padding: 0 0 0 15px;
      gap: 32px;
      display: flex;
      align-items: center;
    }
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  background-color: ${palette.default.white};
  color: ${palette.coolGray.gray40};
  ${typo.body.h8};
`;

const Style = css`
  outline: none;
  border: none;
  background-color: ${palette.default.white};
  ::placeholder {
    color: ${palette.coolGray.gray40};
  }
  color: ${palette.coolGray.gray100};
  ${typo.body.h8};
`;

const Submit = styled.button`
  width: 151px;
  height: 54px;

  background-color: ${palette.primary.blue100};
  ${typo.body.h7};
  color: ${palette.default.white};
`;

export const SearchBar = ({ options }) => {
  let searchOption = options;
  return (
    <Wrapper>
      <form>
        <div className="search-input">
          <img src={search} width="24px"></img>
          <Input placeholder={"검색어를 입력하세요."}></Input>
        </div>
        <Submit>검색</Submit>
      </form>
    </Wrapper>
  );
};
