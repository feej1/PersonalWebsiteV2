import Title from './Routes/Home/Home';
import './App.css';
import Background from './Components/Background/Background';
import Projects from './Routes/Projs/Projects';
import About from './Routes/About/About';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Background>
        <NavBar></NavBar>
        <Title/>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </Background>
    </div>
  );
}

export default App;
