import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Adduser from './components/Adduser';
import Home from './components/Home';
import Edituserpage from './components/Edituserpage';
import Viewuserpage from './components/Viewuserpage';



function App() {
  return (
   
        <Router>
            <Header/>
            <Routes>
                
                <Route path='/' index element={<Home/>}/>
                <Route path='/adduser' element={<Adduser/>}/>
                <Route path='user/:userId/edit' element={<Edituserpage/>}/>
                <Route path='users/:userId' element={<Viewuserpage/>}/>
            </Routes>
            

        </Router>
    
   
    
  );
}

export default App;
