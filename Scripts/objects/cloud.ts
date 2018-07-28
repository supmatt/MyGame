namespace objects {
    export class Cloud extends objects.GameObject {
      // member variables
      private _verticalSpeed: number;
      private _horizontalSpeed: number;
      private r1: number;
      

  
      /**
       * Creates an instance of Cloud.
       * @memberof Cloud
       */
      constructor() {
        super("cloud");
  
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
        
        this.Reset();
      }
  
      public Update(): void {
        this.y += this._verticalSpeed;
        this.x += this._horizontalSpeed;
        this._checkBounds();
      }
  
      public Reset(): void {
        this._verticalSpeed =  Math.floor((Math.random() * 5) + 3); // between 5 and 10 ppf
        this._horizontalSpeed = 0 //Math.floor((Math.random() * 4) -2); // between -2 and 2 ppf
        this.y = -this.height;
        
        this.x = Math.floor((Math.random()*7)) * 85+ this.halfWidth + 20;
        // this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
      }
    }
  }
  