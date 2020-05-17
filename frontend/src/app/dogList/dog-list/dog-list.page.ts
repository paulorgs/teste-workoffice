import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';
import { ModalPageComponent } from '../../modal-page/modal-page.component';
import { ModalController } from '@ionic/angular';

const API_URL = 'http://localhost:3000/dogs';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.page.html',
  styleUrls: ['./dog-list.page.scss'],
})
export class DogListPage implements OnInit {
  dogs;
  obs;
  arr = new Array();
  constructor(dogService: DogService, private modalController: ModalController,
    ) {

   dogService.getDogs().subscribe(dogs => {
     for(let i= 0; i<dogs['dogs'].length; i++){
      this.arr.push(dogs['dogs'][i]);
     }

     
     
   });
 
  }

  ngOnInit() {
  }

  async presentModal(id) {
    console.log(this.arr);
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




