
import {
	Http,
	Response
 } from '@angular/http';

import {
	Component,
	Input,
	ComponentFactory,
	ComponentRef,
	ComponentFactoryResolver,
	ViewContainerRef,
	ViewChild
} from '@angular/core'

import {SelectLightning} from "../components/select";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	componentRef: ComponentRef<any>;
	@ViewChild("container", { read: ViewContainerRef }) container;

	constructor(private http: Http, private resolver: ComponentFactoryResolver){}

	/* Dynamically append componenets to the container */

    async ngAfterContentInit() {

		await this.createComponent(SelectLightning);
		await this.createComponent(SelectLightning);

		//If we defer we can  load the data from the store instead of the API
		requestAnimationFrame(()=>this.createComponent(SelectLightning));

    }

	/* create component of specific type*/

	async createComponent(type:any) {

		const factory: ComponentFactory<any> = await this.resolver.resolveComponentFactory(type);

		this.componentRef = await this.container.createComponent(factory);

	}

	/**/

	ngOnDestroy() {

		this.componentRef.destroy();

	}

}
