//region imports
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//endregion imports

@Injectable()
export class FixerService {

	//Static data store for persistant data
	static store:any = {
		latest:null
	}

	constructor(private http: Http){}

	/* call the Static store if data exists */

	retrieveStore(key:string, callback:Function){

		if ((FixerService.store[key]==null)){

			this.get(key).subscribe(data=>{

				FixerService.store[key] = JSON.parse(data["_body"]);

				callback(FixerService.store[key]);

			});

		} else {

			callback(FixerService.store[key]);

		}

	}

	/* call the API */

	 get(api:string){

	 	return this.http.get('http://api.fixer.io/'+api);
	}

	/* extract countries of 'rates' from provided data  */

	 getCountries(data:any){

		return  Object.keys(data.rates);
	}

}
