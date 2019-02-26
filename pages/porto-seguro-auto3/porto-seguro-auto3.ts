import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { PortoSeguroAutoPage } from '../porto-seguro-auto/porto-seguro-auto';
import { PortoSeguroAuto2Page } from '../porto-seguro-auto2/porto-seguro-auto2';
import { PortoSeguroAuto4Page } from '../porto-seguro-auto4/porto-seguro-auto4';


@Component({
  selector: 'page-porto-seguro-auto3',
  templateUrl: 'porto-seguro-auto3.html'
})
export class PortoSeguroAuto3Page {

	public resultado;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl : AlertController,) { 
  	this.resultado = navParams.get("resultado");
	  console.log('this.resultado', this.resultado.sinistro.orcamento);
  }
	
	
	agendar(params){
		if (!params) params = {};
		this.navCtrl.push(PortoSeguroAuto4Page);
	}

	goToPortoSeguroAuto2(params){
		if (!params) params = {};
		this.navCtrl.push(PortoSeguroAuto2Page, {pagina_anterior: "conclusao"});
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
