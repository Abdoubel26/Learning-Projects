
class Character {
    constructor(name, health, attack, xp) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.xp = xp;
    }

    checkStatus() {
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated!`);
            this.attack === 0;
        }
        if (this.xp >= 1000) {
            console.log(`${this.name} has reached maximum XP!`);
        }
    }

    attackEnemy(enemy) {
        if(this.health > 0){
            console.log(`${this.name} is attacking ${enemy.name}!`);
        }
        else if(this.health <= 0){
            this.attack == 0;
            console.log(`${this.name} is dead!`)
        }
}

    takeDamage(enemy) {
        if(this.health > 0){
            this.health -= enemy.attack;
            if (this.health > 2000) {this.health = 2000}

            else if (this.health < 0) {
                this.health = 0
                console.log(`${this.name} is dead!`)
            };
            if(enemy.attack < 0) {enemy.attack = 0}
            else if(enemy.attack > 100) {enemy.attack = 100};
            console.log(`${this.name} took ${enemy.attack} damage! Health is now ${this.health}.`);
        }
    }
    
    heal() {
        if(this.health > 0){
            this.health += this.xp/10; // Heal amount is 10% of XP
            if (this.health > 2000) {this.health = 2000}
            console.log(`${this.name} healed for ${this.xp/10}! Health is now ${this.health}.`);
        }
        else if (this.health < 0) {
            this.health = 0;
            console.log(`${this.name} is dead!`);
        }
    }


    getXp(amount) {
        if(this.health > 0){
            this.xp += amount;
            if (this.xp > 1000) this.xp = 1000; // Cap XP at 1000
            console.log(`${this.name} gained ${amount} XP!, thier total XP is now ${this.xp}.`);
            this.attack += this.xp/Math.floor(Math.random() * 10); // Randomize attack power
        }
        else if(this.health <= 0){
            this.health == 0
            this.attack == 0
            this.xp == 0.00000000000001
            console.log(`${this.name} is dead!`)
        }
    }
}
const veronica = new Character('veronica', 1000, 70, 1);
const David = new Character('David', 800, 100, 10);


for(i = 0; i < 40; i++) {
    console.log('------------------');
    veronica.attackEnemy(David);
    David.takeDamage(veronica);  
    veronica.getXp(50);
    veronica.heal();
    veronica.checkStatus();
    David.checkStatus();
    console.log('------------------');
    David.attackEnemy(veronica);
    veronica.takeDamage(David);  
    David.getXp(50);
    David.heal();
    David.checkStatus();
    veronica.checkStatus();
    if(David.health <= 0 || veronica.health <= 0){
        i = 40;
    }
}

