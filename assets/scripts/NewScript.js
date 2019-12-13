// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       
    },
    onLoad(){
        //监听鼠标的点击事件
       
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchend, this);
    },
    touchend(){
        console.log('Mouse down');
        cc.director.loadScene("game", this.onSceneLaunched);
    },
    onSceneLaunched(){
        console.log('场景切换了,处理一些在场景切换的时候需要处理的信息');
        //移除场景
        

    },
    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchend, this);
    },

   

});