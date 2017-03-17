require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Main":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1Byb2dyYW0gRmlsZXMgKHg4NikvQ29jb3NDcmVhdG9yL3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL1NjcmlwdC9NYWluL01haW4uanMiLCJhc3NldHMvU2NyaXB0L01haW4vTWVudUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOTA1NWNPRW9KaE0vWUZGUWtjMjNLM0onLCAnTWFpbicpO1xuLy8gU2NyaXB0XFxNYWluXFxNYWluLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGFyZ2V0KTtcblxuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrR3JvdW5kXCIpO1xuICAgICAgICAvL25vZGUucGFyZW50ID0gc2NlbmU7XG4gICAgICAgIC8vY29uc29sZS5sb2cobGFiZWwpO1xuICAgICAgICBub2RlLnBhcmVudCA9IGxhYmVsO1xuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICBjb25zb2xlLmxvZyhub2RlLnBvc2l0aW9uLnggKyBcIi1cIiArIG5vZGUucG9zaXRpb24ueSk7XG5cbiAgICAgICAgLy8gICAgdmFyIE1lbnVCYXIgPSBsYWJlbC5nZXRDaGlsZEJ5TmFtZShcIk1lbnVCYXJcIik7XG4gICAgICAgIC8vICAgIE1lbnVCYXIuc2V0UG9zaXRpb24oMCwtMjAwKTtcbiAgICB9LFxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge31cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2M3YmNiZUIyV1ZFeGJsL3VKK29pVHJZJywgJ01lbnVCYXInKTtcbi8vIFNjcmlwdFxcTWFpblxcTWVudUJhci5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zZXRidXR0b25hY3Rpb24oKTtcbiAgICB9LFxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxuICAgIHNldGJ1dHRvbmFjdGlvbjogZnVuY3Rpb24gc2V0YnV0dG9uYWN0aW9uKCkge1xuICAgICAgICB2YXIgdGhlYnV0ID0gbnVsbDtcbiAgICAgICAgdGhlYnV0ID0gY2MuZmluZChcIkJ1dHRvbjFcIiwgdGhpcy5ub2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkc2RzMFwiICsgdGhlYnV0KTtcbiAgICAgICAgaWYgKHRoZWJ1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGVidXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uY2xpY2sxLmJpbmQodGhpcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoZWJ1dCA9IGNjLmZpbmQoXCJCdXR0b24yXCIsIHRoaXMubm9kZSk7XG4gICAgICAgIGlmICh0aGVidXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhlYnV0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbmNsaWNrMS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGVidXQgPSBjYy5maW5kKFwiQnV0dG9uM1wiLCB0aGlzLm5vZGUpO1xuICAgICAgICBpZiAodGhlYnV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoZWJ1dC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25jbGljazEuYmluZCh0aGlzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhlYnV0ID0gY2MuZmluZChcIkJ1dHRvbjRcIiwgdGhpcy5ub2RlKTtcbiAgICAgICAgaWYgKHRoZWJ1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGVidXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uY2xpY2sxLmJpbmQodGhpcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoZWJ1dCA9IGNjLmZpbmQoXCJCdXR0b241XCIsIHRoaXMubm9kZSk7XG4gICAgICAgIGlmICh0aGVidXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhlYnV0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbmNsaWNrMS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG9uY2xpY2sxOiBmdW5jdGlvbiBvbmNsaWNrMShldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIG9uIFwiICsgZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
