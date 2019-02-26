import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import {Camera} from '@ionic-native/camera';
import { Page1Page } from '../pages/page1/page1';
import { PortoSeguroAutoPage } from '../pages/porto-seguro-auto/porto-seguro-auto';
import { PortoSeguroAuto2Page } from '../pages/porto-seguro-auto2/porto-seguro-auto2';
import { PortoSeguroAuto3Page } from '../pages/porto-seguro-auto3/porto-seguro-auto3';
import { PortoSeguroAuto4Page } from '../pages/porto-seguro-auto4/porto-seguro-auto4';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Page1Page,
    PortoSeguroAutoPage,
    PortoSeguroAuto2Page,
	PortoSeguroAuto3Page,
	PortoSeguroAuto4Page
  ],
  imports: [
    BrowserModule,
	  HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1Page,
    PortoSeguroAutoPage,
    PortoSeguroAuto2Page,
	PortoSeguroAuto3Page,
	PortoSeguroAuto4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}