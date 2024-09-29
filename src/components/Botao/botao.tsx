import { ReactElement } from 'react'
import './botao.css'

interface BotaoProps {
      children: ReactElement | string
}

export default function Botao({children}: BotaoProps) {
      return (
            <button className="btn botao-verde rounded-5 fw-bold">{children}</button>
      )
}