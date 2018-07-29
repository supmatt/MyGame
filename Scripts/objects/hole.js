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
    var Hole = /** @class */ (function (_super) {
        __extends(Hole, _super);
        function Hole() {
            var _this = _super.call(this, "hole") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Hole.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
        };
        // public methods
        Hole.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 2;
            this.Reset();
        };
        Hole.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Hole.prototype.Reset = function () {
            this.y = -this.height;
            this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
        };
        return Hole;
    }(objects.GameObject));
    objects.Hole = Hole;
})(objects || (objects = {}));
//# sourceMappingURL=hole.js.map