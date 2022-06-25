import { Routes, Route, BrowserRouter,} from 'react-router-dom';
import Home from './home/Home';
import Searchwindow from './search/Searchwindow';
import Result from './result/Result';
function App() {
  return (
  <BrowserRouter>
      <Routes>
      <Route element={<Result/>} path="/result/:text" ></Route>
      <Route element={<Home/>} path="/" ></Route>
      <Route element={<Searchwindow/>}path="/search"></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
