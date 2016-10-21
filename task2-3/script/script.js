function $(id){
    return typeof id==="string"?document.getElementById(id):id;
}
window.onload = function tab(){
    var index = 0;
    var timer = null;
    var titles = $("tit").getElementsByTagName("li");
    var divs = $("content").getElementsByTagName("div");

    for(var i=0;i<titles.length;i++){        //在自动切换的同时手动切换
        titles[i].id = i;
        titles[i].onmouseover = function () {
            clearInterval(timer);        //鼠标滑过清除计时器
            changeOption(this.id);       //调用changeOption
        };
        titles[i].onmouseout = function(){          //鼠标离开,重新开始自动播放
            timer = setInterval(autoPlay,2000);     //重复计时器
        };
    }

    if(timer){
        clearInterval(timer);      //为了防止滑动过快多次调用,先把原先定时器清楚
        timer = null;
    }
    timer = setInterval(autoPlay,2000);

    function autoPlay(){
        index++;
        if(index >= titles.length){
            index = 0;
        }
        changeOption(index);          //调用changeOption
    }

    function changeOption(curIndex){          //定时器内和鼠标滑过部分有代码重合,可以把它封装在一个函数内;
        for (var j = 0; j < titles.length; j++) {
            titles[j].className = "";
            divs[j].style.display = "none";
        }
        titles[curIndex].className = "select";
        divs[curIndex].style.display = "block";
        index = curIndex;           //为了保证鼠标离开后自动播放下一个
    }
};

