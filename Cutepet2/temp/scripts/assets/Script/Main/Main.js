"use strict";
cc._RFpush(module, '9055cOEoJhM/YFFQkc23K3J', 'Main');
// Script\Main\Main.js

cc.Class({ //测试版本管理GIT 这是版本2
    "extends": cc.Component,

    properties: {
        target: {
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    start: function start() {
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.target);

        var BG = this.node.getChildByName("BackGround");
        //node.parent = scene;
        //console.log(label);
        node.parent = BG;
        node.setPosition(0, 0);

        node.scaleX = 0.85;
        node.scaleY = 0.85;
        //var w1 = node.getComponent(cc.Widget);
        // var w1 = node.getComponentsInChildren(cc.Widget);
        //console.log("Widget"+w1);
        //    w1.top=10;w1.left=50;w1.right=0;
        //w1. isAlignHorizontalCenter=true;
        //   w1. horizontalCenter=0;
        console.log(node.position.x + "-" + node.position.y);
    },
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();