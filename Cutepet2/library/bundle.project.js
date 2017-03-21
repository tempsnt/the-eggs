require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Common":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8d848W3vohKTrsUZAaas9xa', 'Common');
// Script\Common\Common.js

var _Common = {
    name: "common",

    setMenu: function setMenu(self) {
        //var scene = cc.director.getScene();
        var node = cc.instantiate(self.target);

        var BG = self.node.getChildByName("BackGround");
        //node.parent = scene; //console.log(label);
        node.parent = BG;
        node.setPosition(0, 0);

        node.scaleX = 0.85;
        node.scaleY = 0.85;
        //var w1 = node.getComponent(cc.Widget);
        //var w1 = node.getComponentsInChildren(cc.Widget);
        //console.log("Widget"+w1);
        //w1.top=10;w1.left=50;w1.right=0;
        //w1. isAlignHorizontalCenter=true;
        //w1. horizontalCenter=0;
        console.log('setMenu=' + node.position.x + "-" + node.position.y);
        return node;
    }

};

module.exports = {
    common: _Common
};

cc._RFpop();
},{}],"Global":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2ab84ACnM1J76ct1gCXXdFp', 'Global');
// Script\Common\Global.js


//此处为全局变量
window.Global = {

      //主界面节点指针
      MainNode: null,

      //debug文本输出
      log: function log(str) {
            console.log('-' + str);
      }
};

cc._RFpop();
},{}],"Main":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9055cOEoJhM/YFFQkc23K3J', 'Main');
// Script\Main\Main.js


var Com = require("Common");

cc.Class({ //测试版本管理GIT 这是版本2
    "extends": cc.Component,
    //预制菜单栏
    properties: {
        target: {
            "default": null,
            type: cc.Prefab
        },

        //粒子效果
        particle: cc.Node,
        //预制精灵
        monsterPref: {
            "default": null,
            type: cc.Prefab
        },

        //精灵列表
        nodeList: {
            "default": [], //把他缺省为数组
            type: [cc.Node]
        },
        //按钮状态
        //buttonflag:0,

        //拥挤度
        crowd: 0,
        //硬币数量
        coin: 0
    },

    // use this for initialization
    start: function start() {

        Global.MainNode = this;
        //设置菜单栏
        Com.common.setMenu(this);
    },
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    born: function born() {
        Global.log("born");
    }

});

cc._RFpop();
},{"Common":"Common"}],"MenuBar":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c7bcbeB2WVExbl/uJ+oiTrY', 'MenuBar');
// Script\Common\MenuBar.js

cc.Class({
    "extends": cc.Component,

    // use this for initialization
    start: function start() {
        this.setbuttonaction();
    },
    onLoad: function onLoad() {},
    //绑定 点击事件
    setbuttonaction: function setbuttonaction() {
        //  console.log("dsds0"+thebut);
        var thebut = null;

        thebut = cc.find("Button1", this.node);
        if (thebut !== null) {
            thebut.on(cc.Node.EventType.TOUCH_END, this.onclick1.bind(this));
        };

        thebut = cc.find("Button2", this.node);
        if (thebut !== null) {
            thebut.on(cc.Node.EventType.TOUCH_END, this.onclick1.bind(this));
        };

        thebut = cc.find("Button3", this.node);
        if (thebut !== null) {
            thebut.on(cc.Node.EventType.TOUCH_END, this.onclick1.bind(this));
        };

        thebut = cc.find("Button4", this.node);
        if (thebut !== null) {
            thebut.on(cc.Node.EventType.TOUCH_END, this.onclick1.bind(this));
        };

        thebut = cc.find("Button5", this.node);
        if (thebut !== null) {
            thebut.on(cc.Node.EventType.TOUCH_END, this.onclick1.bind(this));
        };
    },
    //点击事件
    onclick1: function onclick1(event) {
        console.log("click on " + event.target.name);
        if (event.target.name == "Button5") {
            // console.log('click 种子');
            //this.buttonflag=1;

            // var themain = this.node.parent.parent.getComponent('Main');
            // var scene = cc.director.getScene();
            // console.log('click 种子'+themain.name);
            //console.log('click 种子'+ Global.MainNode);
            Global.MainNode.born();
            //如果是空罐 就点击生成一个
            //if  (this.nodeList.length==0) this.nodeList.push(this.createMoster("1"));
            Global.log("try");
        }
    }
});

