module scenes {
    export class Introduce extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _ocean: objects.Ocean;

        // constructors
        constructor() {
            super();

            this.Introduce();
        }

        // private methods

        // public methods
        public Introduce():void {

            this._ocean = new objects.Ocean();

            this._welcomeLabel = new objects.Label("Use the mouse control move of the actor", "80px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);

            this.Main();
        }

        public Update():void {
            this._ocean.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - START SCENE`);
            this.addChild(this._ocean);

            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}