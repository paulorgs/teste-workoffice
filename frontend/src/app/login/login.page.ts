import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {email:null, senha:null };
  constructor(private authService: AuthService, private router: Router,
     private toastCtrl: ToastController) { }

  ngOnInit() {
  }



  login(){

    this.authService.login(this.user)
    .subscribe(       
      //(res) => console.log(res['token']),
      
      (res) => this.router.navigateByUrl('/home' /*{state: { user: res['user'] } } */ ),
      err => {this.presentToast();}
      );
      
   
    
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Usuário e/ou Senha inválido(os)',
      duration: 2000,
      color:"danger"
    });
    toast.present();
  }

}
