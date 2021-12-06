var footer=document.getElementById("Footer");
var currentPage=localStorage.getItem('current_page');
var index='../index.html';
var aboutUs='aboutus.html';
var products='products.html';
var contacts='contacts.html';

if(currentPage==='index')
{
    index='index.html';
    aboutUs='aboutus.html';
    products='products.html';
    contacts='contacts.html';
    
}
footer.innerHTML=
`
<div class="footer_one">
<div class="q_links">
    <h3>
        Quick Links
    </h3>
    <a href="${index}">Home</a>
    <a href="${aboutUs}">About Us</a>
    <a href="${products}">Products</a>
    <a href="${contacts}">Contact</a>
    <div class="footerline"></div>

</div>

<div class="q_links">
    <h3>
        Industrial Pumps
    </h3>
    <a href="">Centrifugal Process Pump</a>
    <a href="">Thermic Fluid Pumps</a>
    <a href="">Polypropylene Pump</a>
    <a href="">Filter Press Pumps</a>
    <a href="">Back Pull Out Process Pump</a>
    <a href="">Horizontal Chemical Pump</a>
    <div class="footerline"></div>

</div>
<div class="q_enquiry">
    <h3>
        Quick Enquiry
    </h3>
    <form name="google-sheet" method="post" id="form" class="form" action=${window.location.href}>
        <input id="name"type="text" name="Name" placeholder="Name" required>
        <input id="telephone" type="tel" name="Mobile" id="" placeholder="Phone" required size="10" minlength="10" maxlength="10">
        <input id="email"type="email" name="E-mail" placeholder="Email" required>
       
        <textarea name="Message" id="textarea" cols="30" rows="5" placeholder="Leave a message for us" required></textarea>
        <button type="submit" name="submit" class="btn btn-success">Submit</button>
    </form>
    
</div>
</div>
<div class="footer_two">
<div class="footer_content">
    All Rights Reserved. Rotomech Industries (Terms of Use)<br>
                    <a href="https://adjointindia.com/" style="color: inherit; cursor: pointer;">Powered by AdJoint India</a>

    <!-- Developed & Managed By Weblink.In Pvt. Ltd. -->
</div>
<div class="footer_logo">
    <!-- <img src="https://catalog.wlimg.com/main-common/ei.png" alt=""> -->
    <img style="cursor:pointer;cursor:hand" src="https://seal.starfieldtech.com/images/3/en/siteseal_sf_3_h_l_m.gif"  alt="SSL site seal - click to verify">
</div>
</div>
`;
