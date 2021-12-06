var navbar=document.getElementById("Navbar");
var navbarMobile=document.getElementById("Navbar-mobile");
var currentPage=localStorage.getItem("current_page");
links=['products.html#cpp','products.html#tfp','products.html#pp','products.html#fpp','products.html#bpp','products.html#hcp','products.html#ppssp','products.html#hncp','products.html#hpmp','products.html#rgp'];
var prefix='';
if(currentPage==='index'){
prefix='';
home='index.html'
}
else{
    home='index.html'
}

navbar.innerHTML=
`
<div id="nav_logo">
<a href="${home}"><img src="https://catalog.wlimg.com/1/890980/other-images/12569-comp-image.png" alt=""></a>
</div>
<div id="nav_links">
<div onclick="navigationLink(this.id)" id="index" >Home</div>
<div onclick="navigationLink(this.id)"id="aboutus" >About Us</div>
<div onclick="navigationLink(this.id)"id="products" >Products
    <div class="products_dropdown"> 
        <a href="${links[0]}">Centrifugal Process Pump</a>
        <a href="${links[1]}">Thermic Fluid Pumps</a>
        <a href="${links[2]}">Polypropylene Pump</a>
        <a href="${links[3]}">Filter Press Pumps</a>
        <a href="${links[4]}">Back Pull Out Process Pump</a>
        <a href="${links[5]}">Horizontal Chemical Pump</a>
        <a href="${links[6]}">Process Pump & Stainless Steel Pump</a>
        <a href="${links[7]}">Horizontal Non - Clog Pump</a>
        <a href="${links[8]}">High Pressure Multistage Pumps</a>
        <a href="${links[9]}">Rotary Gear Pumps</a>
    </div>
</div>
<div onclick="navigationLink(this.id)"id="contacts">Contacts Us</div>    
</div>
<div id="nav_search">
<div id="search_out">
    <input id="search_key" type="text" placeholder="Search">
    <i id="search_icon"class="fa fa-search"></i>
</div>
</div>

`;

navbarMobile.innerHTML=`
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: rgb(255, 255, 255);">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="https://catalog.wlimg.com/1/890980/other-images/12569-comp-image.png" alt="" width="200" height="24">
                  </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="aboutus.html">About Us</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Products
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a href="${links[0]}">Centrifugal Process Pump</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a href="${links[1]}">Thermic Fluid Pumps</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a href="${links[2]}">Polypropylene Pump</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a href="${links[3]}">Filter Press Pumps</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a href="${links[4]}">Back Pull Out Process Pump</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a href="${links[5]}">Horizontal Chemical Pump</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a href="${links[6]}">Process Pump & Stainless Steel Pump</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a href="${links[7]}">Horizontal Non - Clog Pump</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a href="${links[8]}">High Pressure Multistage Pumps</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a href="${links[9]}">Rotary Gear Pumps</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contacts.html">Contact Us</a>
                  </li>
                </ul>
                
              </div>
            </div>
        </nav>
`

// console.log(address);

function navigationLink(destination)
{   
    
    link=document.createElement('a');
    link.href=''+destination+'.html';
    link.click();
}

// click button to init search
var searchIcon=document.getElementById("search_icon");
searchIcon.addEventListener('click',()=>
{   
    searchKey=document.getElementById("search_key");
    if(searchKey.value!=="")
    {
    searchKey.value="";
    searchDown();
    }
});

// hit enter to init search
var searchKey=document.getElementById("search_key");
searchKey.addEventListener("keydown",(e)=>{
    
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter' & searchKey.value!==""){
        searchKey.value="";
        searchDown();
      return false;
    }
})

// init search
function searchDown()
{
    alert("Search Init");
}