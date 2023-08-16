type User = {
  name: string;
  id: string;
}[];

const users: User = [
  { name: "Tom", id: "1" },
  { name: "Mars", id: "2" },
  { name: "Tim", id: "3" },
];
const randomNum: number = Math.floor(Math.random() * users.length);
const luckyGuy: string = users[randomNum].name;

console.log(`the lucky guy is ${luckyGuy}`);
