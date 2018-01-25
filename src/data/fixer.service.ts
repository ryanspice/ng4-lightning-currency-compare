import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Injectable()
export class FixerService {
	title = 'Currency Converter!';
	data:any;
	public countries:any;

	static store:any = {

		latest:null

	}


	constructor(private http: Http){


	}

	retrieveStore(key:string, callback:any){

		//console.log(this.get(key), FixerService.store)
		console.log(key, FixerService.store[key]==null)

		if ((FixerService.store[key]==null)){

			this.get(key).subscribe(data=>{

				//FixerService.store[key] = data;
				//console.log(FixerService.store[key]);
				FixerService.store[key] = data;
				callback(FixerService.store[key]);

				console.log(FixerService.store);
			});

		} else {

			callback(FixerService.store[key]);
		}

		console.log(FixerService.store);
		//return this.get(key);
		//return !FixerService.store[key]?this.get(key).subscribe(data=>{FixerService.store[key]=data, console.log(FixerService.store,data)}):FixerService.store[key];
	}

	setStore(data){

		//console.log(Object.keys(JSON.parse(data._body).rates))
	}

	 get(api:string){

	 	return this.http.get('http://api.fixer.io/'+api);
	}

	 getCountries(data){


		//this.data = JSON.parse(data._body);
		console.log(FixerService.store,Object.keys(JSON.parse(data._body).rates))


		return  Object.keys(JSON.parse(data._body).rates);


	}

}
