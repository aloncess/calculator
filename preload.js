var operation = "+"

function func(new_operation){
    window.operation = new_operation;
    console.log(window.operation);
}


function httpGet(theUrl='http://127.0.0.1:5000/')
{
    num_1 = document.getElementById('num1').value;
    num_2 = document.getElementById('num2').value;
    theUrl += num_1 + operation + num_2;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    result = xmlHttp.responseText;
    return result
}



window.addEventListener('DOMContentLoaded', () => {


})
