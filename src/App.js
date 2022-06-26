import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header" style={{backgroundColor: "#F8F2CF"}}>
        <img src={logo} style={{width: "300px"}}  />
        <p style={{color: "black", fontFamily: "Dotum"}}>

Complimenti per aver trovato il QR Code.. ma non avete indovinato! Riprovate, facendo più attenzione!
        </p>
      </header>
    </div>
  );
}

export default App;
