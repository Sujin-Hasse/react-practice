import React from "react";
import { DATA } from "../assets/Data.js";
import Movie from "../components/Movie.js";
import styled from "styled-components";

const Ranking = () => {
  return (
    <>
      <MovieWrapper>
        {DATA.map((data, index) => (
          <Movie data={data} key={index} />
        ))}
      </MovieWrapper>
    </>
  );
};

const MovieWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  overflow: auto;
  white-space: nowrap;
`;

export default Ranking;
