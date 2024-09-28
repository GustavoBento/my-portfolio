import './botao.css'

export default function Botao({children}) {
      return (
            <button className="btn botao-verde rounded-5 fw-bold">{children}</button>
      )
}