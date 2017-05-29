import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit{
	clients;
	_id;
	first_name;
	last_name;
	email;
	phone;
	constructor(private clientService : ClientService){

	}

	ngOnInit(){
		this.clientService.getClients().subscribe(clients => {
			this.clients = clients;
		});
	}

	onAddSubmit(){
		let newClient = {
			first_name : this.first_name,
			last_name : this.last_name,
			email : this.email,
			phone : this.phone
		}
		this.clientService.saveClient(newClient).subscribe(client => {
			this.clients.push(client);
			this.first_name = '';
			this.last_name = '';
			this.email = '';
			this.phone = '';
		});
	}
}
