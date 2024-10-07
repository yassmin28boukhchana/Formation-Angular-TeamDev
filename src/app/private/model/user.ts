import { Department } from "./department";

export interface user {
    id? : number;
    firstName?: string;
    lastName?: string ;
    status?: Boolean ;
    phoneNumber?: number ;
    email?: string ;
    password?: string ;
    departement?: Department ;

}
