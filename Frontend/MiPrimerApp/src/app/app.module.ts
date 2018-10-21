import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ElementosPage } from '../pages/elementos/elementos';
import { TabsPage } from '../pages/tabs/tabs';
import { SliderPage } from '../pages/slider/slider';
import { BienvenidaPage } from '../pages/bienvenida/bienvenida';
import { PerfilPage } from '../pages/perfil/perfil';
import { PerfilCrearPage } from '../pages/perfil-crear/perfil-crear';
import { HistoriasPage } from '../pages/historias/historias';


@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    ElementosPage,
    TabsPage,
    SliderPage,
    BienvenidaPage,
    PerfilPage,
    PerfilCrearPage,
    HistoriasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    ElementosPage,
    TabsPage,
    SliderPage,
    BienvenidaPage,
    PerfilPage,
    PerfilCrearPage,
    HistoriasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
