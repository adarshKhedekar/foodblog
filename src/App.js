import Home from './components/Home/Home'
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Articles from './components/Articles/Articles';
import './App.css';

function App() {
  return (
    <div className="App">
        <Home/>
        <About/>
        <Articles/>
        <Footer/>
    </div>
  );
}

export default App;
