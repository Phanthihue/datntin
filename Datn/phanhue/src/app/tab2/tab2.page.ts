import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	h:number;
	momen:number;
	ketqua:number;
	cb:any;
	a:number;
	hamluong:number;
	b:number;
 


	
	
 constructor(){} 

	tinhtoan(){
		if (this.h <=0 || this.b <=0 || this.a<=0 || this.momen <=0 ) {
			alert("Hãy kiểm tra đúng giá trị cần nhập:  ")
		}
		
    
	this.ketqua=(((this.momen)) / ((this.cb) * (this.h-this.a)* 0.9));
	 this.hamluong=(this.ketqua)/((this.b)*((this.h-this.a)));
	 if ( this.hamluong < 0.05 )
	 {
	 	alert("Diện tích cốt thép móng sẽ được tính toán theo cấu tạo ")
	 	this.ketqua=0.005*this.b*(this.h-this.a)
	 	this.hamluong=0.05

	 }

	
	}
}


