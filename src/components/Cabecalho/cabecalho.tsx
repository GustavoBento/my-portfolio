import Botao from "../Botao/botao";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./cabecalho.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useRef } from "react";

const curriculo = require("../../assets/curriculo.pdf")



export default function Cabecalho() {
  const offcanvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleLinkClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const offcanvas = offcanvasRef.current;

      if (offcanvas && target.tagName === "A") {
        event.preventDefault();
        offcanvas.classList.remove("show");
        offcanvas.style.visibility = "hidden";
        document.body.style.overflow = "auto";

        const targetId = (target.getAttribute("href") ?? "").slice(1);
        if (targetId) {
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        }

        const backdrop = document.querySelector(".offcanvas-backdrop");
        if (backdrop) {
          backdrop.remove();
        }

        const toggleButton = document.querySelector(".navbar-toggler") as HTMLElement;
        if (toggleButton) {
          toggleButton.setAttribute("aria-expanded", "false");
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  const toggleMenu = () => {
    const offcanvas = offcanvasRef.current;
    if (offcanvas) {
      const isVisible = offcanvas.classList.contains("show");
      if (isVisible) {
        offcanvas.classList.remove("show");
        offcanvas.style.visibility = "hidden";
        document.body.style.overflow = "auto";
      } else {
        offcanvas.classList.add("show");
        offcanvas.style.visibility = "visible";
        document.body.style.overflow = "hidden";
      }

      // Remover backdrop antigo
      const backdrop = document.querySelector(".offcanvas-backdrop");
      if (backdrop) {
        backdrop.remove();
      }
    }
  };

  return (
    <header className="container-fluid py-3 mb-3">
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex">
          <div className="border-verde p-3 fs-5 fw-bold rounded-4">
            &lt; &frasl; Gustavo &gt;
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            ref={offcanvasRef}
            className="offcanvas offcanvas-end bg-black"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ visibility: "hidden" }}
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                onClick={toggleMenu}
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
                  <a
                    className="nav-link mb-4 mb-lg-0"
                    href={curriculo}
                    target="_blank"
                    download
                    rel="noreferrer"
                  >
                    Currículo <i className="bi bi-download"></i>
                  </a>
                </li>
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=5548991849624"
                target="_blank"
                rel="noreferrer"
              >
                <Botao>Contato</Botao>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}