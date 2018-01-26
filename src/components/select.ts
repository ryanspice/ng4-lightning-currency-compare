import { ChangeDetectorRef } from '@angular/core';


import {FixerService} from "../data/fixer.service";
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import {Component, Input,       Output, EventEmitter} from '@angular/core'
@Component({
  selector: 'select-lightning',
  templateUrl: './select.html',
  styleUrls: ['./select.scss']
})
export class SelectLightning {

	@Output() output = new EventEmitter();

	fixer:FixerService;
	private countries:Array<any>;

	constructor(private http: Http){}

	/* Initialize service then grab data */

	async ngOnInit(){

		this.fixer = await new FixerService(this.http);
		await this.fixer.retrieveStore('latest', (data)=>{ this.countries = this.fixer.getCountries(data); });

	}

}
