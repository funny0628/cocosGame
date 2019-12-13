// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

// cc.Class({
//     extends: cc.Component,

//     properties: {
        
//     },
//     onLoad(){
//         //监听事件
//         this.node.on(cc.Node.EventType.TOUCH_END,this.touchend,this )
       
//     },

//     touchend(){
//         cc.director.loadScene('menu');
        
//     },
  
//     onDestroy() {
//         this.node.off(cc.Node.EventType.TOUCH_END,this.touchend,this )
//     },


   
// });


cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    onLoad(){
        console.log('===========');
        
        this.node.on(cc.Node.EventType.MOUSE_DOWN	,this.mousedown,this )
    },

    mousedown(){
        console.log('------------');
        
        cc.director.loadScene('menu');
        
    },

    onDestroy() {
      
        this.node.off(cc.Node.EventType.MOUSE_DOWN,this.mousedown,this )
    },

});
