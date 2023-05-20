import styled from "styled-components";
import Ranking from "../components/Ranking";
import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import MoviePage from "../components/MoviePage";
import { DATA } from "../assets/Data";
import { useEffect } from "react";

import axios from "axios";

const Main = () => {
  const [state, setState] = useState([]);

  const ResponseData = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        method: "GET", //method 지정을 하지 않을 경우에 default 값은 GET이다. 사실상 필요 없는 코드
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
      }
    );
    setState(res.data.results);
    console.log(res);
    // .then((res) => console.log(res))
    // .then((res) => setState(res.data.results))
    // .catch((err) => console.log(err));
  };

  useEffect(() => {
    ResponseData();
    console.log(state);
  }, [state]);

  return (
    <WrapRanking>
      <button
        onClick={() => {
          ResponseData();
        }}
      >
        gd
      </button>

      {/* <Routes>
        <Route path="/" element={<Ranking data={DATA} />} />
        <Route path="/main/:rank" element={<MoviePage />} />
      </Routes> */}
      <RankingTitle>박스오피스 순위</RankingTitle>
      <Ranking data={state} />
    </WrapRanking>
  );
};

const WrapRanking = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px 15px 30px;
`;

const RankingTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Test = styled.div`
  width: 100px;
  height: 100px;
`;

const Test2 = styled.p`
  font-size: 10px;
`;
export default Main;
