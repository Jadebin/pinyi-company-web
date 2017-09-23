/**
 * Created by Administrator on 2017/8/20.
 */
//>>1. 为窗口添加滚动事件
window.onscroll = function () {
    //>>2. 得到滚动条距最上面的高度,如果超过了指定高度就显示出  id=returnTop的li
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop>=200){
        $("returnTop").style.display = '';
    }else{
        $("returnTop").style.display = 'none';
    }
};

/**
 * 动画三要素:
 *   1. 距离= Math.abs(结束位置- 开始位置)
 *   2. 时间(毫秒) = 用户指定
 *   3. 速度(毫秒)= 距离/时间
 */
//>>2. 在向上箭头上添加点击事件
$("returnTop").onclick = function () {
    //>>2.1 距离= Math.abs(结束位置- 开始位置)
    var start = document.body.scrollTop || document.documentElement.scrollTop;
    var end = 0;
    var distance = Math.abs(end-start);  //距离

    //>>2.2 设置动画播放时间
    var time = 2000; //两秒
    //>>2.2 设置一个速度
    var speed = distance/time*20;
    //>>2.3 不断的递减
    var timer =  window.setInterval(function(){
        start -= speed;
        if(start<=end){  //如果高度等于小于0. 将高度设置为0. 并且清除定时器
            start = end;
            window.clearInterval(timer);
        }
        //>>1.非IE
        document.body.scrollTop = start;
        //>>2. IE
        document.documentElement.scrollTop = start;
    },20);
};