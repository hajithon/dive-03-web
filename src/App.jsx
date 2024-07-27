import styled from "@emotion/styled";

import { HomePage } from "./pages/HomePage";
import { QuizPage } from "./pages/QuizPage";
import { ArticlePage } from "./pages/ArticlePage";

const Wrapper = styled.div`
  position: absolute;

  width: 100%;
  top: 80px;
  align-items: center;
`;

function App() {
  return (
    <>
      <HomePage></HomePage>
      <QuizPage></QuizPage>
      <ArticlePage></ArticlePage>
    </>
  );
}

export default App;
