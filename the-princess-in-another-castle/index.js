let name = ["Mario", "Luigi"];
let status = ["Powered Up", "Big", "Small", "Dead"];
let currentIndex;
let i;
let totalCoins = 0;
let hasStar = "No Star!";
let Enabled = true;
// this.statusNow = "Small"

class Player {
    constructor(namePicked, statusNow, totalCoins, hasStar) {
        this.namePicked = name[Math.floor(Math.random()*2)]
        this.statusNow = "Small";
        this.totalCoins = 0;
        this.hasStar = "No Star.";
    }

    setName() {
        this.namePicked = name[Math.floor(Math.random()*2)]
    }

    gotHit() {
        let status = ["Powered Up", "Big", "Small", "Dead"];

        if (this.statusNow == "Powered Up") {
            console.log("Got hit!")
            if (this.hasStar == "No Star.") {
                this.statusNow = "Big"
                this.print();
            }

            if (this.hasStar == "You have a star!") {
                this.statusNow = "Powered Up"
                this.hasStar = "No Star."
                console.log("You got saved from a star!")
                this.print();
            }
        }

        if (this.statusNow == "Big") {
            console.log("Got hit!")
            this.statusNow = "Small"
            this.print();
        }

        if (this.statusNow == "Small") {
            console.log("Got hit!")
            this.statusNow = "Dead"
            this.print();
        }
    }

    gotPowerUp() {
        let status = ["Powered Up", "Big", "Small", "Dead"];

        if (this.statusNow == "Small") {
            console.log("Got powered up!")
            this.statusNow = "Big"
            this.print();
        }

        if (this.statusNow == "Big") {
            console.log("Got powered up!")
            this.statusNow = "Powered Up";
            this.print();
        }

        if (this.statusNow == "Powered Up") {
            console.log("More power up!")
            this.hasStar = "You have a star!"
            this.statusNow = "Powered Up"
            this.print();
        }
    }

    addCoins() {
        console.log("Got Coins!")
        this.totalCoins++;
        this.print();
    }

    print(){
        console.log(`Name: ${this.namePicked}, 
        Total Coins: ${this.totalCoins}, 
        Status: ${this.statusNow}, 
        Star: ${this.hasStar}`)
    }
}

function randomRange() {
    let random = Math.floor(Math.random()*3);
    if (random === 0) {
        player.gotHit();
    }
    if (random === 1) {
        player.gotPowerUp();
    }
    if (random === 2) {
        player.addCoins();
    }
    if (player.statusNow === "Dead") {
        console.log("You are dead...")
        console.log("Game Over...")
        Enabled = false;
        stopRandomRange();
    }
};


function stopRandomRange() {
    clearInterval(intervalID)
}

let intervalID = setInterval(randomRange, 500);
setTimeout(stopRandomRange, 3000)

const player = new Player(this.namePicked, this.statusNow, 0, this.hasStar);

