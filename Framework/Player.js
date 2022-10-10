import { RectangleObject } from "./RectangleObject.js";

export class Player extends RectangleObject {
    constructor(game, position, size, speed) {
        super(game, position, size, speed);
    }
    update(timer, input) {
        //this.#handleInput(input);
        this.#setPosition(timer);
        this.#setConstraints();   
    }
    #handleInput(input) {
        if (input.keys.indexOf("ArrowUp") > -1) {
            this.speed.y = 1;
        } else if (input.keys.indexOf("ArrowDown") > -1) {
            this.speed.y = -1;
        } else this.speed.y = 0;
    }
    #setPosition(timer) {
        this.position.y -= timer.deltaTime * this.speed.y;
    }
    #setConstraints() {
        if (this.position.y <= 0)
        {
            this.position.y = 0;
        }
        if (this.position.y >= this.game.size.y - this.size.y)
        {
            this.position.y = this.game.size.y - this.size.y;
        }
    }
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(
            this.position.x - this.size.x/2,
            this.position.y - this.size.y/2,
            this.size.x,
            this.size.y
        );
    }
}