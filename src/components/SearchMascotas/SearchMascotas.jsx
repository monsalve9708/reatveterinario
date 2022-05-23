import "./SearchMascotas.scss"
import {useState} from "react";
import {UsuarioService} from "../../services/Usuario.service";
import {MascotasService} from "../../services/Mascotas.service";
import ListMascotas from "../ListMascotas/ListMascotas";
const SearchMascotas = () => {
    const [tipoId,setTipoId] = useState('cc');
    const [id,setId] = useState('');
    const [mascotas,setMascotas] = useState();

    const mascotasServices = new MascotasService();
    const handleTipoId = e => setTipoId(e.target.value);
    const handleId = e => setId(e.target.value);
    const searchMascota = e => {
        e.preventDefault();
        if (tipoId === 'cc') {
            searchMascotaCliente();
        }else{
            searchMascotaById();
        }
    }

    const searchMascotaCliente = () => {
        new UsuarioService().verificaUsuario(id)
        .then(res => {
            if (res.status === 400){
                mascotasServices
                    .getMascotasByCdCliente(id)
                    .then(res => res.json())
                    .then(data => setMascotas(data));
            }
        })
        .catch(error => {
            console.log(error.value());
        });
    }
    const searchMascotaById = () => {
        mascotasServices
            .getMascotasByIdentificacion(id)
            .then(res => res.json())
            .then(data => setMascotas(data))
            .catch(error => {
                console.log(error.value());
        });
    }

     return <>
        <div className="container text-center mt-3">
    <h3>Consultar Mascotas</h3>
        </div>
        <div className="card tar container mt-4">
            <div className="card-body">
                <form>
                <div className="row mt-2">
                    <div className="input-group mb-3 col">
                        <div className="input-group-prepend">
                            <label className="input-group-text label" htmlFor="inputGroupSelect01">Tipo Identificación</label>
                        </div>
                        <select className="form-select" id="inputGroupSelect01" onClick={handleTipoId}>
                            <option value="cc">Identificación cliente</option>
                            <option value="cm">Cédula mascota</option>
                        </select>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Numero de identificación" onInput={handleId}/>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-info button" onClick={searchMascota}>Buscar</button>
                </div>
                </form>
            </div>
        </div>
         { mascotas ?  <ListMascotas mascotas={mascotas}/> : null}
    </>
}
export default SearchMascotas;