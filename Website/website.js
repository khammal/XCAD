// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var z = 0;

// Adding, subtracting, and displaying number of XCAN for the Converter page
document.getElementById("demo").innerHTML =
z + " XCAN ";  

function add()  {
  z = z + 1;  
  document.getElementById("demo").innerHTML =
  z + " XCAN ";  
}

function sub() {
  if (z > 0) {   
  var subtract;
  walleto = document.forms["sending"]["uname"].value;
  subtract = document.forms["sending"]["amount"].value;
  z = z - subtract;	 
  alert("you have sent " + subtract + " XCAN" + " to " + walleto)
  modal.style.display = "none";
  document.getElementById("demo").innerHTML =
  z + " XCAN ";  
  }
  else {
  alert("you don't have sufficient funds!"); 
  }
 }

//  Change the look of a tab in the navigation bar depending on if it's opened
function openTab(tabName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(tabName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

var myIndex = 0;
carousel();

// Create the carousel in the Home page
function carousel() {
  var i;
  var x = document.getElementsByClassName("myImages");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

// Get the button
var mybutton = document.getElementById("btt");

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


// Create an accordion for the Home page
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var crrncy = {'ETH': {'XCAN': 2021.23, 'USD': 1566.62, 'BTC': 0.07034800}, 'USD': {'XCAN': 1.29, 'ETH': 0.000639113, 'BTC':0.0000446754}, 'BTC': {'XCAN':29217.96, 'ETH': 14.205971, 'USD': 22671.63 }}
var btn = document.querySelector('.calculate-btn');
var baseCurrencyInput = document.getElementById('currency-1');
var secondCurrencyInput = document.getElementById('currency-2');
var amountInput = document.getElementById('amount');
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-currency');
var toShowSecond = document.querySelector('.second-currency');
var toShowResult = document.querySelector('.final-result');

// Converting between two currencies
function convertCurrency(event) {
  event.preventDefault();
  var amount = amountInput.value;
  var from = baseCurrencyInput.value;
  var to = secondCurrencyInput.value;
  var result = 0;

  try{
    if (from == to){
      result = amount;
    } else {
     result = amount * crrncy[from][to];
  }
  }
  catch(err) {
    result = amount * (1 / crrncy[to][from]);
  }

  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + ' = ';
  toShowSecond.textContent = to;
  toShowResult.textContent = result; 
}

btn.addEventListener('click', convertCurrency);

// Generate a random string for the wallet
function makeid() {
  var text = "0x";
  var possible = "ABCDEFabcdef0123456789";

    for (var i = 0; i < 29; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

return text;
}

// Display the wallet
function make() { 
document.getElementById("generates").innerHTML = makeid();
}

// Load login page
function login(){
  window.location.assign("XCA.html");
}
