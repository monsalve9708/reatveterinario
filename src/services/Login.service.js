import {ajax} from "rxjs/internal/ajax/ajax";
import {retry} from "rxjs";

export class LoginService{

   async login(login){
        var myHeaders = new Headers();
            myHeaders.append("Content-Type","application/x-www-form-urlencoded");
            myHeaders.append('Authorization', 'Basic YW5ndWxhcmFwcDoxMjM0NQ==');

        var params = new URLSearchParams();
        params.set( 'grant_type','password');
        params.set( 'username',login.user);
        params.set( 'password',login.pass);

        var myInit = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization':'Basic YW5ndWxhcmFwcDoxMjM0NQ=='
            },
            body: params };
        var myRequest = await fetch('http://18.189.13.197:8080/huellassanas/oauth/token',myInit);

        return myRequest;
    }
}