/**
 * debug的功能
 * @param msg
 */
function d(msg){
    console.debug(msg);
}


/**
 * dir的功能
 * @param msg
 */
function dir(msg){
    console.dir(msg);
}

/**
 * log的功能
 * @param msg
 */
function  log(msg){
    console.log(msg);
}

/**
 * 得到一个指定区间的整数. 自定义的函数,而不是Javascript自带的函数.
 * @param min   最小值
 * @param max   最大值
 * @returns {number}
 */
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * 根据id得到一个标签对象
 * @param id
 * @returns {Element}
 */
function $(id){
    return document.getElementById(id);
}

/**
 * 得到表单元素中的值
 * @param id
 * @returns {string}
 */
function $v(id){
    return $(id).value;
}

/**
 * 为obj对象添加type类型的事件,事件处理函数为fn
 * @param obj
 * @param type
 * @param fn
 */
function  addEvent(obj,type,fn){
    if(obj.addEventListener){  //非IE
        obj.addEventListener(type,fn);
    }else{  //IE
        obj.attachEvent("on"+type,fn);
    }
}
/**
 * 删除obj对象上type类型对应的事件处理函数fn
 * @param obj
 * @param type
 * @param fn
 */
function  removeEvent(obj,type,fn){
    if(obj.removeEventListener){  //非IE
        obj.removeEventListener(type,fn);
    }else{  //IE
        obj.detachEvent("on"+type,fn);
    }
}



/**
 * 阻止事件传播
 * @param event
 */
function stopEvent(event) {
    event = event || window.event;
    if (event.stopPropagation) {//非IE
        event.stopPropagation();
    } else {
        event.cancelBubble = true;  //IE
    }
}

/**
 * 阻止浏览器的默认行为.
 *     适用于所有的注册事件方式
 * @param event
 */
function stopDefault(event){
    event = event || window.event;
    if(event.preventDefault){  //非IE
        event.preventDefault();
    }else{
        event.returnValue = false;  //IE
    }
}


/**
 * 获取指定标签对象上的真正被应用的样式值
 * @param element   标签对象
 * @param proertyName  样式属性的名字
 */
function getCurrentStyleProperty(element,propertyName){   //attribute
    var styleObject;
    if(window.getComputedStyle){  //非IE
        styleObject = window.getComputedStyle(element,null);
    }else{ //IE
        styleObject = element.currentStyle;
    }
    return styleObject[propertyName];
}


/**
 * @param  end  结束为止
 * @param  time  动画播放时间
 * @param  element  动画标签元素对象
 * @param  type  动画类型    取值: left  right  width  height  top  bottom
 */
function animationFn(end,time,element,type) {
    /*
     动画三要素:
     距离 = Math.abs(结束位置-开始位置);
     时间 = 自己定义
     速度 = 距离/时间*多少时间移动一次
     */
    //>>1.根据结束和开始位置计算距离
    var start = parseInt(getCurrentStyleProperty(element,type));
    var distance = Math.abs(end-start);
    //>>2.确定时间
    //由用户传递过来
    //>>3. 速度
    var speed = distance/time*50;

    //>>4.定时执行函数进行周期性执行
    var timer = window.setInterval(function(){
        start+=speed;
        if(start>=end){
            start = end;
            window.clearInterval(timer);
        }
        element.style[type] = start+"px";
    },50);

}