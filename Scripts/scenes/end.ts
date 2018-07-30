module scenes {
    //Xi(Matt) Chen  (300939785)
    export class End extends objects.Scene {
        // member variables
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _exitButton: objects.Button;
        private _route: objects.Route;

        /**
         *Creates an instance of End.
         * @memberof End
         */
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        /**
         *
         *
         * @memberof End
         */
        public Start():void {
            this._route = new objects.Route();

            this._gameOverLabel = new objects.Label("Good Job !!", "80px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, 160, true);
            this._restartButton = new objects.Button("RestartButton", config.Screen.HALF_WIDTH, 380, true);
            this._exitButton = new objects.Button("ExitButton", config.Screen.HALF_WIDTH, 440, true);

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
 * @memberof End
 */
public Main():void {
            console.log(`Starting - END SCENE`);

            this.addChild(this._route);

            this.addChild(this._gameOverLabel);

            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);

            this.addChild(this._restartButton);

            this.addChild(this._exitButton);

            this._restartButton.on("click", function(){
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.INTRODUCE;
            }, this);

            this._exitButton.on("click", function(){
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        }
    }
}