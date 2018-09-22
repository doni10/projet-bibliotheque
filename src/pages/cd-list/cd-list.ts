import { Component } from '@angular/core';

import { Cd } from '../../models/Cd';
import { BibliothequeService } from '../../services/bibliotheque.service';
import { ModalController, MenuController } from 'ionic-angular';
import { LendCdPage } from '../lend-cd/lend-cd';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdsList: Cd[];

  constructor(private modalCtrl: ModalController,
              private bibliothequeService: BibliothequeService,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter(){
    this.cdsList = this.bibliothequeService.cdsList.slice();
  }
   
  onLoadCd(index: number){
    let modal = this.modalCtrl.create(LendCdPage, {index:index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }
}
