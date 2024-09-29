import { ReactElement } from 'react'
import './subtitulo.css'

interface SubtituloProps {
      children: ReactElement
}

export default function Subtitulo({children}: SubtituloProps) {
      return (
            <h3 className='mb-3'>{children}</h3>
      )
}