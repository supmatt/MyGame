namespace objects {
    export class Hole extends objects.GameObject {
      // member variables
      private _verticalSpeed: number;
  
     
      constructor() {
        super("hole");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds(): void {
        // check bottom boundary
        if (this.y > config.Screen.HEIGHT + this.halfHeight) {
          this.Reset();
        }
      }
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this._verticalSpeed = 2;
        this.Reset();
      }
  
      public Update(): void {
        this.y += this._verticalSpeed;
        this._checkBounds();
      }
  
      public Reset(): void {
        this.y = -this.height;
        this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
      }
    }
  }
  