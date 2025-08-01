
const coins = [];

class Coin {
  constructor(coinid, owner = 'The Mine') {
    this.coinid = coinid;
    this.owner = owner;
  }

  transfer(newOwner) {
    this.owner = newOwner;
  }


  getCoinId() {
    return this.coinid;
  }

    getOwner() {
        return this.owner;
    }
}

const coin1 = new Coin("çRS|?6¤d!:^z7|Bx;3ù|H(*oUb");
const coin2 = new Coin("?8t:9FIdµ&@çVOG!JRTtEMD)Us");
const coin3 = new Coin("S{y;£1t*Fd1.0$#&P§M^z3_éFI");
const coin4 = new Coin("1.0$#&P§M^z3_éFI");
const coin5 = new Coin("B?Wj)r(Xi[JZV18à&(eW=j¤m");
const coin6 = new Coin("f9LùxçµAQµ~Fè¨*_dao¨6vFo£&");

coins.push(coin1, coin2, coin3, coin4, coin5, coin6);

function checkcoins(){
  console.error(coins)
}


window.prompt('what is your name:')
checkcoins()