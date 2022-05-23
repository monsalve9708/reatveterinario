
export class MascotasService {
    getMascotasByIdentificacion(identificacion){
        var myInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token")
            } };
        var myRequest = fetch('http://18.189.13.197:8080/huellassanas/api/v1/mascotas/byidentificacion?identificacion='+identificacion,myInit);
        return myRequest;
    }
    getMascotasByCdCliente(cdCliente){
        var myInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token")
            } };
        var myRequest = fetch('http://18.189.13.197:8080/huellassanas/api/v1/mascotas/bycliente?cdcliente='+cdCliente,myInit);
        return myRequest;
    }
}