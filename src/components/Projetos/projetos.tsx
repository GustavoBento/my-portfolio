import ImagemProjeto from "../ImagemProjeto/imagemProjeto";
import Titulo from "../Titulo/titulo";
import "./projetos.css";

const projetoSerenatto = require("../../assets/projeto-serenatto.png");
const projetoOrgano = require("../../assets/projeto-organo.png");
const projetoCinetag = require("../../assets/projeto-cinetag.png");

export default function Projetos() {
  return (
    <section className="container-xxl py-5 " id="projeto">
      <div className="interface">
        <div className="text-center pb-5">
              <Titulo>
                  <div className="fs-1">
                  MEUS <span className="cor-verde">PROJETOS</span>
                  </div>
              </Titulo>
        </div>
        <div className="container-fluid row g-5 my-3  ">
          <div className="col-12 col-lg-6 col-xl-4 ">
                <a
                  href="https://projeto-serenatto-rust.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImagemProjeto
                    CaminhoImagem={projetoSerenatto}
                    NomeProjeto="Projeto Serenatto"
                  />
                </a>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 ">
                <a
                  href="https://projeto-organo-orcin.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImagemProjeto
                    CaminhoImagem={projetoOrgano}
                    NomeProjeto="Projeto Organo"
                  />
                </a>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 mx-lg-auto ">
                <a
                  href="https://cinetag-wine-gamma.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImagemProjeto
                    CaminhoImagem={projetoCinetag}
                    NomeProjeto="Projeto Cinetag"
                  />
                </a>
          </div>
        </div>
      </div>
    </section>
  );
}
