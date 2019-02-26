import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { PortoSeguroAutoPage } from '../porto-seguro-auto/porto-seguro-auto';
import { PortoSeguroAuto2Page } from '../porto-seguro-auto2/porto-seguro-auto2';
import { PortoSeguroAuto3Page } from '../porto-seguro-auto3/porto-seguro-auto3';


@Component({
  selector: 'page-porto-seguro-auto4',
  templateUrl: 'porto-seguro-auto4.html'
})
export class PortoSeguroAuto4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl : AlertController,) {  }
	
	
	
	goToPortoSeguroAuto3(params){
		if (!params) params = {};
		this.navCtrl.push(PortoSeguroAuto3Page);
	}
	goToPortoSeguroAuto(params){
    	if (!params) params = {};
    	this.navCtrl.push(PortoSeguroAutoPage);
  }
	
/*
    goToPage1(params){
    if (!params) params = {};
    this.navCtrl.push(Page1Page);
  }
*/
}
