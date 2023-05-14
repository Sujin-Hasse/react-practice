import React from "react";
import styled from "styled-components";

const Movie = ({ data }) => {
  return (
    <>
      <MovieBox>
        <Movierank>{data.rank}</Movierank>
        <WrapMovieImg>
          <MovieImg src={data.img} />
        </WrapMovieImg>

        <MovieTitle>{data.title}</MovieTitle>

        <Movieyear>
          {data.year}•{data.country}
        </Movieyear>
        <MovieAverage>평균★{data.average}</MovieAverage>
        <MoviePercent>
          예매율 {data.percent} 누적관객 {data.audience}
        </MoviePercent>
      </MovieBox>
    </>
  );
};

const WrapMovieImg = styled.div`
  position: relative;
  z-index: -1;
`;

const MovieImg = styled.img`
  width: 197px;
  height: 287px;
  align-items: center;
`;

const MovieBox = styled.div`
  flex-direction: column;
  border: 1px solid;
  width: 197px;
  height: 400px;
`;

const MovieTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Movierank = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 24px;
  height: 24px;
  font-size: 16px;
  color: white;
  background-color: rgba(0, 0, 0, 0.77);
  font-weight: 700;
  border-radius: 4px;
  opacity: 1;
`;
const Movieyear = styled.p`
  font-size: 14px;
`;
const MovieAverage = styled.p`
  color: RGB(84, 87, 101);
  font-size: 14px;
`;
const MoviePercent = styled.p`
  color: RGB(116, 116, 122);
  font-size: 13px;
`;

export default Movie;
