//region imports
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//endregion imports

@Injectable()
export class FixerService {

	//Static data store for persistant data
	static store:any = {
		latest:null
	}

	constructor(private http: Http){}

	/* call the API */

	private get(api:string){

	 	return this.http.get('http://api.fixer.io/'+api);
	}

	/* call the Static store if data exists */

	public retrieveStore(key:string, callback:Function){

		if ((FixerService.store[key]==null)){

			this.get(key).subscribe(data=>{

				FixerService.store[key] = JSON.parse(data["_body"]);

				callback(FixerService.store[key]);

			});

		} else {

			callback(FixerService.store[key]);

		}

	}

	/* extract countries of 'rates' from provided data  */

	 public getCountries(data:any){

		return  Object.keys(data.rates);
	}

	/* extract countries of 'rates' from provided data  */

	 public getRates(data:any){

		return  (<any>Object).values(data.rates);
	}

}
