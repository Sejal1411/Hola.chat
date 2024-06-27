import { Routes, Route } from 'react-router-dom';
import  Login  from './components/Login';
import Main from './components/Main';


const App = () => {

  return (
  // <Main />
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="app" element={<Login />}/>
  </Routes>
  // <Login />
  );  
  }

export default App
