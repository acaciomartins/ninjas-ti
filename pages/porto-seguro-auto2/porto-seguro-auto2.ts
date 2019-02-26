import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { PortoSeguroAutoPage } from '../porto-seguro-auto/porto-seguro-auto';
import { PortoSeguroAuto3Page } from '../porto-seguro-auto3/porto-seguro-auto3';

@Component({
  selector: 'page-porto-seguro-auto2',
  templateUrl: 'porto-seguro-auto2.html'
})
export class PortoSeguroAuto2Page {

	public resultado;
	
	public foto : string;

	public qf : number;
	public qt  : number;
	public ql  : number;
	public ok : number;

	public isQf : boolean;
	public isQt : boolean;
	public isQl : boolean;
	public isOk : boolean;

	public croquiImg : string;

		public resultadoJson;


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl : AlertController,) {
	console.log('this.resultado: ', navParams.get("resultadoJson"));

	this.resultado = navParams.get("resultadoJson");
	    
		//this.resultado.srcCroqui = 'assets/img/D0123.png';

		this.isQf = false;
		this.isQt = false;
		this.isQl = false;
		this.isOk = false;
	  
	  
		this.qf = +this.resultado.sinistro.croqui.qf;
		this.qt = +this.resultado.sinistro.croqui.qt;
		this.ql = +this.resultado.sinistro.croqui.ql;
	  	this.ok = this.resultado.sinistro.croqui['sem sinistro'];  
	  
	  /*
		  qf frente
		  qt traseira
		  ql lateral

		  qt + qf * 
		  ql + qf *

		  qt + ql *
		  qt + ql + qf
		  */
			if (this.ok > 0 && this.ok < 1) {
				this.croquiImg = 'assets/img/nqtqlqf.png'
				this.isOk = true;
			} else {
		
				  if (this.qf > 0 && this.qf < 1) {
					  this.isQf = true;
				  }
				  if (this.qt > 0 && this.qt < 1) {
					  this.isQt = true;
				  }
				  if (this.ql > 0 && this.ql < 1) {
					  this.isQl = true;
				  }

				  //let croquiImg = string;
				  this.croquiImg = '';


				  if (this.isQt) {
					  this.croquiImg = this.croquiImg + 'qt'; 
				  }
				  if (this.isQl) {
					  this.croquiImg = this.croquiImg + 'ql'; 
				  }
				  if (this.isQf) {
					  this.croquiImg = this.croquiImg + 'qf'; 
				  }

				  if (this.croquiImg == '') {
					this.croquiImg = 'assets/img/nqtqlqf.png'
				  } else {
					this.croquiImg = 'assets/img/' + this.croquiImg + '.png';
				  }
			}
		  		  
	  
	  
	
	  /*
	  "sinistro":{
      "croqui":{
         "qf":8.334161138989771e-10,
         "qt":0.3258213400840759,
         "ql":0.6704705357551575
      },
      "sinistro":"semclassificacao",
      "score":1.0,
      "orcamento":"R$1686.03 a R$3131.20"
   		}
	  */
  }
	

	showLog() {
		//alert(this.resultado.sinistro);
	}

  continuar(params) {
    this.navCtrl.push(PortoSeguroAuto3Page);
  }


  goToPortoSeguroAuto(params){
    if (!params) params = {};
    this.navCtrl.push(PortoSeguroAutoPage);
  } goToPortoSeguroAuto2(params){
    if (!params) params = {};
    this.navCtrl.push(PortoSeguroAuto2Page);
  }
 goToPortoSeguroAuto3(params){
  //  if (!params) params = {};
  //  this.navCtrl.push(PortoSeguroAuto3Page);
	 this.navCtrl.push(PortoSeguroAuto3Page, {resultado: this.resultado});
  }
goToPage1(params){
    if (!params) params = {};
    this.navCtrl.push(Page1Page);
  }
}
