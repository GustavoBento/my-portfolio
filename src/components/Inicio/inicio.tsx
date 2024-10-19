import Botao from "../Botao/botao";
import Subtitulo from "../Subtitulo/subtitulo";
import Titulo from "../Titulo/titulo";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { UsarIntersectionObserver } from "../Intersection/intersection";

export default function Inicio() {

   UsarIntersectionObserver()
  return (
    <section
      id="inicio"
      className="container container-inicio d-flex flex-column justify-content-center text-center pb-5 hidden"
    >
      <Titulo>Olá e bem vindo(a)</Titulo>
      <Subtitulo>
        <>
          Eu sou o <span className="texto-verde">Gustavo Bento</span>
        </>
      </Subtitulo>
      <h5 className="fst-italic fw-light">Desenvolvedor Front-end</h5>
      <div className="text-black mt-3">
        <a href="#sobre">
          <Botao>Saiba mais</Botao>
        </a>
      </div>
    </section>
  );
}