(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/NewScript.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3b71a7FVwhM2ZAePm/7VxhB', 'NewScript', __filename);
// scripts/NewScript.js

'use strict';

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

    properties: {},
    onLoad: function onLoad() {
        //监听鼠标的点击事件

        this.node.on(cc.Node.EventType.TOUCH_END, this.touchend, this);
    },
    touchend: function touchend() {
        console.log('Mouse down');
        cc.director.loadScene("game", this.onSceneLaunched);
    },
    onSceneLaunched: function onSceneLaunched() {
        console.log('场景切换了,处理一些在场景切换的时候需要处理的信息');
        //移除场景

    },
    onDestroy: function onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchend, this);
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=NewScript.js.map
        