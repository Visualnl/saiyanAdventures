import { items } from "./items.js";
import { levels } from "./levels.js";
import { quests } from "./quests.js";

class PlayerObject {
  inventory = [];
  questsFinished = [];
  enemiesDefeated = [];
  constructor(
    name = "player",
    exp = 0,
    zeni = 500,
    health = 100,
    attackDmg = 5
  ) {
    this.name = name;
    this.exp = exp;
    this.zeni = zeni;
    this.health = health;
    this.attackDmg = attackDmg;
  }
  _addExp(amount) {
    this.exp += amount;
  }
  _addZeni(amount) {
    this.zeni += amount;
  }
  _attack() {
    const damage = this.attackDmgk;
    console.log(`gelukt!`);
  }
  _addInventory(item) {
    this.inventory.push(item);
  }
  _setName(name) {
    return (this.name = name);
  }
  _getLevel(exp) {
    const level = levels.find((level, index) => {
      const nextLevel = levels[index + 1];
      if (nextLevel) {
        return exp >= level.exp && exp < nextLevel.exp;
      } else {
        return exp >= level.exp;
      }
    });
    return level ? level.level : null;
  }
  _addfinishedQuest(player) {
    const newQuests = quests.filter(
      (quest) =>
        !player.questsFinished.some(
          (playerQuest) => playerQuest.id === quest.id
        ) && quest.level <= player._getLevel(player.exp)
    );

    if (!newQuests) return;
    player.questsFinished.push(...newQuests);
  }
}

export default PlayerObject;
