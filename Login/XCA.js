var count=3;

function validateForm()  {

    var username;
    var password;

    var storedUname = "snoopdogg@gmail.com";
    var storedPassword = "420";

    username = document.forms["login"]["uname"].value;
    password = document.forms["login"]["pwd"].value;

for (var i = 0; i <3; i++)  {
        if (username == storedUname && password == storedPassword && count >= 1) {
        alert ("Welcome " + username);
        window.location.assign("../Website/website.html")
	break;
    } 
        else if (count >= 1)  {
		count = count - 1;
	        alert("you only have " + count + " tries left");
		document.login.uname.select();
	   	document.login.uname.focus();
	   	document.login.pwd.select();
	  	document.login.pwd.focus();  	
		break;
    }
        else if (count >= 0) {
	alert("you no longer have access");	
	break;
    }
  } 
}
