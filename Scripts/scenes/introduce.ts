module scenes {
    export class Introduce extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _welcomeLabel2: objects.Label;
        private _playButton: objects.Button;
        private _playButton2: objects.Button;
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

            this._welcomeLabel = new objects.Label("Use the mouse controls the hero or moto", "30px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, 180, true);
            this._welcomeLabel2 = new objects.Label("to avoid the dangers on the road", "30px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, 230, true);
            this._playButton = new objects.Button("HeroButton", config.Screen.HALF_WIDTH, 330, true);
            this._playButton2 = new objects.Button("MotoButton", config.Screen.HALF_WIDTH, 400, true);

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
            this.addChild(this._playButton2);

            this._playButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._playButton2.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY2;
            }, this);
        }
    }
}