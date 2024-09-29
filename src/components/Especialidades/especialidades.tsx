import Subtitulo from "../Subtitulo/subtitulo";
import "./especialidades.css";

const iconeHtml = require("../../assets/logo-html.png");
const iconeCss = require("../../assets/logo-css.png");
const iconeBootstrap = require("../../assets/logo-bootstrap.png");
const iconeJs = require("../../assets/logo-javascript.png");
const iconeReact = require("../../assets/logo-react.png");
const iconeTypescript = require("../../assets/logo-typescript.png");

export default function Especialidades() {
  return (
    <section className="container-xxl py-5 ">
      <div className="text-uppercase text-center py-5">
        <Subtitulo>
          <>
            <span className="cor-verde">&gt;</span>Minhas especialidades
          </>
        </Subtitulo>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-especialidades text-white  py-3 my-5 mx-auto ">
            <img className="w-50 mx-auto" src={iconeHtml} alt="logo do html5" />
            <div className="card-body card-texto">
              <h5 className="card-title text-center text-uppercase fw-bold">
                Html
              </h5>
              <p className="card-text ">
                É uma linguagem que estrutura e marca o conteúdo das páginas
                web, abreviação para Hyper Text Markup Language.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-especialidades text-white  py-3 my-5 mx-auto ">
            <img className="w-50 mx-auto" src={iconeCss} alt="logo do css3" />
            <div className="card-body card-texto">
              <h5 className="card-title text-center text-uppercase fw-bold">
                Css
              </h5>
              <p className="card-text ">
                CSS, ou Cascading Style Sheets (Folhas de Estilo em Cascata),
                estiliza páginas web para torná-las mais bonitas e elegantes
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-especialidades text-white  py-3 my-5 mx-auto ">
            <img
              className="w-50 mx-auto"
              src={iconeBootstrap}
              alt="logo do bootstrap"
            />
            <div className="card-body card-texto">
              <h5 className="card-title text-center text-uppercase fw-bold">
                Bootstrap
              </h5>
              <p className="card-text ">
                É um framework web com código-fonte aberto para desenvolvimento
                de componentes de interface e front-end para sites e aplicações
                web, usando HTML, CSS e JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-especialidades text-white  py-3 my-5 mx-auto ">
            <img
              className="w-50 mx-auto"
              src={iconeJs}
              alt="logo do javascript"
            />
            <div className="card-body card-texto">
              <h5 className="card-title text-center text-uppercase fw-bold">
                Javascript
              </h5>
              <p className="card-text ">
                É uma linguagem de programação que torna os sites interativos,
                sendo responsável pela inteligência no navegador.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-especialidades text-white  py-3 my-5 mx-auto ">
            <img
              className="w-50 mx-auto"
              src={iconeReact}
              alt="logo do React"
            />
            <div className="card-body card-texto">
              <h5 className="card-title text-center text-uppercase fw-bold">
                React
              </h5>
              <p className="card-text ">
                É uma biblioteca javascript desenvolvida pelo Facebook utilizada
                para a criação de interfaces de usúarios para aplicações web
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-especialidades text-white  py-3 my-5 mx-auto ">
            <img
              className="w-50 mx-auto"
              src={iconeTypescript}
              alt="logo do Typescript"
            />
            <div className="card-body card-texto">
              <h5 className="card-title text-center text-uppercase fw-bold">
                Typescript
              </h5>
              <p className="card-text ">
                É um superset do JS desenvolvida pela Microsoft, que inclui
                recursos adicionais enquanto permite a execução de código JS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
