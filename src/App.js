import { Routes, Route, BrowserRouter,} from 'react-router-dom';
import Home from './home/Home';
import Searchwindow from './search/Searchwindow';
import Result from './result/Result';
import Heart from './heart/Heart';
import Mypage from './mypage/Mypage';
import Login from './login/Login'

function App() {
  return (
  <BrowserRouter>
      <Routes>
      <Route element={<Result/>} path="/result/:text" ></Route>
      <Route element={<Home/>} path="/" ></Route>
      <Route element={<Searchwindow/>}path="/search"></Route>
      <Route element={<Heart/>} path="/heart"></Route>
      <Route element={<Mypage/>} path="/mypage"></Route>
      <Route element={<Login/>} path="/login"></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
