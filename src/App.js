import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/login/Longin'
import Home from './components/Home/home';
import Profile from './components/profile/Porfile'
import Groups from './components/Groups/groups';
import Friends from './components/AddFriends/AddFriebds';

function App() {

  let { id } = useParams();

  return (
    <>

      <BrowserRouter>


        <Routes >
          <Route path='/' element={<Header/>} />
          <Route path='/login' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/friend' element={<Friends />} />
          <Route path='/group' element={<Groups />} />
          <Route path="/profile" element={<Profile />} />
          <Route path={"/profile/:" + id} element={<Profile />} />
        </Routes></BrowserRouter>

    </>
  );
}

export default App;
