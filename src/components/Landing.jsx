import React from 'react'


const Landing = () => {
  return <>
    <div className="alert alert-primary text-center" role="alert">
      Bienvenidos a MECA, encontraras lo que tanto estas buscando!
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className={'col'}>
          <img id={'foto-portada'} src="./imagenes/mecalogo.jpg" alt="MECA" />
        </div>
      </div>
      <div className="row">
        <div className="col">Texto descriptivo</div>
      </div>
    </div>
  </>
}

export default Landing
