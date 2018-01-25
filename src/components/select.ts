import { ChangeDetectorRef } from '@angular/core';


import {FixerService} from "../data/fixer.service";
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import {Component, NgModule,Input,ComponentFactory,ComponentRef, ComponentFactoryResolver, ViewContainerRef,  TemplateRef, ViewChild,  Output, EventEmitter} from '@angular/core'
@Component({
  selector: 'select-lightning',
  templateUrl: './select.html',
  styleUrls: ['./select.scss']
})
export class SelectLightning {
	title = 'Currency Converter!';

	fixer:FixerService;

	  @Input() type: string = "success";
	  @Output() output = new EventEmitter();

	latest:any;
	@Input() public countries;


	constructor(private http: Http,private cd: ChangeDetectorRef){

		(this.fixer = new FixerService(http));

		/*
		this.latest = (this.fixer.retrieveStore('latest'));
		this.latest.subscribe(async (data:any)=>{

			this.countries= Object.keys(JSON.parse(data._body).rates);
			this.cd.markForCheck();
	   })
		this.latest.subscribe(data => this.countries = (this.fixer.setStore(data)));
		*/

	   //})

	   this.init();
	}

	async init(){

			   this.latest = this.fixer.retrieveStore('latest', (data)=>{ this.countries = this.fixer.getCountries(data); });

			   //console.log(this, FixerService.store)

			   //await this.fixer.getCountries();


	}

}
