import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import RecommendedVideos from './Components/RecommendedVideos';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
