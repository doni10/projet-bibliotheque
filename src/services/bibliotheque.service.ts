import { Book } from "../models/Book";
import { Cd } from "../models/Cd";

export class BibliothequeService{
    booksList: Book[] = [
        {
            title:'UNIX',
            description : [
                'Authors: Jean-Paul Armspach, Pierre Colin, Frédérique Ostré-Waerzeggers',
                'Synopsis: Unix: AIX,HP-UX, Linux, Solaris, etc'
            ],
            isLend: false
        },
        {
            title:'Android',
            description : [
                'Author: Florent Garin',
                'Synopsis: Développer des application mobiles pour les Google Phones'
            ],
            isLend: false
        },
        {
            title:'C et un peu +',
            description : [
                'Authors: Yves Boudreault, Wacef Guerfali',
                'Synopsis: résolution de problemes et programmation en c++ '
            ],
            isLend: true
        }
    ];
    cdsList: Cd[] = [
        {
            title:'Téléphone',
            description: [
                'Author: Jean-Louis Aubert, Louis Bertignac, Richard Kolinka, Corine Marienneau '

            ],
            isLend: true
        },
        {
            title:'The George Benson cookBook',
            description: [
                'Author:George Benson'

            ],
            isLend: false
        },
        {
            title:'Criss Cross',
            description: [
                'Author: Thelnious Monk'

            ],
            isLend: true
        },
    ];
}