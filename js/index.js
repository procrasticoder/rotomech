var strip=document.getElementById("new_strip");
var pixel=0;


var frameWidth=300;

var stripLeft=strip.style.left="-900px";
stripLeft=stripLeft.replace("px","");
    stripLeft=parseInt(stripLeft);
console.log(window.getComputedStyle(strip).left)
var i=0;
let id;
function start()
{
 id=setInterval(() => {
    func();
}, 1);
}
var end=1;
function func()
{   end=0;
    
    stripLeft=stripLeft+pixel;
      
    if(stripLeft%300===0)
    {
    clearInterval(id);
        end=1;
    }
    strip.style.left=stripLeft+"px";
    console.log(stripLeft);
    
}


function left()
{   
    pixel=-1;  
    if(stripLeft!=-1200)
    if(end) 
    start();
    
}

function right()
{
    pixel=1;
   
    if(stripLeft!=0)
    if(end)
      start();
    
}
function knowMore(){
    location.href='html/products.html'
}
function scrollUp(){
    var scrollPx=window.pageYOffset;
    console.log(scrollPx);
}
var cnt=3;
function slideshow(){
    if(cnt>=1){

        document.getElementsByClassName("images")[0].getElementsByTagName("img")[cnt].style.animation="going 2s linear forwards";
        document.getElementsByClassName("images")[0].getElementsByTagName("img")[cnt-1].style.animation="coming 2s linear forwards";
        cnt--;
        setTimeout(slideshow,4000);
    }
    else{
        document.getElementsByClassName("images")[0].getElementsByTagName("img")[0].style.animation="going 2s linear forwards";
        document.getElementsByClassName("images")[0].getElementsByTagName("img")[3].style.animation="coming 2s linear forwards";
        cnt=3
        setTimeout(slideshow,4000);
    }

}
slideshow()