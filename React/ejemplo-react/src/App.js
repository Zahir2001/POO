import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';


function App() {
  return (
    <div className="App">
      <header className="App-header">

       <h1>Ejemplo React</h1>

       <PrimerComponente />
       <hr/>

      <SegundoComponente />

      </header>
    </div>
  );
}

export default App;
