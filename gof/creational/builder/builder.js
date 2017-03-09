class Director {
    constructor () {
        this.structure = ['Maze','Wall','Door'];
    }

    construct () {
        for(var all in this.structure){
            let builder = new ConcreteBuilder()
            builder.buildPart(this.structure[all]);
            builder.getResult()
        }
    }
}

class Builder {
    constructor () {
    }

    buildPart () {
    }
}

class ConcreteBuilder extends Builder {
    constructor() {
        super()
    }

    buildPart (rawmaterial){
        var material = rawmaterial
        this.product = new Product(material)
    }

    getResult (){
        return this.product
    }
}

class Product {
    constructor(material) {
        this.material = material
    }
}