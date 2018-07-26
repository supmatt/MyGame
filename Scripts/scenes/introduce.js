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
    var Introduce = /** @class */ (function (_super) {
        __extends(Introduce, _super);
        // constructors
        function Introduce() {
            var _this = _super.call(this) || this;
            _this.Introduce();
            return _this;
        }
        // private methods
        // public methods
        Introduce.prototype.Introduce = function () {
            this._route = new objects.Route();
            this._welcomeLabel = new objects.Label("Use the mouse controls the hero", "30px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, 200, true);
            this._welcomeLabel2 = new objects.Label("to avoid the dangers on the road", "30px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, 250, true);
            this._playButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);
            this.Main();
        };
        Introduce.prototype.Update = function () {
            this._route.Update();
        };
        Introduce.prototype.Reset = function () {
        };
        Introduce.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Introduce.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._route);
            this.addChild(this._welcomeLabel);
            this.addChild(this._welcomeLabel2);
            this.addChild(this._playButton);
            this._playButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Introduce;
    }(objects.Scene));
    scenes.Introduce = Introduce;
})(scenes || (scenes = {}));
//# sourceMappingURL=introduce.js.map