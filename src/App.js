import './App.css';
<<<<<<< HEAD
// import Home from './components/Home/home';

//import Porfile from './components/profile/Porfile';
 import Longin from './components/login/Longin';

=======
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/home';
import Profile from './components/profile/Porfile'
import Groups from './components/Groups/groups';
import Friends from './components/AddFriends/AddFriebds';
>>>>>>> a0f670ffec67faf864f2da98b5259db33b893819
function App() {

  let { id } = useParams();

  return (
    <>
<<<<<<< HEAD
     <Longin/>
    {/*<Home />*/}
    {/* <Porfile />  */}
=======
      <BrowserRouter>

        < Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path='/friend' element={<Friends />} />
          <Route path='/group' element={<Groups />} />
          <Route path="/profile" element={<Profile />} />
          <Route path={"/profile/:" + id} element={<Profile />} />
        </Routes></BrowserRouter>
>>>>>>> a0f670ffec67faf864f2da98b5259db33b893819
    </>
  );
}

export default App;
