
import 'rxjs/add/operator/toPromise';

import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import {SelectLightning} from "../components/select";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Currency Converter!';

	constructor(private http: Http){

		this.init();

	}

	async init(){

	// 	await this.http.get('http://api.fixer.io/latest').subscribe(this.updateData);

	}

	async updateData(data){


		//this.data = await JSON.parse(data._body);
		//console.log(this.data)
		//this.countries = await Object.keys(this.data.rates);
		//console.log(this.countries);

	}

}
