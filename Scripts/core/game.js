//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
//Xi(Matt) Chen  (300939785)
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var ScoreBoard;
    var TextureAtlas;
    var stats;
    var textureData = {
        "images": [],
        "framerate": 60,
        "frames": [
            [1, 1, 150, 150, 0, 0, 0],
            [153, 1, 92, 166, 0, 0, 0],
            [1, 153, 150, 50, 0, 0, 0],
            [153, 169, 92, 166, 0, 0, 0],
            [1, 205, 150, 50, 0, 0, 0],
            [1, 257, 150, 50, 0, 0, 0],
            [1, 309, 150, 50, 0, 0, 0],
            [153, 337, 88, 100, 0, -1, 0],
            [1, 361, 150, 50, 0, 0, 0],
            [1, 413, 150, 50, 0, 0, 0],
            [1, 465, 50, 115, 0, 0, 0],
            [53, 465, 50, 109, 0, 0, 0],
            [153, 439, 50, 36, 0, 0, -13],
            [105, 477, 49, 66, 0, -1, 0],
            [156, 477, 49, 66, 0, 0, 0]
        ],
        // "animations": {
        //     "hole": { "frames": [0] },
        //     "island": { "frames": [1] },
        //     "HeroButton": { "frames": [3] },
        //     "MotoButton": { "frames": [4] },
        //     "moto": { "frames": [5,2],"speed": 0.1 },
        //     "RestartButton": { "frames": [6] },
        //     "StartButton": { "frames": [7] },
        //     "cloud": { "frames": [8,9],"speed": 0.1 },
        //     "plane": { "frames": [10,11,10,12],"speed": 0.1  }
        // },
        "animations": {
            "hole": { "frames": [0] },
            "cloud": { "frames": [1, 3], "speed": 0.1 },
            "ExitButton": { "frames": [2] },
            "HeroButton": { "frames": [4] },
            "InstructionsButton": { "frames": [5] },
            "MotoButton": { "frames": [6] },
            "island": { "frames": [7] },
            "StartButton": { "frames": [8] },
            "RestartButton": { "frames": [9] },
            "moto": { "frames": [11, 10], "speed": 0.1 },
            "plane": { "frames": [12, 13, 12, 14], "speed": 0.1 }
        },
    };
    var Manifest = [
        { id: "textureAtlas", src: "/Assets/sprites/textureAtlas.png" },
        { id: "route", src: "/Assets/images/route.png" },
        { id: "bbackground", src: "/Assets/audio/1-1.mp3" },
        { id: "bbbackground", src: "/Assets/audio/1-2.mp3" },
        { id: "bbon", src: "/Assets/audio/2.mp3" },
        { id: "hhole", src: "/Assets/audio/3.mp3" },
        { id: "ppolice", src: "/Assets/audio/4.mp3" }
    ];
    function SetupStats() {
        stats.showPanel(0);
        document.body.appendChild(stats.dom);
    }
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage; // create a reference to the stage class
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        ScoreBoard = new managers.ScoreBoard;
        managers.Game.ScoreBoard = ScoreBoard;
        textureData.images = [AssetManager.getResult("textureAtlas")];
        TextureAtlas = new createjs.SpriteSheet(textureData);
        managers.Game.TextureAtlas = TextureAtlas;
        stats = new Stats();
        //SetupStats();
        // This is where all the magic happens
        Main();
    }
    function Update() {
        //stats.begin();
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
        //stats.end();
    }
    function Main() {
        console.log("%c Switching Scenes...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.INTRODUCE:
                CurrentScene = new scenes.Introduce();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.PLAY2:
                CurrentScene = new scenes.Play2();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map