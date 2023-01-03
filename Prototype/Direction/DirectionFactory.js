import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { BallV3 } from "../../Framework/Ball/BallV3.js";
import { BallInputHandler2 } from "../../Framework/Ball/BallInputHandler2.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { BallRender } from "../../Framework/Ball/BallRender.js";
import { DirectionRender } from "../../Framework/Entity/DirectionRender.js";
import { Printer } from "../../Framework/Printer.js";
import { Renderer } from "../../Framework/Entity/Renderer.js";

export class DirectionFactory {
  constructor(screen) {
    this.screen = screen;
    this.timer = new Timer();
    this.printer = new Printer(this.screen.textCtx);
    this.input = new InputHandler();

    this.renderer = new Renderer([ new BallRender(), new DirectionRender() ]);

    this.ball = new BallV3(
      this.screen.gameSize
      , new Vector2(this.screen.gameSize.x / 2, this.screen.gameSize.y / 2)
      , new Vector2(20, 20)
      , new Vector2(0, 0)
      , new BallInputHandler2(this.input)
      , this.renderer
      , this.printer
      , new Vector2(5, 30)
      , new WallCollision()
    );
  }
}