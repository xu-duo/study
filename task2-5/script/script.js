window.onload = function(){
    var dataInt = {"data":[{'src':'1.jpg','text':'电视剧《青云志》碧瑶剧照'},
        {'src':'2.jpg','text':'电视剧《青云志》碧瑶剧照'},
        {'src':'7.jpg','text':'电视剧《楚乔传》楚乔剧照'},
        {'src':'17.jpg','text':'写真'},
        {'src':'8.jpg','text':'电视剧《花千骨》花千骨剧照'},
        {'src':'20.jpg','text':'电视剧《杉杉来了》胭脂剧照'},
        {'src':'15.jpg','text':'电视剧《杉杉来了》杉杉剧照'}]};
    window.onscroll = function(){
        if(checkScrollSlide){
            var parent = document.getElementById('container');
            for(var i= 0;i<dataInt.data.length;i++){
                var opic = document.createElement('div');
                opic.className = 'pic';
                parent.appendChild(opic);
                var oa = document.createElement('a');
                oa.href = 'image/'+ dataInt.data[i].src;
                opic.appendChild(oa);
                var oimg = document.createElement('img');
                oimg.src = 'image/'+dataInt.data[i].src;
                oa.appendChild(oimg);
                var op = document.createElement('p');
                op.innerHTML = dataInt.data[i].text;
                opic.appendChild(op);
            }
        }
    }
};
function getByClass(parent,pic){
    var boxArr = new Array();
    var ele = parent.getElementsByTagName('*');
    for(var i=0;i<ele.length;i++){
        if(ele[i].className == pic){
            boxArr.push(ele[i]);
        }
    }
    return boxArr;
}

function checkScrollSlide(){
    var parent = document.getElementById('container');
    var box = getByClass(parent,'pic');
    var lastBoxH = box[box.length-1].offsetTop + Math.floor((box[box.length-1]).offsetHeight/2);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.clientHeight || document.documentElement.clientHeight;
    return lastBoxH < (scrollTop + height) ? true:false;

}
