function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload !='function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function prepareGallery(){
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick = function(){
            return showPic(this);
        };
    }
}

function showPic(whichpic){
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    if(whichpic.getAttribute("title")) {
        var text = whichpic.getAttribute("title");
    }else{
        var text = " ";
    }
    var description = document.getElementById("description");
    if(description.firstChild.nodeType == 3){
        description.firstChild.nodeValue = text;
    }
    return false;
}

addLoadEvent(prepareGallery);
