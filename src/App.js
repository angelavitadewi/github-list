import './App.css';
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Detail from './page/Detail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} exact />
            <Route path='detail/:username' element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
