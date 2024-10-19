import { UsarIntersectionObserver } from "../Intersection/intersection";
import Titulo from "../Titulo/titulo";
import "./sobremim.css";

const imageGrande = require("./foto-flutuando.png");

export default function SobreMim() {
  UsarIntersectionObserver()
  return (
    <section id="sobre" className="container-xxl py-5  hidden ">
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
          Olá, sou Gustavo, um Desenvolvedor Front-End apaixonado por criar interfaces dinâmicas e responsivas. Tenho expertise em HTML5, CSS3, JavaScript, Bootstrap, React e TypeScript, com um histórico de projetos bem-sucedidos que melhoraram significativamente a experiência do usuário.</p>

          <p className="fw-link-light texto-sobremim">Estou em busca de novas oportunidades para aplicar minhas habilidades em desenvolvimento web e contribuir para o sucesso de uma empresa inovadora.</p>

          <p className="fw-link-light texto-sobremim">A minha experiência no Supermercado Silveira foi muito importante para mim, pois nela desenvolvi diversas habilidades fundamentais.</p>

          <div className="d-flex flex-column flex-lg-row gap-lg-5 ">
            <p className="fw-link-light texto-sobremim text-start">
              Chefe de Caixa: <br />
              • Atendimento ao cliente <br />
              • Supervisão de equipe <br />
              • Gestão de caixa <br />
              • Fechamento e relatórios <br />
              • Manutenção de equipamentos <br />
              • Segurança e conformidade <br />
              • Comunicação
            </p>
            <p className="fw-link-light texto-sobremim text-start">
              Auxiliar Administrativo: <br />
              • Verificação de documentos <br />
              • Registro de informações <br />
              • Controle de estoque <br />
              • Comunicação com fornecedores <br />
              • Suporte á contabilidade <br />
              • Conformidade legal <br />
              • Relatórios
            </p>
          </div>
          

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
