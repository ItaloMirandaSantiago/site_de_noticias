import React from "react"
import Estado from "./Noticia"
import Reelese from "./Reelese"
import Favoritos from "./Favoritos"
import Futebol from './Futebol'
import img from "../imgs/noticia.png"

export default function Estrutura(props) {

    return(  
    <div className="App">

    <menu className='d-flex justify-content-evenly align-items-center'>
      <img src={img} alt="imagem decorativa - slogan" width='50px' height='50px' />

    {/* imagem do menu */}
        <nav className='d-flex justify-content-between'>
          <a href="/" className='me-3 link-dark efeito family'>Inicio</a>
          <a href="/" className='me-3 link-dark efeito family'>Sobre</a>
          <a href="/" className='me-3 link-dark efeito family'>Contato</a>
        </nav>
        {/* abas */}
    </menu>

    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link efeito family" aria-current="page" data-bs-toggle='tab' href="#noticia">Noticia</a>
      </li> {/* Noticias */}

      <li className="nav-item">
        <a className="nav-link efeito family" data-bs-toggle='tab' href="#Release">Release</a>
      </li> {/* Releese */}

      <li className="nav-item">
        <a className="nav-link efeito family" data-bs-toggle='tab' href="#Futebol">Futebol</a>
      </li> {/* Releese */}

      <li className="nav-item">
        <a className="nav-link efeito family" data-bs-toggle='tab' href="#favoritos">favoritos</a>
      </li> {/* favoritos/salvos */}
    </ul>

    <div className='tab-content'>
      <div id='noticia' className='tab-pane'>
            {/* comeca aqui */}
            <div className='border-dark'>
              <h2>Notícias</h2>
              <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-1'>
                {/* onde as noticias aparecem */}
                  <Estado SalvarNoticias={props.SalvarNoticias}/>
              </div>
            </div>
      </div>
      <div id="Release" className="tab-pane">
          <div className=' border-dark'>
            <h2>Release</h2>
          </div>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-1'>
                  {/* onde as Reelese aparecem */}
                    <Reelese SalvarNoticias={props.SalvarNoticias}/>
          </div>
      </div>
      <div id="Futebol" className="tab-pane">
          <div className=' border-dark'>
            <h2>Futebol</h2>
          </div>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-1'>
                  {/* onde Futebol aparecem */}
                  <Futebol SalvarNoticias={props.SalvarNoticias}/>
                    
          </div>
      </div>

      <div id="favoritos" className="tab-pane positionFiv">
          <div className='border-bottom border-dark mt-2 mb-4 pb-4'>
            <h2 className="d-inline">favoritos</h2>
          </div>
          <button className="btn btn-danger positionButton" onClick={()=>{props.excluirTodasNoticiasSalvas()}}>Apagar tudo</button>
          <div> 
            {/* onde os favoritos aparecem */}
            <Favoritos items={props.items}/>
          </div>
      </div>

    </div>

</div>)


}