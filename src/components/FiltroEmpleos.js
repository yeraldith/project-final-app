import React from "react";

class FiltroEmpleos extends React.Component {
  render() {
    return (
      <div className="btext">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-white text-center">
                Encuentra tu siguiente empleo
              </h3>
            </div>
          </div>

          <form className="form-row">
            <div className="col-md-3 form-group">
              <select className="form-control">
                <option>Tipo de Contrato..</option>
              </select>
            </div>

            <div className="col-md-4 form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Puesto deseado"
              ></input>
            </div>

            <div className="col-md-3 form-group">
              <select className="form-control">
                <option>Municipio...</option>
              </select>
            </div>

            <div className="col-md-2 form-group">
              <button className="btn btn-primary">Buscar Empleos</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FiltroEmpleos;
