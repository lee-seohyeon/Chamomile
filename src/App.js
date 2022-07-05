import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Searchwindow from "./search/Searchwindow";
import Result from "./result/Result";
import Heart from "./heart/Heart";
import Mypage from "./mypage/Mypage";
import Login from "./login&join/login/Login";
import Join from "./login&join/join/Join";
import Location from "./location/Location";
import Detail from "./result/Detail";
import Mbtitest from "./mbtitest/Mbtitest";
import Roulette from "./Roulette/Roulette";
import Announce from "./mypage/announce/Announce";
import Servicecenter from "./mypage/servicecenter/Servicecenter";
import Quizpages from "./mbtitest/Quizpages";
import Review from "./result/Review";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Result />} path="/result/:text"></Route>
        <Route element={<Detail />} path="/detail/:name"></Route>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Searchwindow />} path="/search"></Route>
        <Route element={<Heart />} path="/heart"></Route>
        <Route element={<Mypage />} path="/mypage"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Location />} path="/location"></Route>
        <Route element={<Join />} path="/join"></Route>
        <Route element={<Mbtitest />} path="/mbtitest"></Route>
        <Route element={<Roulette />} path="/roulette"></Route>
        <Route element={<Announce />} path="/announce"></Route>
        <Route element={<Servicecenter />} path="/service"></Route>
        <Route element={<Quizpages />} path="/quiz"></Route>
        <Route element={<Review />} path="/review"></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
