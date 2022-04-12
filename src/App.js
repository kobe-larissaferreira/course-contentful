/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import styled from "styled-components";
import AuthorCard from "./AuthorCard";
import useContentful from "./useContentful";

function App() {
  const [authors, setAuthors] = useState([]);

  const { getAuthors } = useContentful();

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  });

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Wrapper>
      <TitleWrapper>
        <h1>Contentful API</h1>
        <p>Design Code tutorial</p>
      </TitleWrapper>
      {authors.map((author, index) => (
        <AuthorCard key={index} author={author} />
      ))}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  font-family: Roboto;
  margin: 40px;
  display: grid;
  row-gap: 20px;
  justify-content: center;
`;
const TitleWrapper = styled.div`
  * {
    margin: 0;
  }
`;
