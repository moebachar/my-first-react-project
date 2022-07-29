import { getBlogs } from './services/fakeBlogServices';
import { getMembers } from './services/fakeMembresService';
import Landing from './pages/Landing';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import JoinFrom from './pages/JoinForm';
import Completed from './components/others/Completed';
import Error404 from './components/others/Error404';



function App() {
  const blogs = getBlogs();
  const members = getMembers();
  const prefix = '/my-first-react-project/';
  return (
    <>
       <Routes>
        
        <Route path='/my-first-react-project/completed/:success/:day/:place/:hour' element={ <Completed />} />
        <Route path='/my-first-react-project/join-form' element={<JoinFrom />}/>
        <Route path='/my-first-react-project/' element={<Landing blogs={blogs} members={members} />}/>
        <Route path='*' element={<Error404 />} />
        
      </Routes>  
    </>
  );
}

export default App;
