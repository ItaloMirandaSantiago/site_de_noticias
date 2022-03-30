import { useEffect, useState } from "react"
import Requisito_reserva from "../requisicao/Requisito_reserva"
import img_estrela_acesa from '../imgs/estrela.png'
import Favoritos from "./Favoritos"

export default function Estado(props) {
  const [noticias, set_noticias] = useState([])

    useEffect(()=>{
      fetch(`http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10&tipo=noticia`)
        .then(res => res.json())
        .then(res => enviar(res.items) )
        
        .catch(error => {
          let array_noticia = []
            for (let i = 0; i < Requisito_reserva.length; i++) {
              if (Requisito_reserva[i].tipo === "Noticia"){
                array_noticia.push(Requisito_reserva[i])
              }
            }
            console.log(array_noticia)
            enviar(array_noticia)
          })
      }, [])

  function enviar(res){
      let array = []

      res.forEach((element, index) => {
        let juntar = <div key={index}>
          <div className='card mb-4 shadow-sm'>
              <div className='card-body tamanho-do-card'>
                <button onClick={()=>{props.salvar_favoritos(element)}}>  <img src={img_estrela_acesa} width='30px' height='30px' className="img_container"/></button>
                {/* props.salvar_favoritos */}
                <h2 className='card-text border-bottom border-dark titulo_materia'>{element.titulo}</h2>
                <p className='card-text texto'>{element.introducao}</p>
              </div>
          </div>
        </div>

        array.push(juntar)
    })
    set_noticias(array)
  }
    return noticias
}