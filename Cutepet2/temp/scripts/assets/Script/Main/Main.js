"use strict";
cc._RFpush(module, '9055cOEoJhM/YFFQkc23K3J', 'Main');
// Script\Main\Main.js

cc.Class({
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

        var label = this.node.getChildByName("BackGround");
        //node.parent = scene;
        //console.log(label);
        node.parent = label;
        node.setPosition(0, 0);
        console.log(node.position.x + "-" + node.position.y);

        //    var MenuBar = label.getChildByName("MenuBar");
        //    MenuBar.setPosition(0,-200);
    },
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();