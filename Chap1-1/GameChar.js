/**
 * 문제12 : 게임 캐릭터 클래스 만들기
 * 2025.03.01 Bella Lee
 */

const Wizard = class Wizard{
  constructor(health, mana, armor){
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack(){
    console.log("파이어볼");
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();