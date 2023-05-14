import styled from "styled-components";
import Ranking from "../components/Ranking";

// import { Routes, Route } from "react-router-dom";
import MoviePage from "../components/MoviePage";
import { DATA } from "../assets/Data";

const Main = () => {
  return (
    <WrapRanking>
      {/* <Routes>
        <Route path="/" element={<Ranking data={DATA} />} />
        <Route path="/main/:rank" element={<MoviePage />} />
      </Routes> */}
      <RankingTitle>박스오피스 순위</RankingTitle>
      <Ranking data={DATA} />
    </WrapRanking>
  );
};

const RankingTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
const WrapRanking = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px 15px 30px;
`;
export default Main;
