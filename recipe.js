var request = new XMLHttpRequest();
   request.open("GET", "recipes.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.responseText);
   console.log(my_JSON_object);
   alert (my_JSON_object[0].name + " by " + my_JSON_object[0].author);

var count = Object.keys(my_JSON_object).length;
var container= document.getElementById('randombox'); // reference to containing elm
for(var i=0; i<count; i++)
{
    var obj= my_JSON_object[i];
    var button = "<input type='button' value="+obj.author+"></input><br>"
    container.innerHTML+=button;
}

function duplicate()
{
    var clone = container.cloneNode(true);
    clone.id = "duplicate" + ++i;
    container.parentNode.appendChild;
}