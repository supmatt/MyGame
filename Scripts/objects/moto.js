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
    var Moto = /** @class */ (function (_super) {
        __extends(Moto, _super);
        /**
         * Creates an instance of Moto.
         * @memberof Moto
         */
        function Moto() {
            var _this = _super.call(this, "moto") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Moto.prototype._checkBounds = function () {
            // check right boundary
            if (this.x > config.Screen.WIDTH - this.halfWidth) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            // check left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        // public methods
        Moto.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 420;
        };
        Moto.prototype.Update = function () {
            this.x = managers.Game.Stage.mouseX;
            this._checkBounds();
        };
        Moto.prototype.Reset = function () { };
        return Moto;
    }(objects.GameObject));
    objects.Moto = Moto;
})(objects || (objects = {}));
//# sourceMappingURL=moto.js.map