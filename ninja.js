class Ninja {
    constructor(name, health = 10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`This ninjas name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`${this.name} stats are: health: ${this.health}, speed: ${this.speed}, strength: ${this.strength}.`);
        return this;
    }

    drinkSake() {
        console.log(`${this.name} drank sake`)
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Evan");
ninja1.sayName().drinkSake().showStats();


class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10;
        this.health = 200;
    }
    speakWisdom(){
        this.drinkSake()
        console.log(`What one programmer can do in one month, two programmers can do in two months.`)
    }
}

const superSensei = new Sensei("Sensei Evan");
superSensei.speakWisdom();
superSensei.showStats();