cc._RFpop();
},{}]},{},["Global","Common","Main","MenuBar"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1Byb2dyYW0gRmlsZXMgKHg4NikvQ29jb3NDcmVhdG9yL3Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL1NjcmlwdC9Db21tb24vQ29tbW9uLmpzIiwiYXNzZXRzL1NjcmlwdC9Db21tb24vR2xvYmFsLmpzIiwiYXNzZXRzL1NjcmlwdC9NYWluL01haW4uanMiLCJhc3NldHMvU2NyaXB0L0NvbW1vbi9NZW51QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOGQ4NDhXM3ZvaEtUcnNVWkFhYXM5eGEnLCAnQ29tbW9uJyk7XG4vLyBTY3JpcHRcXENvbW1vblxcQ29tbW9uLmpzXG5cbnZhciBfQ29tbW9uID0ge1xuICAgIG5hbWU6IFwiY29tbW9uXCIsXG5cbiAgICBzZXRNZW51OiBmdW5jdGlvbiBzZXRNZW51KHNlbGYpIHtcbiAgICAgICAgLy92YXIgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHNlbGYudGFyZ2V0KTtcblxuICAgICAgICB2YXIgQkcgPSBzZWxmLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrR3JvdW5kXCIpO1xuICAgICAgICAvL25vZGUucGFyZW50ID0gc2NlbmU7IC8vY29uc29sZS5sb2cobGFiZWwpO1xuICAgICAgICBub2RlLnBhcmVudCA9IEJHO1xuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xuXG4gICAgICAgIG5vZGUuc2NhbGVYID0gMC44NTtcbiAgICAgICAgbm9kZS5zY2FsZVkgPSAwLjg1O1xuICAgICAgICAvL3ZhciB3MSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgIC8vdmFyIHcxID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5XaWRnZXQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiV2lkZ2V0XCIrdzEpO1xuICAgICAgICAvL3cxLnRvcD0xMDt3MS5sZWZ0PTUwO3cxLnJpZ2h0PTA7XG4gICAgICAgIC8vdzEuIGlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyPXRydWU7XG4gICAgICAgIC8vdzEuIGhvcml6b250YWxDZW50ZXI9MDtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldE1lbnU9JyArIG5vZGUucG9zaXRpb24ueCArIFwiLVwiICsgbm9kZS5wb3NpdGlvbi55KTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb21tb246IF9Db21tb25cbn07XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyYWI4NEFDbk0xSjc2Y3QxZ0NYWGRGcCcsICdHbG9iYWwnKTtcbi8vIFNjcmlwdFxcQ29tbW9uXFxHbG9iYWwuanNcblxuXG4vL+atpOWkhOS4uuWFqOWxgOWPmOmHj1xud2luZG93Lkdsb2JhbCA9IHtcblxuICAgICAgLy/kuLvnlYzpnaLoioLngrnmjIfpkohcbiAgICAgIE1haW5Ob2RlOiBudWxsLFxuXG4gICAgICAvL2RlYnVn5paH5pys6L6T5Ye6XG4gICAgICBsb2c6IGZ1bmN0aW9uIGxvZyhzdHIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctJyArIHN0cik7XG4gICAgICB9XG59O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOTA1NWNPRW9KaE0vWUZGUWtjMjNLM0onLCAnTWFpbicpO1xuLy8gU2NyaXB0XFxNYWluXFxNYWluLmpzXG5cblxudmFyIENvbSA9IHJlcXVpcmUoXCJDb21tb25cIik7XG5cbmNjLkNsYXNzKHsgLy/mtYvor5XniYjmnKznrqHnkIZHSVQg6L+Z5piv54mI5pysMlxuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG4gICAgLy/pooTliLboj5zljZXmoI9cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcblxuICAgICAgICAvL+eykuWtkOaViOaenFxuICAgICAgICBwYXJ0aWNsZTogY2MuTm9kZSxcbiAgICAgICAgLy/pooTliLbnsr7ngbVcbiAgICAgICAgbW9uc3RlclByZWY6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy/nsr7ngbXliJfooahcbiAgICAgICAgbm9kZUxpc3Q6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBbXSwgLy/miorku5bnvLrnnIHkuLrmlbDnu4RcbiAgICAgICAgICAgIHR5cGU6IFtjYy5Ob2RlXVxuICAgICAgICB9LFxuICAgICAgICAvL+aMiemSrueKtuaAgVxuICAgICAgICAvL2J1dHRvbmZsYWc6MCxcblxuICAgICAgICAvL+aLpeaMpOW6plxuICAgICAgICBjcm93ZDogMCxcbiAgICAgICAgLy/noazluIHmlbDph49cbiAgICAgICAgY29pbjogMFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoKSB7XG5cbiAgICAgICAgR2xvYmFsLk1haW5Ob2RlID0gdGhpcztcbiAgICAgICAgLy/orr7nva7oj5zljZXmoI9cbiAgICAgICAgQ29tLmNvbW1vbi5zZXRNZW51KHRoaXMpO1xuICAgIH0sXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG4gICAgYm9ybjogZnVuY3Rpb24gYm9ybigpIHtcbiAgICAgICAgR2xvYmFsLmxvZyhcImJvcm5cIik7XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2M3YmNiZUIyV1ZFeGJsL3VKK29pVHJZJywgJ01lbnVCYXInKTtcbi8vIFNjcmlwdFxcQ29tbW9uXFxNZW51QmFyLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNldGJ1dHRvbmFjdGlvbigpO1xuICAgIH0sXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcbiAgICAvL+e7keWumiDngrnlh7vkuovku7ZcbiAgICBzZXRidXR0b25hY3Rpb246IGZ1bmN0aW9uIHNldGJ1dHRvbmFjdGlvbigpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZHNkczBcIit0aGVidXQpO1xuICAgICAgICB2YXIgdGhlYnV0ID0gbnVsbDtcblxuICAgICAgICB0aGVidXQgPSBjYy5maW5kKFwiQnV0dG9uMVwiLCB0aGlzLm5vZGUpO1xuICAgICAgICBpZiAodGhlYnV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGVidXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uY2xpY2sxLmJpbmQodGhpcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoZWJ1dCA9IGNjLmZpbmQoXCJCdXR0b24yXCIsIHRoaXMubm9kZSk7XG4gICAgICAgIGlmICh0aGVidXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoZWJ1dC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25jbGljazEuYmluZCh0aGlzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhlYnV0ID0gY2MuZmluZChcIkJ1dHRvbjNcIiwgdGhpcy5ub2RlKTtcbiAgICAgICAgaWYgKHRoZWJ1dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhlYnV0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbmNsaWNrMS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGVidXQgPSBjYy5maW5kKFwiQnV0dG9uNFwiLCB0aGlzLm5vZGUpO1xuICAgICAgICBpZiAodGhlYnV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGVidXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uY2xpY2sxLmJpbmQodGhpcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoZWJ1dCA9IGNjLmZpbmQoXCJCdXR0b241XCIsIHRoaXMubm9kZSk7XG4gICAgICAgIGlmICh0aGVidXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoZWJ1dC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25jbGljazEuYmluZCh0aGlzKSk7XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvL+eCueWHu+S6i+S7tlxuICAgIG9uY2xpY2sxOiBmdW5jdGlvbiBvbmNsaWNrMShldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIG9uIFwiICsgZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJCdXR0b241XCIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGljayDnp43lrZAnKTtcbiAgICAgICAgICAgIC8vdGhpcy5idXR0b25mbGFnPTE7XG5cbiAgICAgICAgICAgIC8vIHZhciB0aGVtYWluID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZ2V0Q29tcG9uZW50KCdNYWluJyk7XG4gICAgICAgICAgICAvLyB2YXIgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NsaWNrIOenjeWtkCcrdGhlbWFpbi5uYW1lKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NsaWNrIOenjeWtkCcrIEdsb2JhbC5NYWluTm9kZSk7XG4gICAgICAgICAgICBHbG9iYWwuTWFpbk5vZGUuYm9ybigpO1xuICAgICAgICAgICAgLy/lpoLmnpzmmK/nqbrnvZAg5bCx54K55Ye755Sf5oiQ5LiA5LiqXG4gICAgICAgICAgICAvL2lmICAodGhpcy5ub2RlTGlzdC5sZW5ndGg9PTApIHRoaXMubm9kZUxpc3QucHVzaCh0aGlzLmNyZWF0ZU1vc3RlcihcIjFcIikpO1xuICAgICAgICAgICAgR2xvYmFsLmxvZyhcInRyeVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
