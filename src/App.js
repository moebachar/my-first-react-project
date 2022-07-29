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
  return (
    <>
       <Routes>
        
        <Route path='/completed/:success/:day/:place/:hour' element={ <Completed />} />
        <Route path='/join-form' element={<JoinFrom />}/>
        <Route path='/' element={<Landing blogs={blogs} members={members} />}/>
        <Route path='*' element={<Error404 />} />
        
      </Routes>  
    </>
  );
}

export default App;
