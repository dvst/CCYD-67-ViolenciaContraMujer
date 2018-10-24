import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PerfilCrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil-crear',
  templateUrl: 'perfil-crear.html',
})
export class PerfilCrearPage {

  constructor(public viewCtrl: ViewController ,public navCtrl: NavController, public navParams: NavParams) {
  }
  text;
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilCrearPage');
  }

  dismiss() {
    alert(this.text);
    this.viewCtrl.dismiss();
  }

}
