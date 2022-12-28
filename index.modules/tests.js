import { pongPage } from "./data.js";

const tests = [];
tests["left-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/LeftWallCollision.js",
};

tests["right-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/RightWallCollision.js",
};

tests["top-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/TopWallCollision.js",
};

tests["bottom-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/BottomWallCollision.js",
};

tests["controlled-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/ControlledWallCollision.js",
};

tests["player"] = {
  page: pongPage,
  script: "../Test/Player/PlayerTest.js",
};

tests["collision-left"] = {
  page: pongPage,
  script: "../Test/MyBallCollision/CollisionLeftTest.js",
};

tests["collision-right"] = {
  page: pongPage,
  script: "../Test/MyBallCollision/CollisionRightTest.js",
};

tests["rect-collision"] = {
  page: pongPage,
  script: "../Test/RectCollisionTest.js",
};

export { tests }