import Cabecalho from "./components/Cabecalho/cabecalho";
import Especialidades from "./components/Especialidades/especialidades";
import Formulario from "./components/Formulario/formulario";
import Inicio from "./components/Inicio/inicio";
import Projetos from "./components/Projetos/projetos";
import SobreMim from "./components/SobreMim/sobremim";

function App() {
  return (
    <div className="App">
        <Cabecalho />
        <main className="container-fluid">
            <Inicio />
            <SobreMim />
            <Especialidades />
            <Projetos />
            <Formulario />
        </main>
    </div>
  );
}

export default App;
