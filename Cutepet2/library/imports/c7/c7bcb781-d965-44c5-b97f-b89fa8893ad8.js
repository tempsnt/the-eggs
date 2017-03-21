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