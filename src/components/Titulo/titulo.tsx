import './titulo.css'

interface TituloProps {
      children: string
}

export default function Titulo({children}:TituloProps) {
      return (
            <h2 className="titulo mb-3">{children}</h2>
      )
}