//>>1. 实现tab的效果
//>>1. 为li添加鼠标移入事件
var ul = $("companyTitle");
var lis = ul.getElementsByTagName("li");
for(var i=0;i<lis.length;++i){
    var li = lis[i]; //每个li
    li.setAttribute("index",i); //为每个li添加一个自定义属性, 保存索引
    li.onmouseover = selectTab; //为每个li设置事件处理函数
}

//>>2. 实现div显示和隐藏的效果


/*选中tab是要执行的函数*/
function  selectTab() {
    //>>1.让所有的li的颜色去掉
    var ul = $("companyTitle");
    var lis = ul.getElementsByTagName("li");
    for(var i=0;i<lis.length;++i){
        var li = lis[i];
        li.className = '';
    }
    //>>2.让鼠标放上去的li变色
    this.className  = "current";


    //>>3.让所有的div隐藏
    //>>3.1 找到id为companyContent下的三个div
    var companyContent = $("companyContent");
    var divs = companyContent.children;//不包含文本空格,换行
    //>>3.2 一个一个让他们隐藏
    for(var j=0;j<divs.length;++j){
        divs[j].style.display="none";
    }

    //>>4. 让其中的一个div显示出来.
    var index = this.getAttribute("index");//取出li上的索引
    divs[index].style.display = 'block'; //让li上索引对应的div显示出来

}