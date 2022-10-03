import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {
  return (
    <div>
      {/* Pass child components in parent component */}
      <Article />
      <Comment />
    </div>
  );
}

export default App;
