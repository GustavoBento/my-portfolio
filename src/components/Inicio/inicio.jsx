import Botao from "../Botao/botao";
import Subtitulo from "../Subtitulo/subtitulo";
import Titulo from "../Titulo/titulo";
import "./inicio.css";

export default function Inicio() {
  return (
    <section className="container container-inicio d-flex flex-column justify-content-center text-center pb-5">
            <Titulo>Olá e bem vindo(a)</Titulo>
            <Subtitulo>
              Eu sou o <span className="texto-verde">Gustavo Bento</span>
            </Subtitulo>
            <h5 className="fst-italic fw-light">Desenvolvedor Front-end</h5>
            <div className="text-black mt-3">
                  <Botao>Saiba mais</Botao>
            </div>
    </section>
  );
}
