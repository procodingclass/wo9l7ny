class Form {
  constructor() {
    this.greetings = createElement("h2");
    this.input = createInput("name");
    this.buttonImg = createImg("./images/start.png");
    this.greetings2 = createElement("h2");
  }
  display() {
    this.input.position(displayWidth / 2 - 90, displayHeight / 2 - 150);
    this.input.size(180, 30);
    this.buttonImg.position(displayWidth / 2 + 50, displayHeight / 2 - 100);
    this.buttonImg.size(150, 50);

    this.buttonImg.mousePressed(() => {
      this.input.hide();
      this.buttonImg.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      console.log(player.index);
      player.addPlayer();
      player.updateCount(playerCount);
      this.greetings.html("Hello " + player.name);
      this.greetings.position(displayWidth / 2 - 200, displayHeight / 2 - 150);
    });
  }

  hide() {
    this.buttonImg.hide();
    this.input.hide();
    this.greetings.hide();
  }

}
