import Subtitulo from "../Subtitulo/subtitulo";
import "./sobremim.css";
import imageGrande from "./foto-flutuando.png";

export default function SobreMim() {
  return (
    <section className="container-fluid pb-5 ">
      <div className="pb-4 text-center mb-3 ">
        <Subtitulo>
          <span className="cor-verde">&gt; </span>SOBRE MIM
        </Subtitulo>
      </div>
      <div className="container-fluid  row container-sobremim mx-auto mt-xxl-3">
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
            <a href="https://www.instagram.com/gustavobentto_/" target="_blank" rel="noreferrer">
              <i class="bi bi-instagram icon-redesocial"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/gustavo-bento/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bi bi-linkedin icon-redesocial"></i>
            </a>
            <a href="https://github.com/gustavobento" target="_blank" rel="noreferrer">
              <i class="bi bi-github icon-redesocial"></i>
            </a>
            <a href="mailto:gustavobentodev@gmail.com">
              <i class="bi bi-envelope icon-redesocial"></i>
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
