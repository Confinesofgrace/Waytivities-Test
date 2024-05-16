import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import BookDetails from './Component/Book-details';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element= {<Home/>} />
        <Route path="/signup" element= {<SignUp/>} />
        <Route path="/login" element= {<LogIn/>} />
        <Route path="/books/:title" element= {<BookDetails/>} />
      </Routes>

    </Router>
    
  );
}

export default App;
