import fotoAvatar from './images/fotoCV.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>OWH 2020.1 - ZYMO Tech</h1>
      <div className="imagecontainer">
        <img src={fotoAvatar} alt="avatar"></img>
      </div>
      <div className="footer">
          <h4>+54 9 3813000816</h4>
          <h4>Mirra Benjamín</h4>
          <h4>mirrabenjamin@gmail.com</h4>
        </div>
    </div>
  );
}

export default App;
