import "./Mascotas.scss"
const Mascotas = () => {
    return <>
        <div className="container text-center mt-3">
    <h3>Consultar Mascotas</h3>
        </div>
        <div className="card tar container mt-4">
            <div className="card-body">
                <div className="row mt-2">
                    <div className="input-group mb-3 col">
                        <div className="input-group-prepend">
                            <label className="input-group-text label" htmlFor="inputGroupSelect01">Tipo Identificación</label>
                        </div>
                        <select className="form-select" id="inputGroupSelect01">
                            <option value="cc" selected>Identificación cliente</option>
                            <option value="cm">Cédula mascota</option>
                        </select>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Numero de identificación"/>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-info button">Buscar</button>
                </div>
            </div>
        </div>
    </>
}
export default Mascotas;