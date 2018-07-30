module scenes {
    //Xi(Matt) Chen  (300939785)
      //Data modifier July 2018
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        
        private _startButton: objects.Button;
        private _InstructionsButton: objects.Button;
        private _ExitButton: objects.Button;
        // private _ocean: objects.Ocean;
        private _route: objects.Route;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        /**
         *
         *
         * @memberof Start
         */
        public Start():void {

            this._route = new objects.Route();

            this._welcomeLabel = new objects.Label("Street Adventure", "58px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 330, true);
            this._InstructionsButton = new objects.Button("InstructionsButton", config.Screen.HALF_WIDTH, 390, true);
            this._ExitButton = new objects.Button("ExitButton", config.Screen.HALF_WIDTH, 450, true);

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
        /**
         *
         *
         * @memberof Start
         */
        public Main():void {
            console.log(`Starting - START SCENE`);
            this.addChild(this._route);

            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._InstructionsButton);
            this.addChild(this._ExitButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY2;
            }, this);
            this._InstructionsButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INTRODUCE;
            }, this);
            this._ExitButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.END;
            }, this);
        }
    }
}