var div = document.getElementById('main');
var ol = document.createElement('ol');
function add(){
    var input = document.getElementById('inp');
    if(input.value != null && input.value != ""){
        var text = document.createTextNode(input.value);
        var li = document.createElement('li');
        var editBtn = document.createElement('button');
        editBtn.setAttribute('class','editBtn');
        editBtn.setAttribute('onclick','edit(this)');
        editBtn.appendChild(document.createTextNode('Edit'));
        var delBtn = document.createElement('button');
        delBtn.setAttribute('onclick','del(this)');
        delBtn.setAttribute('class','delBtn');
        delBtn.appendChild(document.createTextNode('Delete'));
        li.appendChild(text);
        li.appendChild(editBtn);
        li.appendChild(delBtn);
        ol.appendChild(li);
        div.appendChild(ol);
        input.value = "";
    }
    else{
        alert("First Enter Something");
    }
}
function delAll(){
    ol.remove();
    ol = document.createElement('ol');
}
function edit(a){
    var newText = prompt("Enter New Text",a.parentNode.firstChild.nodeValue);
    a.parentNode.firstChild.nodeValue = newText;
}
function del(b){
    b.parentNode.remove();
    
}