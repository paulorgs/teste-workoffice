import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  KEY = 'authtoken';
  
  user$: Observable<User>;
  user: User;
  constructor(private router: Router, private userService: UserService,
    private menuController: MenuController,
    private modalController: ModalController) {
    //const nav  = this.router.getCurrentNavigation();
    //this.user =  nav.extras.state.user;
     
      this.user$ = userService.getUser();
      this.user$.subscribe(user => this.user = user);
     
      
      
  }

  ngOnInit(){
    this.menuController.swipeGesture(true);
  }
  openMenu(){
    this.menuController.toggle();
  }
  logout(){
    this.menuController.close();
    this.userService.logout();
    this.router.navigateByUrl('/');
  }
  
}
