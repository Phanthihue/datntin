import { Component } from '@angular/core';
import { Platform} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{
  selectedval:Number=102;
  data:any[]=[]; 
  constructor(private platform:Platform) 
  {
  	this.platform.ready().then(()=>
  	{
  		this.data=[{id:101,name:"name1"},{id:102, name:"name2"}];
  	})
  }
  	onchange(event)
  	{
  		 alert("you have select id = "+ event.target.value);
  	}
}
