import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrofeoPage } from '../trofeo/trofeo';

/**
 * Generated class for the HistoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-historias',
  templateUrl: 'historias.html',
})
export class HistoriasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoriasPage');
  }

  irPagina(type){
    let componente:any; 
    switch(type){
      case "trofeo": 
        componente=TrofeoPage
        break;
    }
    this.navCtrl.setRoot(componente)
  }


}
