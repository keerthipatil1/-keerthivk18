class sneha{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`My name is ${this.name}`);
    }
}

const keerthi=new sneha("keer");
keerthi.greet();

class std extends sneha {
    constructor(name,age,collage){
        super(name,age);
        this.collage=collage;
    }
}