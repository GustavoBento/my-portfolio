import Subtitulo from "../Subtitulo/subtitulo";
import "./especialidades.css";

const iconeHtml = require('../../assets/logo-html.png')
const iconeCss = require('../../assets/logo-css.png')
const iconeJs = require('../../assets/logo-javascript.png')

export default function Especialidades() {
  return (
    <section className="container-xxl py-5">
      <div className="text-uppercase text-center py-5">
        <Subtitulo>
          <>
            <span className="cor-verde">&gt;</span>Minhas especialidades
          </>
        </Subtitulo>
      </div>
      <div className="card card-especialidades text-white  py-3 my-5 ">
          <img className="w-50 mx-auto" src={iconeHtml} alt="" />
        <div className="card-body">
          <h5 className="card-title text-center text-uppercase fw-bold">Html</h5>
          <p className="card-text ">
          É uma linguagem que estrutura e marca o conteúdo das páginas web, abreviação para Hyper Text Markup Language.
          </p>
        </div>
      </div>
      <div className="card card-especialidades text-white  py-3 my-5 ">
          <img className="w-50 mx-auto" src={iconeCss} alt="" />
        <div className="card-body">
          <h5 className="card-title text-center text-uppercase fw-bold">Css</h5>
          <p className="card-text ">
          CSS, ou Cascading Style Sheets (Folhas de Estilo em Cascata), estiliza páginas web para torná-las mais bonitas e elegantes
          </p>
        </div>
      </div>
      <div className="card card-especialidades text-white  py-3 my-5 ">
          <img className="w-25 mx-auto" src={iconeJs} alt="" />
        <div className="card-body">
          <h5 className="card-title text-center text-uppercase fw-bold">Css</h5>
          <p className="card-text ">
          CSS, ou Cascading Style Sheets (Folhas de Estilo em Cascata), estiliza páginas web para torná-las mais bonitas e elegantes
          </p>
        </div>
      </div>
    </section>
  );
}
