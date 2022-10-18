import { Game } from '../../Framework/Game.js';
import { Vector2 } from '../../Framework/Vector2.js';
import { SecondPlayerFactory } from './SecondPlayerFactory.js';

const canvas = document.getElementById('canvas1');
canvas.width = 680;
canvas.height = 680;
const ctx = canvas.getContext('2d');

var gameFactory = new SecondPlayerFactory(ctx
    , new Vector2(canvas.width, canvas.height));
var game = new Game(ctx
    , new Vector2(canvas.width, canvas.height)
    , gameFactory);

function animate(timestamp) {
    game.update(timestamp);
    game.draw();
    requestAnimationFrame(animate);
};

animate(0);