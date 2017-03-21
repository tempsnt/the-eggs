require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Main":[function(require,module,exports){
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
},{}],"MenuBar":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c7bcbeB2WVExbl/uJ+oiTrY', 'MenuBar');
// Script\Main\MenuBar.js

cc.Class({
    "extends": cc.Component,

    // use this for initialization
    start: function start() {
        this.setbuttonaction();
    },
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    setbuttonaction: function setbuttonaction() {
        var thebut = null;
        thebut = cc.find("Button1", this.node);
        console.log("dsds0" + thebut);
        if (thebut != null) {
            thebut.on(cc.Node.EventType.TOUCH_END, this.onclick1.bind(this));
        };

        thebut = cc.find("Button2", this.node);
        if (thebut != null) {
            thebut.on(cc.Node.EventType.TOUCH_END, this.onclick1.bind(this));
        };

        thebut = cc.find("Button3", this.node);
        if (thebut != null) {
            thebut.on(cc.Node.EventType.TOUCH_END, this.onclick1.bind(this));
        };

        thebut = cc.find("Button4", this.node);
        if (thebut != null) {
            thebut.on(cc.Node.EventType.TOUCH_END, this.onclick1.bind(this));
        };

        thebut = cc.find("Button5", this.node);
        if (thebut != null) {
            thebut.on(cc.Node.EventType.TOUCH_END, this.onclick1.bind(this));
        };
    },
    onclick1: function onclick1(event) {
        console.log("click on " + event.target.name);
    }
});

cc._RFpop();
},{}]},{},["Main","MenuBar"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1Byb2dyYW0gRmlsZXMgKHg4NikvQ29jb3NDcmVhdG9yL3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL1NjcmlwdC9NYWluL01haW4uanMiLCJhc3NldHMvU2NyaXB0L01haW4vTWVudUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOTA1NWNPRW9KaE0vWUZGUWtjMjNLM0onLCAnTWFpbicpO1xuLy8gU2NyaXB0XFxNYWluXFxNYWluLmpzXG5cbmNjLkNsYXNzKHsgLy/mtYvor5XniYjmnKznrqHnkIZHSVQg6L+Z5piv54mI5pysMlxuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50YXJnZXQpO1xuXG4gICAgICAgIHZhciBCRyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tHcm91bmRcIik7XG4gICAgICAgIC8vbm9kZS5wYXJlbnQgPSBzY2VuZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsYWJlbCk7XG4gICAgICAgIG5vZGUucGFyZW50ID0gQkc7XG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG5cbiAgICAgICAgbm9kZS5zY2FsZVggPSAwLjg1O1xuICAgICAgICBub2RlLnNjYWxlWSA9IDAuODU7XG4gICAgICAgIC8vdmFyIHcxID0gbm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgLy8gdmFyIHcxID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5XaWRnZXQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiV2lkZ2V0XCIrdzEpO1xuICAgICAgICAvLyAgICB3MS50b3A9MTA7dzEubGVmdD01MDt3MS5yaWdodD0wO1xuICAgICAgICAvL3cxLiBpc0FsaWduSG9yaXpvbnRhbENlbnRlcj10cnVlO1xuICAgICAgICAvLyAgIHcxLiBob3Jpem9udGFsQ2VudGVyPTA7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUucG9zaXRpb24ueCArIFwiLVwiICsgbm9kZS5wb3NpdGlvbi55KTtcbiAgICB9LFxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge31cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2M3YmNiZUIyV1ZFeGJsL3VKK29pVHJZJywgJ01lbnVCYXInKTtcbi8vIFNjcmlwdFxcTWFpblxcTWVudUJhci5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zZXRidXR0b25hY3Rpb24oKTtcbiAgICB9LFxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxuICAgIHNldGJ1dHRvbmFjdGlvbjogZnVuY3Rpb24gc2V0YnV0dG9uYWN0aW9uKCkge1xuICAgICAgICB2YXIgdGhlYnV0ID0gbnVsbDtcbiAgICAgICAgdGhlYnV0ID0gY2MuZmluZChcIkJ1dHRvbjFcIiwgdGhpcy5ub2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkc2RzMFwiICsgdGhlYnV0KTtcbiAgICAgICAgaWYgKHRoZWJ1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGVidXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uY2xpY2sxLmJpbmQodGhpcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoZWJ1dCA9IGNjLmZpbmQoXCJCdXR0b24yXCIsIHRoaXMubm9kZSk7XG4gICAgICAgIGlmICh0aGVidXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhlYnV0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbmNsaWNrMS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGVidXQgPSBjYy5maW5kKFwiQnV0dG9uM1wiLCB0aGlzLm5vZGUpO1xuICAgICAgICBpZiAodGhlYnV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoZWJ1dC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25jbGljazEuYmluZCh0aGlzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhlYnV0ID0gY2MuZmluZChcIkJ1dHRvbjRcIiwgdGhpcy5ub2RlKTtcbiAgICAgICAgaWYgKHRoZWJ1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGVidXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uY2xpY2sxLmJpbmQodGhpcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoZWJ1dCA9IGNjLmZpbmQoXCJCdXR0b241XCIsIHRoaXMubm9kZSk7XG4gICAgICAgIGlmICh0aGVidXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhlYnV0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbmNsaWNrMS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG9uY2xpY2sxOiBmdW5jdGlvbiBvbmNsaWNrMShldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIG9uIFwiICsgZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
