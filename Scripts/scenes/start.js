var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    //Xi(Matt) Chen  (300939785)
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this._route = new objects.Route();
            this._welcomeLabel = new objects.Label("Street Adventure", "58px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 330, true);
            this._InstructionsButton = new objects.Button("InstructionsButton", config.Screen.HALF_WIDTH, 390, true);
            this._ExitButton = new objects.Button("ExitButton", config.Screen.HALF_WIDTH, 450, true);
            this.Main();
        };
        Start.prototype.Update = function () {
            this._route.Update();
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._route);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._InstructionsButton);
            this.addChild(this._ExitButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY2;
            }, this);
            this._InstructionsButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.INTRODUCE;
            }, this);
            this._ExitButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.END;
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map