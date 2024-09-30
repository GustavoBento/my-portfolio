import { ReactElement } from "react";
import "./botao.css";

interface BotaoProps {
  children: ReactElement | string;
  type?: 'button' | 'submit';
}

export default function Botao({ children, type = "button" }: BotaoProps) {
  return (
    <button type={type} className="btn botao-verde rounded-4 fw-bold mx-auto">
      {children}
    </button>
  );
}
