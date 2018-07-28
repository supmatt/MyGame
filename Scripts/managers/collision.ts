namespace managers {
  export class Collision {
    public static check(
      object1: objects.GameObject,
      object2: objects.GameObject
    ): void {
      let P1 = new math.Vec2(object1.x, object1.y);
      let P2 = new math.Vec2(object2.x, object2.y);

      if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
        if (!object2.isColliding) {
          object2.isColliding = true;
            switch(object2.name) {
                case "island":
                let yaySound = createjs.Sound.play("yay");
                yaySound.volume = 0.2;
                managers.Game.ScoreBoard.Score += 100;
                break;

                case "cloud":
                createjs.Sound.play("explosion");
                let thunderSound = createjs.Sound.play("thunder");
                thunderSound.volume = 0.2;
                managers.Game.ScoreBoard.Lives -= 1;
                // if (object1.alpha != 0) {
                //   createjs.Sound.play("explosion");
                //   managers.Game.ScoreBoard.Lives -= 1;
  
                //   let explosion = new objects.Explosion("explosion");
                //   explosion.x = object1.x;
                //   explosion.y = object1.y;
                //   managers.Game.currentSceneObject.addChild(explosion);
                //   object1.alpha = 0; // make the plane object invisible
                //   managers.Game.hero.planeFlash.alpha = 1;
                //   managers.Game.hero.planeFlash.gotoAndPlay("planeflash");
                // }

                
                break;
            }

        }
      }
      else {
          object2.isColliding = false;
      }
    }
  }
}
