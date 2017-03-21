
 var Com = require("Common");

cc.Class({ //测试版本管理GIT 这是版本2
    extends: cc.Component,
    //预制菜单栏
    properties: {
      target: {
      default: null,
      type: cc.Prefab,
      },
    
      //粒子效果
      particle: cc.Node,  
      //预制精灵
      monsterPref: {
            default: null,
            type: cc.Prefab
      },
        
      //精灵列表
      nodeList: {
            default: [],  //把他缺省为数组 
            type: [cc.Node]
      },
      //按钮状态
      //buttonflag:0,
      
      //拥挤度
      crowd:0,
      //硬币数量
      coin:0,
    },
    
    // use this for initialization
    start: function () {   
     
     Global.MainNode = this;    
     //设置菜单栏
      Com.common.setMenu(this);
 


    },
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    born: function () {
       Global.log("born");
    },
    
});
