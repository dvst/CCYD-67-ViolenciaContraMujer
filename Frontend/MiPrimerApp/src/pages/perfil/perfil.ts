import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { HistoriasPage } from '../historias/historias';
import { ToastController } from 'ionic-angular';
import { PerfilCrearPage } from '../perfil-crear/perfil-crear';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';


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

  perfiles: any[] = [];

  constructor(
    public modalCtrl: ModalController ,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    public profileService: ProfileServiceProvider
    ) {
  }

  ionViewDidLoad() {
    this.profileService.getProfiles()
    .subscribe(
      (data) => { // Success
        this.perfiles = data[''];
      },
      (error) =>{
        console.error(error);
      }
    )
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

  perfil_nuevo() {
   let profileModal = this.modalCtrl.create(PerfilCrearPage);
   profileModal.present();
  }
}
