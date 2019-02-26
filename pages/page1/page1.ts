import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PortoSeguroAutoPage } from '../porto-seguro-auto/porto-seguro-auto';
import { PortoSeguroAuto2Page } from '../porto-seguro-auto2/porto-seguro-auto2';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  constructor(public navCtrl: NavController) {
  }
  goToPortoSeguroAuto(params){
    if (!params) params = {};
    this.navCtrl.push(PortoSeguroAutoPage);
  }goToPortoSeguroAuto2(params){
    if (!params) params = {};
    this.navCtrl.push(PortoSeguroAuto2Page);
  }goToPage1(params){
    if (!params) params = {};
    this.navCtrl.push(Page1Page);
  }
}
