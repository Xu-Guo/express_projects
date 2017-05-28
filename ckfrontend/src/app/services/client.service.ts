import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService{
    constructor(private http: Http){

    }
    getClients(){
        return this.http.get('http://localhost:3000/api/clients').map(res => res.json());
    }
}