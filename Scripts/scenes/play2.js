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
    var Play2 = /** @class */ (function (_super) {
        __extends(Play2, _super);
        // constructors
        function Play2() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play2.prototype._buildClouds = function () {
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds.push(new objects.Cloud());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Play2.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("bbbackground");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._moto = new objects.Moto();
            this._route = new objects.Route();
            this._island = new objects.Island();
            this._hole = new objects.Hole();
            // creates an empty array of type Cloud
            this._clouds = new Array();
            this._cloudNum = 5;
            this._buildClouds();
            this.Main();
        };
        Play2.prototype.Update = function () {
            var _this = this;
            this._moto.Update();
            this._route.Update();
            this._island.Update();
            this._hole.Update();
            managers.Collision.check(this._moto, this._island);
            managers.Collision.check(this._moto, this._hole);
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                managers.Collision.check(_this._moto, cloud);
            });
        };
        Play2.prototype.Reset = function () {
        };
        Play2.prototype.Destroy = function () {
            this.engineSound.stop();
            this.removeAllChildren();
        };
        Play2.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the ocean to the scene
            this.addChild(this._route);
            // adding the island to the scene
            this.addChild(this._island);
            this.addChild(this._hole);
            // adding the plane to the scene
            this.addChild(this._moto);
            // adding the cloud to the scene
            for (var _i = 0, _a = this._clouds; _i < _a.length; _i++) {
                var cloud = _a[_i];
                this.addChild(cloud);
            }
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        };
        return Play2;
    }(objects.Scene));
    scenes.Play2 = Play2;
})(scenes || (scenes = {}));
//# sourceMappingURL=play2.js.map