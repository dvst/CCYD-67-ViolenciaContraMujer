import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoriasPage } from '../historias/historias';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  irPagina(type,nombre){
    let componente:any; 
    switch(type){
      case "historias":
        componente=HistoriasPage;
        break;
    }

    const toast = this.toastCtrl.create({
      message: 'Bienvenido de vuelta ' + nombre,
      duration: 3000,
      position: 'top'
    });
    toast.present();

    this.navCtrl.setRoot(componente)
  }


}
