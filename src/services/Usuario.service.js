export class UsuarioService{
    verificaUsuario(identificacion){
        var myInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token")
            }};
        var myRequest = fetch('http://18.189.13.197:8080/huellassanas/api/v1/usuario/verif?identificacion='+identificacion, myInit);
        return myRequest;
    }
}