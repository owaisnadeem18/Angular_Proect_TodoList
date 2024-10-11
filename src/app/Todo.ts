export class Todo {
    sno: number = 0 
    title: string = "1"  
    descr: string = "2" 
    isActive: boolean = true

    constructor(sno: number, title: string, descr: string, isActive: boolean) {
        this.sno = sno;
        this.title = title;
        this.descr = descr;
        this.isActive = isActive;
    }
}