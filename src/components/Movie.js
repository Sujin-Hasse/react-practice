import React from "react";
import styled from "styled-components";

const Movie = (props) => {
  const { data } = props;
  return (
    <>
      <MovieTitle>{data.title}</MovieTitle>
    </>
  );
};

const MovieTitle = styled.h1``;

export default Movie;
