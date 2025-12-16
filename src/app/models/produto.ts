export class Produto {
    id!:number;
    name!:string;
    preco!:number;
    estoque!:number;
    constructor(id: number, name: string, preco: number, estoque: number){
        this.id = id;
        this.name = name;
        this.preco = preco;
        this.estoque = estoque;

    }
}
