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