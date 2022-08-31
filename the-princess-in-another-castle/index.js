let name = ["Mario", "Luigi"];
let status = ["Power Up", "Big", "Small", "Dead"];
let currentIndex;
let i;
let totalCoins = 1;
let hasStar = "No Star!";
let Enabled = true;
let statusNow = "Big";

// let statusNow = status[currentIndex];

class Player {
    constructor(namePicked, statusNow, totalCoins, hasStar) {
        this.namePicked = name[Math.floor(Math.random()*2)]
        // this.statusNow = "Big";
        // this.statusNow = status[currentIndex];
        this.statusNow = status[1];

        this.totalCoins = 0;
        this.hasStar = "No Star.";
    }

    setName() {
        this.namePicked = name[Math.floor(Math.random()*2)]
    }

    gotHit() {
        status = ["Power Up", "Big", "Small", "Dead"];
        this.statusNow = status[(currentIndex+1)%4];
        // this.statusNow = status[(currentIndex++)];
        // console.log("Got hit")
        if (this.statusNow == status[(currentIndex === 0)]) {
            this.statusNow == status[1]
            this.statusNow == "Big"
        }

        if (this.statusNow == status[(currentIndex === 1)]) {
            this.statusNow == "Small"
        }

        if (this.statusNow == status[(currentIndex === 2)]) {
            this.statusNow = "Dead"
        }

        // if (this.statusNow == status[(currentIndex === 3)]) {
        //     console.log("GAME OVER");
        // }
    }
    gotPowerUp() {
        status = ["Power Up", "Big", "Small", "Dead"];
        // this.statusNow = this.status[(currentIndex-1)];
        this.statusNow = status[(currentIndex+3)%4];
        // this.statusNow = status[currentIndex--];
        if (this.statusNow == status[(currentIndex === 2)]) {
            this.statusNow == "Big";
        }

        if (this.statusNow == status[(currentIndex === 1)]) {
            this.statusNow == "Power Up";
        }

        if (this.statusNow === status[(currentIndex === 0)]) {
            this.hasStar = "Yes Star!";
            this.statusNow = statusNow;
        }
    }
    addCoins() {
        // console.log("GOT COINS")
        this.totalCoins++;
        // this.statusNow = status[currentIndex];
    }

    print() {
        // const namePicked = this.namePicked;
        // const totalCoins = this.totalCoins;
        // const status = this.statusOptions;
        // const hasStar = this.hasStar;
        return `name: ${this.namePicked}, status: ${this.statusNow}, totalCoins: ${this.totalCoins}, hasStar: ${this.hasStar}`;
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
        console.log("You are dead")
        Enabled = false;
        stopRandomRange();
    }
    // console.log(player);
    console.log(`Name: ${player.namePicked}, 
    Status: ${player.statusNow}, 
    Total coins: ${player.totalCoins}, 
    Has star: ${player.hasStar}`);
};

function stopRandomRange() {
    clearInterval(interval)
}

let interval = setInterval(randomRange, 1000);
setTimeout(stopRandomRange, 8000)

const player = new Player(this.namePicked, this.statusNow, 0, this.hasStar);

