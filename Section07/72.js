// Elementos y nodos padres

//ParentNode

var itemList = document.querySelector('#items');
console.log(itemList.parentNode);

var maint = itemList.parentNode;
maint.style.backgroundColor = '#f4f4f4';
console.log(main.parentNode.parentNode);

//ParentElement
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);

var maint = itemList.parentElement;
maint.style.backgroundColor = '#f4f4f4';
console.log(main.parentElement.parentElement);