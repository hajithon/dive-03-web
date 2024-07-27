import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles";
import { SearchOption } from "../components/SearchOption";
import { SearchBar } from "../components/SearchBar";

const Wrapper = styled.div`
  width: 1420px;
  height: 232px;
  box-sizing: border-box;
  padding: 26px 40px;
  border-radius: 12px;

  background-color: ${palette.default.blueGray};

  display: flex;
  flex-direction: column;
  gap: 26px;

  .search-choice {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const SearchEngine = () => {
  return (
    <Wrapper>
      <div className="search-choice">
        <SearchOption text={"분야"}></SearchOption>
        <SearchOption text={"예상시간"}></SearchOption>
      </div>
      <div className="search-input-bar">
        <SearchBar options={[]}></SearchBar>
      </div>
    </Wrapper>
  );
};
