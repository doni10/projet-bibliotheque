import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Cd } from '../../models/Cd';
import { BibliothequeService } from '../../services/bibliotheque.service';


@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: Cd;
  
  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public bibliothequeService: BibliothequeService) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.cd = this.bibliothequeService.cdsList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleCd(){
    this.cd.isLend = !this.cd.isLend;
  }

}
