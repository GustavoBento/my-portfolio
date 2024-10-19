import Botao from "../Botao/botao";
import Input from "../Input/input";
import { UsarIntersectionObserver } from "../Intersection/intersection";
import Titulo from "../Titulo/titulo";
import "./formulario.css";

export default function Formulario() {

  UsarIntersectionObserver()
  return (
    <section className="container-xxl py-5 hidden">
      <Titulo>
        <div className="text-uppercase text-center fs-1 pb-5">
          Entre em <span className="cor-verde">contato</span>
        </div>
      </Titulo>
      <form
        className="formulario mx-auto mb-4 "
        action="https://api.staticforms.xyz/submit"
        method="post"
      >
        {/* ENVIO DO FORMULÁRIO */}
        <input
          type="hidden"
          name="accessKey"
          value="a976fadf-cde9-440c-bd45-55ddf694c492"
        />
        <input
          type="hidden"
          name="redirectTo"
          value="https://gustavobento.github.io/portfolio/"
        />
        {/* ENVIO DO FORMULÁRIO */}
        <div className="input-group gap-3">
          <Input type="text" placeholder="Nome completo" />
          <Input type="email" placeholder="E-mail" />
          <Input type="tel" placeholder="Telefone" maxlength={15} />
          <textarea
            className="w-100 bg-input caixa-texto border-0 rounded-3 fs-5 p-3 mb-3"
            name="message"
            id=""
            placeholder="Sua mensagem"
            required
          ></textarea>
          <Botao type="submit">Enviar</Botao>
        </div>
      </form>
    </section>
  );
}
