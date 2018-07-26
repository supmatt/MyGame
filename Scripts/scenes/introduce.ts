module scenes {
    export class Introduce extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _welcomeLabel2: objects.Label;
        private _playButton: objects.Button;
        private _route: objects.Route;

        // constructors
        constructor() {
            super();

            this.Introduce();
        }

        // private methods

        // public methods
        public Introduce():void {

            this._route = new objects.Route();

            this._welcomeLabel = new objects.Label("Use the mouse controls the hero", "30px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, 200, true);
            this._welcomeLabel2 = new objects.Label("to avoid the dangers on the road", "30px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, 250, true);
            this._playButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);

            this.Main();
        }

        public Update():void {
            this._route.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - START SCENE`);
            this.addChild(this._route);

            this.addChild(this._welcomeLabel);
            this.addChild(this._welcomeLabel2);
            this.addChild(this._playButton);

            this._playButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}