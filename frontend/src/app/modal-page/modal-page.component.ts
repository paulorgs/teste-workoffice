import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss'],
})
export class ModalPageComponent implements OnInit {
 @Input() nome:string;
 @Input() sobrenome:string;
 @Input() cidade:string;
 @Input() estado:string;
 @Input() projetos:string;
 @Input() seguidores:string;
 @Input() seguidos:string;
 @Input() fotoUrl:string;
 
  constructor(private modalController: ModalController, private navPar: NavParams) {
    
   }

  ngOnInit() {}



   
close(){
    this.modalController.dismiss();
}

}

