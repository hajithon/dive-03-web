import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles";

const Wrapper = styled.div`
  width: 1000px;
  height: 650px;

  background-color: ${palette.default.white};
  box-shadow: 0px 0px 4.2px 0px rgba(185, 185, 185, 0.57);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 54px 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .article-title {
    ${typo.head.h2};
    color: ${palette.coolGray.gray60};
  }

  .article-content {
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${typo.head.h4};
    color: ${palette.coolGray.gray80};
  }
`;

export const Article = ({ article }) => {
  return (
    <Wrapper>
      <div className="article-title">{article.title}</div>
      <div className="article-content">{article.content}</div>
    </Wrapper>
  );
};
