//inputs
var inputname = document.getElementById("namee");
var inputemail = document.getElementById("emaill");
var inputmessage = document.getElementById("messagee");
var submitbutton = document.getElementById("sbtn");
//labels
var labelname = document.getElementById("labelname");
var labelemail = document.getElementById("labelemail");
var labelmessage = document.getElementById("labelmessage");

//namevalidation
function namevalidation()
{
    if(inputname.value.length == 0)
    {
          console.log(inputname.value);
        labelname.style.display = "block";
    }else
        labelname.style.display = "none";
}
inputname.oninput = namevalidation;





//emailvalidation
function emailvalidation()
{
    if(!inputemail.value.match("@") && !inputemail.value.match(".com"))
    {
        labelemail.style.display = "block";

    }
    else if(inputemail.value.match("@") && inputemail.value.match(".com"))
    {
        labelemail.style.display = "none";
    }

}
inputemail.addEventListener("input",emailvalidation);

//messagevalidation
function messagevalidation()
{
    if(inputmessage.value == "")
    {
        labelmessage.style.display = "block";
    }else
        labelmessage.style.display = "none";

}
inputmessage.addEventListener("input",messagevalidation);


function submitvalidation()
{
    if(inputname.value == "")
    {
        labelname.style.display = "block";
        return;
    }else
    {
        labelname.style.display = "none";
    }

    if(!inputemail.value.match("@") && !inputemail.value.match(".com"))
    {
        labelemail.style.display = "block";
        return;
    }
    else if(inputemail.value.match("@") && inputemail.value.match(".com"))
    {
        labelemail.style.display = "none";
        return;
    }  
}

submitbutton.addEventListener("click",submitvalidation);
