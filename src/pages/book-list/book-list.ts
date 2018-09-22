import { Component } from '@angular/core';
import { Book } from '../../models/Book';
import { BibliothequeService } from '../../services/bibliotheque.service';
import { ModalController, MenuController } from 'ionic-angular';
import { LendBookPage } from '../lend-book/lend-book';


@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
 

  booksList: Book[];

  constructor(private modalCtrl: ModalController,
              private bibliothequeService: BibliothequeService,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter(){
    this.booksList = this.bibliothequeService.booksList.slice();
  }

  onLoadBook(index: number){
    let modal = this.modalCtrl.create(LendBookPage, {index:index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }
}
