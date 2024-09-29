import Titulo from "../Titulo/titulo";
import "./sobremim.css";

const imageGrande = require("./foto-flutuante.png");

export default function SobreMim() {
  return (
    <section id="sobre" className="container-xxl py-5 ">
      <div className="pb-4 text-center mb-3 ">
        <Titulo>
          <div className="fs-1 text-uppercase">
            Sobre <span className="cor-verde">mim</span>
          </div>
        </Titulo>
      </div>
      <div className="  row  mx-auto mt-xxl-3">
        <div className="col-12 col-md-6 mb-4">
          <h4 className="mt-lg-5 mb-3">
            <span className="cor-verde">&#124;</span> Um pouco sobre mim
          </h4>
          <p className="fw-link-light texto-sobremim">
            Olá, eu sou Gustavo, um desenvolvedor front-end especializado em
            HTML, CSS, Bootstrap, JavaScript e React. Desde que me interessei na
            área da programação, venho estudando diariamente para conseguir a
            minha primeira oportunidade como desenvolvedor front-end. Há dois
            anos que venho desenvolvendo diversos projetos para colocar em
            prática todo o meu conhecimento que venho aprendendo nos cursos, e
            tenho certeza que estou pronto para somar na sua equipe de
            programadores. Tenho Facilidade de aprendizado, boa comunicação e a
            todo momento busco me aprimorar cada vez mais.
          </p>

          <div className="d-flex gap-4 fs-4 mt-5 my-3">
            <a
              className="link-icon-social"
              href="https://www.instagram.com/gustavobentto_/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram icon-redesocial"></i>
            </a>
            <a
              className="link-icon-social"
              href="https://www.linkedin.com/in/gustavo-bento/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin icon-redesocial"></i>
            </a>
            <a
              className="link-icon-social"
              href="https://github.com/gustavobento"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github icon-redesocial"></i>
            </a>
            <a
              className="link-icon-social"
              href="mailto:gustavobentodev@gmail.com"
            >
              <i className="bi bi-envelope icon-redesocial"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center text-md-end">
          <img className="pe-xl-5 image-flutuante" src={imageGrande} alt="" />
        </div>
      </div>
    </section>
  );
}
