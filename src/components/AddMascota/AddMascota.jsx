import {useState} from "react";

const AddMascota = (props) => {
    const [show, setShow] = useState(props.show);
    const handleClose = () => setShow(false);

    return <>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">a</button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label type="text" className="form-control" disabled>h</label>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="nombre" placeholder="Nombre"/>
                                </div>
                            </div>
                            <div className="form-row mt-2">
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" id="color" placeholder="Color"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="input-group">
                                        <input className="form-control" placeholder="yyyy-mm-dd"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary calendar"><i
                                                className="fas fa-calendar-day"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row mt-2">
                                <div className="form-group col-md-6">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" ><span
                                                >*</span> Sexo</label>
                                        </div>
                                        <select className="custom-select" id="inputSexo">
                                            <option value='Selección' >Selección</option>
                                            <option value="Hembra">Hembra</option>
                                            <option value="Macho">Macho</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" ><span>*</span> Especie</label>
                                        </div>
                                        <select  className="custom-select" id="inputGroupSelect01">
                                            <option value='Selección' >Selección</option>
                                            <option>a</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row mt-2">
                                <div className="form-group col-md-6">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text"><span
                                                >*</span> Raza</label>
                                        </div>
                                        <select className="custom-select" id="inputRaza">
                                            <option value='Selección'>Selección</option>
                                            <option>a</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default AddMascota;