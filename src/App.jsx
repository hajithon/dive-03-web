import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleContent from "./apis/ArticleContent.jsx";
import ArticleSearch from "./apis/ArticleSearch.jsx";
import Login from "./apis/Login.jsx";
import MemberInfo from "./apis/MemberInfo.jsx";
import QuizContent from "./apis/QuizContent.jsx";
import QuizSubmit from "./apis/QuizSubmit.jsx";
import Signup from "./apis/Signup.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/member-info" element={<MemberInfo />} />
          <Route path="/article-search" element={<ArticleSearch />} />
          <Route path="/article-content/:id" element={<ArticleContent />} />
          <Route path="/quiz-content/:id" element={<QuizContent />} />
          <Route path="/quiz-submit" element={<QuizSubmit />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>Please select an option from the menu.</p>
  </div>
);

export default App;
