import './App.css';
import Navbar from './components/navbar';
import  LatestWorks from './components/latest_works';
import  WorkExperiences from './components/work_experiences';
import  Banner from './components/banner';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LatestWorks></LatestWorks>  
      <WorkExperiences></WorkExperiences>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
