
import 'rxjs/add/operator/toPromise';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

import {Component, NgModule,Input,ComponentFactory,ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, TemplateRef, ViewChild,  Output, EventEmitter} from '@angular/core'

import {SelectLightning} from "../components/select";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Currency Converter!';
 componentRef: ComponentRef<any>;
@ViewChild("container", { read: ViewContainerRef }) container;


	constructor(private http: Http, private resolver: ComponentFactoryResolver){

	}

	async ngOnInit(){


		(<any>window).steve = this;
	}

    async ngAfterContentInit() {
        console.log('on after view init', this);
		await this.createComponent('test');
		await this.createComponent('test');
		setTimeout(async ()=>{

			this.createComponent('test');
		},600)
		//this.createComponent('test');
		//this.createComponent('test');
        // this returns null
    }


	async createComponent(type) {

		//console.log(this.container)
		//this.container.clear();
		const factory: ComponentFactory<any> = await this.resolver.resolveComponentFactory(SelectLightning);

		this.componentRef = await this.container.createComponent(factory);

		this.componentRef.instance.type = await type;

		await this.componentRef.instance.output.subscribe(event => console.log(event));

	}

	ngOnDestroy() {
		this.componentRef.destroy();
	}

}
