import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import {
	Input
} from "@angular/core";

import {FixerService} from "../data/fixer.service";
import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Component({
  selector: 'select-lightning',
  templateUrl: './select.html',
  styleUrls: ['./select.scss']
})
export class SelectLightning {
	title = 'Currency Converter!';

	fixer:FixerService;
	@Input() public countries;


	constructor(private http: Http,private cd: ChangeDetectorRef){

		(this.fixer = new FixerService(http));

		(this.fixer.get().subscribe((data:any)=>{

			console.log('eh',this.countries= Object.keys(JSON.parse(data._body).rates))

           this.cd.markForCheck();
	   })
   );
		console.log(this);

	}

}
