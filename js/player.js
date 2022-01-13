class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.distance = 0;
    this.positionX = 0;
    this.positionY = 600;
    this.rank = 0;
    
  }

  getCount() {
    var playerCountref = database.ref("playerCount");
    playerCountref.on("value", (data) => {
      playerCount = data.val();
    });
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 320;
    } else if (this.index === 2) {
      this.positionX = width / 2 - 150;
    } else if (this.index === 3) {
      this.positionX = width / 2 + 150;
    } else if (this.index === 4) {
      this.positionX = width / 2 + 320;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      distance: this.distance,
     
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

 //Create an update() method
 update(){




 }

  static getPlayersInfo() {
    var playerinforef = database.ref("players");
    playerinforef.on("value", data => {
      allplayers = data.val();
    });
  }
}



