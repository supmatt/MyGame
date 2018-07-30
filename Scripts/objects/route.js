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
var objects;
(function (objects) {
    //Xi(Matt) Chen  (300939785)
    var Route = /** @class */ (function (_super) {
        __extends(Route, _super);
        /**
         * Creates an instance of Ocean.
         * @memberof Route
         */
        function Route() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("route")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Route.prototype._checkBounds = function () {
            // check top boundary
            if (this.y >= 0) {
                this.Reset();
            }
        };
        // public methods
        Route.prototype.Start = function () {
            this._verticalSpeed = 2; // 5 pixels per frame
            this.Reset();
        };
        Route.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Route.prototype.Reset = function () {
            this.y = -960;
        };
        return Route;
    }(createjs.Bitmap));
    objects.Route = Route;
})(objects || (objects = {}));
//# sourceMappingURL=route.js.map