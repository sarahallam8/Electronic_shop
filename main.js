

var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');  
var productCatagoryInput = document.getElementById('productCatagoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');

var productContainer;

 if(localStorage.getItem("myProduct")!=null){

   productContainer = JSON.parse(localStorage.getItem("myProduct"));
    displayProduct(productContainer); 
 }
 else{
    productContainer = [];
  }

function addProduct() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    catagory: productCatagoryInput.value,
    desc: productDescriptionInput.value 
  }
  productContainer.push(product);
  console.log(productContainer)
  localStorage.setItem("myProduct",JSON.stringify(productContainer));
   
   clearProduct();
   displayProduct(productContainer);
   
}

function clearProduct(){
   productNameInput.value = "";
   productPriceInput.value = "";
   productCatagoryInput.value = "";
   productDescriptionInput.value = ""

}

function displayProduct(productList){
   var cartoona =``;
   for(var i=0;i<productList.length; i++)
   {
      cartoona+=`    
       <tr>
      <td>${i+1}</td>
      <td>${productList[i].name}</td>
      <td>${productList[i].price}</td>
      <td>${productList[i].catagory}</td>
      <td>${productList[i].desc}</td>
      <td><button onclick="updateProduct(${i})"class="btn btn-sm btn-outline-warning">update</button></td>
      <td><button onclick="deleteProduct(${i})"class="btn btn-sm btn-outline-danger">delete</button></td>
   </tr>`
   }
   document.getElementById("tableBody").innerHTML=cartoona;
   
}
function searchProduct(searchTerm){

   var searchList = [];
   for(var i=0; i<productContainer.length; i++){

      if(productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true)
      {
        searchList.push(productContainer[i])
      }
   }
   displayProduct(searchList);
}

function deleteProduct(deletItem){
    
    productContainer.splice(deletItem , 1);
    localStorage.setItem("myProduct",JSON.stringify(productContainer));
    displayProduct(productContainer)

}
function updateProduct(updateItem){

   productNameInput.value = productContainer[updateItem].name;
   productPriceInput.value = productContainer[updateItem].price;
   productCatagoryInput.value = productContainer[updateItem].catagory;
   productDescriptionInput.value = productContainer[updateItem].desc;


}
