import Cabecalho from "./components/Cabecalho/cabecalho";
import Especialidades from "./components/Especialidades/especialidades";
import Inicio from "./components/Inicio/inicio";
import SobreMim from "./components/SobreMim/sobremim";

function App() {
  return (
    <div className="App">
        <Cabecalho />
        <main className="container-fluid">
            <Inicio />
            <SobreMim />
            <Especialidades />
        </main>
    </div>
  );
}

export default App;
