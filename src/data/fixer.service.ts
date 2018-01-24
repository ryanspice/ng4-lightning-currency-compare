import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Injectable()
export class FixerService {
	title = 'Currency Converter!';
	data:any;
	public countries:any;



	constructor(private http: Http){

		console.log(this);

	}


	 get(){

	 	return this.http.get('http://api.fixer.io/latest');

	}

	async updateData(data){


		this.data = await JSON.parse(data._body);
		console.log(this.data)


		return this.countries = await Object.keys(this.data.rates);


	}

}
