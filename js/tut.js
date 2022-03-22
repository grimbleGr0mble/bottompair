
//Creates a pop up that displays text. goes away when you hit okay.
//alert("Hello World!");

document.getElementById("button").onclick = function(){  //when you click the element called "button", run the function...
    document.getElementById("confirm").innerHTML = "Orderplaced. CHeck emaiul!"; //change the paragraph called "confirm" to something else
    document.getElementById("button").style.display = "none"; //change the button display to no button at all
}


//var [BLANK] is how you create a variable
var username = prompt(); //prompt is like input() from python
alert(username);

console.log(username);

/*
This is a multiline comment
ya heard
*/