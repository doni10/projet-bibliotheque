export class Cd{
    title: string;
    description: string[];
    isLend: boolean;
    constructor(title: string){
        this.title = title;
        this.isLend = false;
    }
}