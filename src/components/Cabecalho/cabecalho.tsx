import Botao from "../Botao/botao";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./cabecalho.css";

const curriculo = require("../../assets/curriculo.pdf")

export default function Cabecalho() {
  return (
    <header className="container-fluid py-3">
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex">
          <div className="border-verde p-3  fs-5 fw-bold rounded-4">
            &lt; &frasl; Gustavo &gt;
          </div>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="offcanvas offcanvas-end bg-black  "
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 gap-4 gap-lg-2">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#inicio">
                    Início
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sobre">
                    Sobre
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#especialidades">
                    Especialidades
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projetos">
                    Projetos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-4 mb-lg-0" href={curriculo} target="_blank" download rel="noreferrer">
                    Currículo <i className="bi bi-download"></i>
                  </a>
                </li>
              </ul>
              <a href="https://api.whatsapp.com/send?phone=5548991849624" target="_blank" rel="noreferrer">
                <Botao>Contato</Botao>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
