
// ------------------------------------slider----------------------------
var arr=[];
var sliderimages = document.getElementById("imagee");
arr.push("https://images.pexels.com/photos/5872348/pexels-photo-5872348.jpeg?auto=compress&cs=tinysrgb&w=600");
arr.push("https://images.pexels.com/photos/5947554/pexels-photo-5947554.jpeg?auto=compress&cs=tinysrgb&w=600");
arr.push("https://images.pexels.com/photos/5947552/pexels-photo-5947552.jpeg?auto=compress&cs=tinysrgb&w=600");
arr.push("https://images.pexels.com/photos/5624977/pexels-photo-5624977.jpeg?auto=compress&cs=tinysrgb&w=600");
arr.push("https://images.pexels.com/photos/5947542/pexels-photo-5947542.jpeg?auto=compress&cs=tinysrgb&w=600");
arr.push("https://media.istockphoto.com/id/1337275668/photo/sale-concept-percent-sign-price-discount-on-speech-bubble.jpg?b=1&s=612x612&w=0&k=20&c=ePl6h5l55EuAJ6D5g86i7pFUPfpw80arWc0lpoa53wo=");
arr.push("https://images.pexels.com/photos/5869610/pexels-photo-5869610.jpeg?auto=compress&cs=tinysrgb&w=600");
arr.push("https://images.pexels.com/photos/5869620/pexels-photo-5869620.jpeg?auto=compress&cs=tinysrgb&w=600");

var index = 0;
function showleft()
{
       index++;
       if(index == arr.length)
       {
            index = 0;
       }
       sliderimages.setAttribute("src", arr[index % arr.length]); 
}
function showright()
{
       index--;
       if(index < 0)
       {
            index = arr.length-1;
       }
       sliderimages.setAttribute("src", arr[index % arr.length]);
}




// swapping between the categories buttons.

// div of each category
var phonediv = document.getElementById("phonescardshow");
var electronicsdiv = document.getElementById("electronicscardshow");
var toysgamesdiv = document.getElementById("toysgamescardshow");
var grocerydiv = document.getElementById("grocerycardshow");
var fashiondiv = document.getElementById("fashioncardshow");

// labels of each category
var phonelabel = document.getElementById("mobilelabel");
var Electronicslabel = document.getElementById("electronicslabel");
var toysgameslabel = document.getElementById("toysgameslabel");
var grocerylabel = document.getElementById("grocerylabel");
var fashionlabel = document.getElementById("fashionlabel");

// buttons of each category
var phonesbtn = document.getElementById("phonesbtn");
var electronicsbtn = document.getElementById("electronicsbtn");
var fashionbtn = document.getElementById("fashionbtn");
var grocerybtn = document.getElementById("grocerybtn");
var toysgamesbtn = document.getElementById("toysgamesbtn");

phonesbtn.addEventListener("click",function(){
     phonelabel.style.display = "block";
     phonediv.style.display = "flex";
     // --------------------------------
     Electronicslabel.style.display = "none";
     electronicsdiv.style.display = "none";
     //----------------------------------
     fashionlabel.style.display = "none";
     fashiondiv.style.display = "none";
     //----------------------------------
     grocerydiv.style.display = "none";
     grocerylabel.style.display = "none";
     //---------------------------------
     toysgamesdiv.style.display = "none";
     toysgameslabel.style.display = "none";
     
})

electronicsbtn.addEventListener("click",function(){
     Electronicslabel.style.display = "block";
     electronicsdiv.style.display = "flex";
     //----------------------------------
     phonelabel.style.display = "none";
     phonediv.style.display = "none";
     //----------------------------------
     fashionlabel.style.display = "none";
     fashiondiv.style.display = "none";
     //----------------------------------
     grocerydiv.style.display = "none";
     grocerylabel.style.display = "none";
     //---------------------------------
     toysgamesdiv.style.display = "none";
     toysgameslabel.style.display = "none";
})

fashionbtn.addEventListener("click",function(){
     fashionlabel.style.display = "block";
     fashiondiv.style.display = "flex";
     //---------------------------------
     Electronicslabel.style.display = "none";
     electronicsdiv.style.display = "none";
     //-------------------------------------
     phonelabel.style.display = "none";
     phonediv.style.display = "none";
     //----------------------------------
     grocerydiv.style.display = "none";
     grocerylabel.style.display = "none";
     //---------------------------------
     toysgamesdiv.style.display = "none";
     toysgameslabel.style.display = "none";
})

grocerybtn.addEventListener("click",function(){
     grocerydiv.style.display = "flex";
     grocerylabel.style.display = "block";
     //---------------------------------
     phonelabel.style.display = "none";
     phonediv.style.display = "none";
     //---------------------------------
     Electronicslabel.style.display = "none";
     electronicsdiv.style.display = "none";
     //---------------------------------
     fashionlabel.style.display = "none";
     fashiondiv.style.display = "none";
     //---------------------------------
     toysgamesdiv.style.display = "none";
     toysgameslabel.style.display = "none";
})
toysgamesbtn.addEventListener("click",function(){
     toysgamesdiv.style.display = "flex";
     toysgameslabel.style.display = "block";
     //-------------------------------------
     grocerydiv.style.display = "none";
     grocerylabel.style.display = "none";
     //---------------------------------
     phonelabel.style.display = "none";
     phonediv.style.display = "none";
     //---------------------------------
     Electronicslabel.style.display = "none";
     electronicsdiv.style.display = "none";
     //---------------------------------
     fashionlabel.style.display = "none";
     fashiondiv.style.display = "none";
     //---------------------------------
})

//--------------------shopping cart modal-------------------------

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//-----------------------------on click top the top button-----------------------

// Get the button
let mybutton = document.getElementById("topbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// ------------------------------on click add to cart------------------------
var arrcartnums=[];
var quntatiy=[];
var productprice = [];
function addcart(cardparent){
     if(arrcartnums.indexOf(cardparent) == -1)
     {
          var card = document.getElementById(cardparent);
          var parent = document.getElementById("cartcontent");
          arrcartnums.push(cardparent);
          quntatiy.push(1);
          var c =card.cloneNode(true);
          parent.append(c);
          c.childNodes[3].remove();
          c.childNodes[8].remove();
          //console.log(c.childNodes[6].innerHTML);
          productprice.push(c.childNodes[6].innerHTML);
          var indexofproduct = arrcartnums.indexOf(cardparent);
          var p = document.createElement("p");
          p.setAttribute("id",`pquantity:${indexofproduct}`);
          p.innerHTML = `quantatiy:${1}`;
          console.log(p);
          c.append(p);
          //---------------------total price---------------------

     }
     else{
          var indexofproduct = arrcartnums.indexOf(cardparent);
          var p = document.getElementById(`pquantity:${indexofproduct}`);
          console.log(p);
          quntatiy[indexofproduct] += 1; 
          p.innerHTML = `quantatiy:${quntatiy[indexofproduct]}`;
     }
     var totalpricee = document.getElementById("totalprice");
     totalpricee.innerHTML=`Total Price: EGP ${totalprice()}`;
}
function totalprice()
{
     var totalprice = 0;
     for(var i = 0;i<productprice.length;i++){
          
          var thousands = parseInt(productprice[i].split(" ")[1].split(",")[0]);
          thousands *= 1000;
          var hundreds = parseInt(productprice[i].split(" ")[1].split(",")[1]);
          var proprice = thousands+hundreds;
          var productquant = parseInt(quntatiy[i]);
          proprice = proprice*productquant;
          totalprice += proprice;
     }
     return totalprice;     
}
// -----------contact us form validation----------------------
