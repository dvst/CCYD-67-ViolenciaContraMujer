import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HistoriasPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Bienvenida', component: BienvenidaPage },
      { title: 'Seleccionar perfil', component: PerfilPage },
      { title: 'My First List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Elementos', component: ElementosPage },
      { title: 'Tabs', component: TabsPage },
      { title: 'Slider', component: SliderPage },
      { title: 'Bienvenida', component: BienvenidaPage },

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }


}
