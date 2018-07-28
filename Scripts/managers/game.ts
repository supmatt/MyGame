module managers {
    export class Game {
        public static AssetManager:createjs.LoadQueue;
        public static CurrentScene:objects.Scene;
        public static CurrentState:config.Scene;
        public static Stage:createjs.Stage;
        public static ScoreBoard:managers.ScoreBoard;
        public static TextureAtlas:createjs.SpriteSheet;
        public static currentSceneObject: objects.Scene;
        public static plane: objects.Plane;
        public static hero: objects.Hero;
    }
}