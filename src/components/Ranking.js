import React from "react";
import Movie from "../components/Movie.js";
import styled from "styled-components";

const Ranking = ({ data }) => {
  // const { data } = props;

  return (
    <>
      <MovieWrapper>
        {/* /* DATA라는 배열을 돌면서 만든 새로운 배열을 Movie 라는 컴포넌트에서
        props 로 쓰겠다. 여기서 map을 활용해 배열을 이미 만들었으니, link로 연결할 필요 없이 onclick에 state를 연결해 상세페이지 컴포넌트를 부르면 되긴함*/}
        {data.map((movie, index) => (
          <Movie data={movie} key={index} />
        ))}
      </MovieWrapper>
    </>
  );
};

const MovieWrapper = styled.div`
  display: flex;
  overflow: auto;
  /* white-space: nowrap; */
`;

export default Ranking;
