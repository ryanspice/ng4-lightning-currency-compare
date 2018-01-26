
import {
	FixerService
} from "../data/fixer.service";

import {
	Http,
	Response,
	RequestOptions,
	Headers
} from '@angular/http';

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

	title = 'Currency Converter!';

	fixer:FixerService;
	private countries:Array<string>;
	private rates:Array<number>;
	private countriesSelectedA:any = '';
	private countriesSelectedB:any = '';

	public _valueA:string|number = '0.00';
	public _valueB:string|number = '0.00';

	constructor(private http: Http){ }

	/* getter and setters for the ngmodels */

	set valueA(value){

		this._valueA = value;
	}

	get valueA(){

		return this._valueA;
	}

	set valueB(value){

		this._valueB = value;
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

	/* Convert from EUR (default) to first selected, then to second selected */

	async convert(targetA:string, targetB:string, evt:Event){

		let rate1:number = this.rates[this.countries.indexOf(this.countriesSelectedA)];
		let rate2:number = this.rates[this.countries.indexOf(this.countriesSelectedB)];

		this[targetB] =  ((this[targetA]/rate1)*rate2).toFixed(2);

	}

}
