import logo from './logo.svg';
import './App.css';
import Details from './component/teachersDetails/Details';
import Header from './component/header/Header';

function App() {
  
  return (
    <div>
      <div className = "header-design">

      <Header></Header>
      </div>
      <Details></Details>
    </div>
  );
}

export default App;
