var total=0;
var newtotal=0;

function priceFunction() {
    var x = document.getElementById("SelectOptions").value;
	var y = x * 100;
	total+=y;
    document.getElementById("result").innerHTML = y;
	}
	
	function priceFunction2() {
    var x = document.getElementById("SelectOptions2").value;
	var y = x * 150;
	total+=y;
    document.getElementById("result2").innerHTML = y;
	}
	
	function priceFunction3() {
    var x = document.getElementById("SelectOptions3").value;
	var y = x * 200;
	total+=y;
    document.getElementById("result3").innerHTML = y;
	}
	
	function priceFunction4() {
    var x = document.getElementById("SelectOptions4").value;
	var y = x * 250;
	total+=y;
    document.getElementById("result4").innerHTML = y;
	}
	
	function priceFunction5() {
    var x = document.getElementById("SelectOptions5").value;
	var y = x * 300;
	total+=y;
    document.getElementById("result5").innerHTML = y;
	}
	
	function priceFunction6() {
    var x = document.getElementById("SelectOptions6").value;
	var y = x * 350;
	total+=y;
    document.getElementById("result6").innerHTML = y;
	}
	
	function priceFunction7() {
    var x = document.getElementById("SelectOptions7").value;
	var y = x * 400;
	total+=y;
    document.getElementById("result7").innerHTML = y;
	}

	function priceFunction8() {
    var x = document.getElementById("SelectOptions8").value;
	var y = x * 450;
	total+=y;
    document.getElementById("result8").innerHTML = y;
	}
	
	function priceFunction9() {
    var x = document.getElementById("SelectOptions9").value;
	var y = x * 500;
	total+=y;
    document.getElementById("result9").innerHTML = y;
	}
	
	function priceFunction10() {
    var x = document.getElementById("SelectOptions10").value;
	var y = x * 550;
	total+=y;
    document.getElementById("result10").innerHTML = y;
	}

	function Total(){
      document.getElementById("total").innerHTML = (total);
	  if (total>500){
		  var tax = total * 0.15;
		  total+=tax;
	  }
	  else{
		  total;
	  }
	  document.getElementById("total").innerHTML = (total);
	  
	  if (total>500){
		  var discount = total * 0.15;
		  newtotal = total - discount;
		  document.getElementById("total").innerHTML = (newtotal);
	  }
	  else{
		  total;
		  document.getElementById("total").innerHTML = (total);
	  }
	 
			  confirm("Do you accept the total cost of payment?"); 
             
			  alert("Thank you, we will get back to you as soon as possible"); 

	}

function validateForm() {
    var a = document.forms["subscribeForm"]["fname"].value;
    if (a == "") 
	{
        alert("Please, enter your first name");
		return false;
	}
    var b = document.forms["subscribeForm"]["lname"].value;
    if (b == "") 
	{
        alert("Please enter your last name");
		return false;	
	}
    var c = document.forms["subscribeForm"]["email"].value;
    if (c == "") 
	{
        alert("Please, enter your email address");
		return false;
	}
    var d = document.forms["subscribeForm"]["comment"].value;
    if (d == "") 
	{
        alert("Please, enter your Comment");
		return false;	
	}
	else{
		alert("Thank you for your response, we will get back to you as soon as possible");
	}
	}
	
	function validateForm1() {
    var a = document.forms["subscribeForm"]["fname"].value;
    if (a == "") 
	{
        alert("Please, enter your first name");
		return false;
	}
    var b = document.forms["subscribeForm"]["lname"].value;
    if (b == "") 
	{
        alert("Please enter your last name");
		return false;	
	}
    var c = document.forms["subscribeForm"]["email"].value;
    if (c == "") 
	{
        alert("Please, enter your email address");
		return false;
	}
	else{
		alert("Thank you for your response, Please go to the purchase page and pay your fees, Then we will inform about your exam through your email, have a nice day!");
	}
	}
	