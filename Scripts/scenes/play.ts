module scenes {
      //Xi(Matt) Chen  (300939785)
      //Data modifier July 2018
    export class Play extends objects.Scene {
        // member variables
        private _plane:objects.Plane;
        // private _ocean:objects.Ocean;
        private _route:objects.Route;
        private _island:objects.Island;
        private _hole:objects.Hole;
        private _clouds:objects.Cloud[];
        private _cloudNum:number;
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildClouds():void {
            for (let count = 0; count < this._cloudNum; count++) {
                this._clouds.push(new objects.Cloud());
                //this._clouds[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("bbackground");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;


            this._plane = new objects.Plane();
            this._route = new objects.Route();
            this._island = new objects.Island();
            this._hole = new objects.Hole();

            // creates an empty array of type Cloud
            this._clouds = new Array<objects.Cloud>();
            this._cloudNum = 4;

            this._buildClouds();
           
            this.Main();
        }

        public Update():void {
            this._plane.Update();
            this._route.Update();
            this._island.Update();
            this._hole.Update();

            managers.Collision.check(this._plane, this._island);
            managers.Collision.check(this._plane, this._hole);

            this._clouds.forEach(cloud => {
                cloud.Update();
                managers.Collision.check(this._plane, cloud);
            });
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.engineSound.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the ocean to the scene
            this.addChild(this._route);

            // adding the island to the scene
            this.addChild(this._island);
            this.addChild(this._hole);

            // adding the plane to the scene
            this.addChild(this._plane);

            // adding the cloud to the scene
            for (const cloud of this._clouds) {
                this.addChild(cloud);
            }

            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        }
    }
}