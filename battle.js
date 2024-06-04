class Battle {
  turn = 0;
  battleID;
  battleLogMessage;
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  _startIdleBattle() {
    this.battleID = setInterval(() => {
      this._battleLoop();
    }, 1000);
  }

  _endIdleBattle() {
    clearInterval(this.battleID);
  }

  _battleLoop() {
    this._playerAttack();
    this.enemy._takeDamage(this.player.attackDmg);
    this.battleLogMessage = `${this.player.name} attacked ${this.enemy.name}`;
    console.log(this.enemy.health);
    console.log(this.battleLogMessage);
  }
  _playerAttack() {}
}

export default Battle;