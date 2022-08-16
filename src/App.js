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
import Product from "./result/Product";
import Write from "./result/Write";
import Story from "./location/Story";
import Boss from "./mypage/boss/Boss";
import Filterpage from "./result/Filterpage";
import Banner from "./home/Banner";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<Result />} path="/result/:text"></Route>
          <Route element={<Detail />} path="/detail/:id"></Route>
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
          <Route element={<Product />} path="/product"></Route>
          <Route element={<Write />} path="/write"></Route>
          <Route element={<Story />} path="/story"></Route>
          <Route element={<Boss />} path="/boss"></Route>
          <Route element={<Filterpage />} path="/filterpage"></Route>
          <Route element={<Banner />} path="/banner"></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default App;
