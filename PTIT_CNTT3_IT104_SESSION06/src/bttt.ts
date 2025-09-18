//  bai tap tong hop





interface iAnimal {
    name: string   // tuoi dong vat;
    category: string |boolean// loai dong vat;
    age: number // tuoi cua dong vat;
    sound(): string; // tra ve am thanh cua dong vat
    getDetal(): string // lay thong tin chi tiet cua dong vat;
    move(): string // mo ta di chuyen cua dong vat;
    feed(): string // mo ta thuc an cua dong vat;

}




/// b2 tao mot abstract class Animal;



abstract class Animal implements iAnimal {
    name: string;
    age: number;
    category: string | boolean ;
    constructor(name: string, age: number, category: string|boolean ) {
        this.age = age;
        this.name = name;
        this.category = category
    }
    sound(): string {
        return ``
    }
    getDetal(): string {
        return ``
    }
    move(): string {
        return ``
    }
    feed(): string {
        return ``
    }
}


class Bird extends Animal {
    wingSpan:  string |boolean
    constructor (name: string,age : number,wingSpan:string |boolean) {
        super(name ,age,wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;

    }
    move(): string {
        return `phuong thuc di chuyen cua chim la bay`;
    }
}


class manMal extends Animal {
    funcolor:  string
    constructor (name: string,age : number,funcolor: string) {
        super(name ,age,funcolor);
        this.name = name;
        this.age = age;
        this.funcolor = funcolor ;

    }
    move(): string {
        return `phuong thuc di chuyen la chay`;
    }
}

class   repTital extends Animal {
    venomuus : boolean ;
    constructor (name: string,age : number,venomuus : boolean) {
        super(name ,age,venomuus);
        this.name = name;
        this.age = age;
        this.venomuus = venomuus ;

    }
    move(): string {
        return `phuong thuc di chuyen la bo`;
    }
}    