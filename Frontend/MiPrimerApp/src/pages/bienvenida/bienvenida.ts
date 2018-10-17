import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the BienvenidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html',
})
export class BienvenidaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidaPage');
  }
  
  irPagina(type){
    let componente:any; 
    switch(type){
      case "p": 
        componente=PerfilPage
        break;
    }
    this.navCtrl.setRoot(componente)
  }

}
