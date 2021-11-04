import {environment} from "../environments/environment";

export class AppEndPoints {
    public static ENDPOINTOFERTAS =  environment.endpoint+ '/api/ofertas';
    public static ENDPOINTLOGIN = environment.endpoint + '/api/authenticate';
}
