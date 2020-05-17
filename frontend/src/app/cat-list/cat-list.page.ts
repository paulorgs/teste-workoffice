import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { ModalPageComponent } from '../modal-page/modal-page.component';
import { ModalController } from '@ionic/angular';

const API_URL = 'http://localhost:3000/cats';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.page.html',
  styleUrls: ['./cat-list.page.scss'],
})
export class CatListPage implements OnInit {
  cats;
  obs;
  arr = new Array();
  constructor(catService: CatService, private modalController: ModalController) {
    catService.getCats().subscribe(cats => {
      for(let i= 0; i<cats['cats'].length; i++){
       this.arr.push(cats['cats'][i]);
      }
      
      
      
      
    });
   }

  ngOnInit() {
  }

  async presentModal(id) {
    
    const modal = await this.modalController.create({
      component: ModalPageComponent,
      componentProps:{
        nome:this.arr[id].nome,
        sobrenome: this.arr[id].sobrenome,
        cidade: this.arr[id].cidade,
        estado: this.arr[id].estado,
        seguidores: this.arr[id].seguidores,
        seguidos: this.arr[id].seguidos,
        projetos: this.arr[id].seguidos,
        fotoUrl: this.arr[id].fotoUrl

      }
     
    });
    return await modal.present();
    
  }

}
