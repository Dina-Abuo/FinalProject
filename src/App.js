import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/home';
import Profile from './components/profile/Porfile'
import Groups from './components/Groups/groups';
import Friends from './components/AddFriends/AddFriebds';
function App() {
  return (
    <>
      <BrowserRouter>
        < Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path='/friend' element={<Friends />} />
          <Route path='/group' element={<Groups />} />
          <Route path="/profile" element={<Profile />} />
        </Routes></BrowserRouter>
    </>
  );
}

export default App;
