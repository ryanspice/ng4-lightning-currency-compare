import { ChangeDetectorRef } from '@angular/core';


import {FixerService} from "../data/fixer.service";
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import {
	Component,
	Input,
	ViewChild,
	Output,
	ElementRef,
	EventEmitter
} from '@angular/core';

@Component({
  selector: 'select-lightning',
  templateUrl: './select.html',
  styleUrls: ['./select.scss']
})
export class SelectLightning {

	//@ViewChild('valueA') _valueA:ElementRef;
	@ViewChild('countryA') _countryA:ElementRef;
	//@ViewChild('valueB') _valueB:ElementRef;
	@ViewChild('countryB') _countryB:ElementRef;

	@Output() output = new EventEmitter();

	fixer:FixerService;
	private countries:Array<string>;
	private rates:Array<number>;

	public _valueA:string|number = '0.00';
	public _valueB:string|number = '0.00';

	countriesSelectedA:any = '';
	countriesSelectedB:any = '';

	constructor(private http: Http){ }

	set valueA(value){

		this._valueA = value;
		//this.convert(value);
	}

	get valueA(){

		return this._valueA;
	}

	set valueB(value){

		this._valueB = value;
		//this.convert(value);
	}

	get valueB(){

		return this._valueB;
	}
	/* Initialize service then grab data */

	async ngOnInit(){

		this.fixer = await new FixerService(this.http);
		await this.fixer.retrieveStore('latest', (data)=>{
			this.countries = this.fixer.getCountries(data);
			this.countries.push('EUR'); //Add EUR as it's default option
			this.countriesSelectedA = this.countries[3];
			this.countriesSelectedB = this.countries[5];

			this.rates = this.fixer.getRates(data);
			this.rates.push(1); //Add EUR as it's default option
		});

	}

	async convert(targetA:string, targetB:string, evt:Event){

		let rate1:number = this.rates[this.countries.indexOf(this.countriesSelectedA)];
		let rate2:number = this.rates[this.countries.indexOf(this.countriesSelectedB)];

		let convertedNumber:number = (this[targetA]/rate1)*rate2;

		this[targetB] =  (this[targetA]/rate1)*rate2;

	}

}
