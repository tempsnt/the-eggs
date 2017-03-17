cc.Class({ //测试版本管理GIT 这是版本2
    extends: cc.Component,

    properties: {
      target: {
      default: null,
      type: cc.Prefab,
      },
    },

    // use this for initialization
    start: function () {   
    var scene = cc.director.getScene();
    var node = cc.instantiate(this.target);

 var label = this.node.getChildByName("BackGround");
 //node.parent = scene;
  //console.log(label);
    node.parent = label;
    node.setPosition(0,0);
    console.log(node.position.x+"-"+node.position.y);
    
//    var MenuBar = label.getChildByName("MenuBar");
//    MenuBar.setPosition(0,-200);

    },
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
