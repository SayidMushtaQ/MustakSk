import './App.css'
import Navbar from './components/NavBar.component'
import {HashRouter as Router, Routes,Route} from 'react-router-dom';
import Me from './pages/Me.page'
import Projects from './pages/Projects.page';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/MustakSk' element={<Me/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </Router>
  )
}

export default App
