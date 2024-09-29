import "./imagemProjeto.css";

interface ProjetoProps {
  CaminhoImagem: string;
  NomeProjeto: string
}

export default function ImagemProjeto({ CaminhoImagem, NomeProjeto }: ProjetoProps) {
  return (
    <div
      className="img_port mx-auto"
      style={{ backgroundImage: `url(${CaminhoImagem})` }}
    >
      <div className="overlay">{NomeProjeto}</div>
    </div>
  );
}
