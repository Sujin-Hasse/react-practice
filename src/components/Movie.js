import React from "react";
import styled from "styled-components";

const Movie = ({ data }) => {
  return (
    <>
      <MovieBox>
        <MovieImg src={data.img} />
        <MovieTitle>{data.title}</MovieTitle>
        <Movierank>{data.rank}</Movierank>
        <Movieyear>{data.year}</Movieyear>
        <MovieAverage>{data.average}</MovieAverage>
        <MoviePercent>{data.percent}</MoviePercent>
        <MovieAudience>{data.audience}</MovieAudience>
      </MovieBox>
    </>
  );
};
const MovieImg = styled.img``;

const MovieBox = styled.div`
  flex-direction: column;
  border: 1px solid;
`;

const MovieTitle = styled.p``;

const Movierank = styled.p``;
const Movieyear = styled.p``;
const MovieAverage = styled.p``;
const MoviePercent = styled.p``;
const MovieAudience = styled.p``;

export default Movie;
