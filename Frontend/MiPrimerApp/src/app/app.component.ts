import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BienvenidaPage } from '../pages/bienvenida/bienvenida';
import { PerfilPage } from '../pages/perfil/perfil';
import { HistoriasPage } from '../pages/historias/historias';
import { AcercaPage } from '../pages/acerca/acerca';
import { TrofeoPage } from '../pages/trofeo/trofeo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = BienvenidaPage;
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
      { title: 'Historias', component: HistoriasPage },
      { title: 'Ruta a la Victoria', component: TrofeoPage },
      { title: 'Acerca de la app', component: AcercaPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {

    // OneSignal Code start:
    // Enable to debug issues:
    window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

    var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
 
     window["plugins"].OneSignal
       .startInit("f6966f34-c2a7-423c-8603-fa7f922b634c", "562372341281")
       .handleNotificationOpened(notificationOpenedCallback)
       .endInit();

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
