let name = ["Mario", "Luigi"];
let statusOptions = ["Power Up", "Big", "Small", "Dead"];

let i = 0;
// let i = statusOptions.indexOf("");
let totalCoins = 10;
let hasStar = "No Star!";
let gameActive = true;
let status = "Big";
// let status = statusOptions[2];

class Player {
    constructor(namePicked, status, totalCoins, hasStar) {
        this.namePicked = name[Math.floor(Math.random()*2)]
        this.status = this.statusOptions[i];
        this.totalCoins = totalCoins;
        this.hasStar = "No Star.";
    }

    setName() {
        this.namePicked = name[Math.floor(Math.random()*2)]
    }
    gotHit() {
        // this.status = this.status--;
        // this.status = this.statusOptions[i++];
        // this.status = this.statusOptions++;
        this.statusOptions = ["Power Up", "Big", "Small", "Dead"];
        this.status = this.statusOptions[i++];
        if (this.status == this.statusOptions[3]) {
            gameActive = false;
        }
    }
    gotPowerUp() {
        // this.status = this.statusOptions--;
        this.statusOptions = ["Power Up", "Big", "Small", "Dead"];
        this.status = this.statusOptions[i--];
        if (this.status === this.statusOptions[0]) {
            this.hasStar = "Yes Star!";
        }
    }
    addCoins() {
        this.totalCoins = totalCoins++;
    }

    statusOptions = ["Power Up", "Big", "Small", "Dead"];

    print() {
        // const namePicked = this.namePicked;
        // const totalCoins = this.totalCoins;
        // const status = this.statusOptions;
        // const hasStar = this.hasStar;
        console.log(`name: ${this.namePicked}, status: ${this.status}, totalCoins: ${this.totalCoins}, hasStar: ${this.hasStar}`);
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
    console.log(player);
};

function stopRandomRange() {
    clearInterval(interval)
}

let interval = setInterval(randomRange, 1000);
setTimeout(stopRandomRange, 10000)

let player = new Player(this.namePicked, this.statusOptions, this.totalCoins, this.hasStar);
