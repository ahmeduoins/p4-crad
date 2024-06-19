// setup var
var productName=document.getElementById("product-name")
var productPrice=document.getElementById("product-price")
var productAge=document.getElementById("product-age")
var productDsc=document.getElementById("dsc")
var btnAdd=document.getElementById("add")
var products=[]
var tableBody=document.getElementById("tablebody")
var searchInput=document.querySelector("#searchinput")
var refrash=document.getElementsByClassName("form-control")
var upDateVar=0
var regesName=/^[A-Z][a-z]{2,8}$/
var regesPrice=/^[1-90]{3,5}$/
var regesCetegory=/^[a-z/s*]{2,20}$/
var regesDisc=/^[a-z]{10,100}$/
var bigAlert=document.getElementById("bigAlert")
var btnAlert=document.getElementById("btn-alert")
console.log(btnAlert)
// هل فيه داتا في الوكل ستورتج
if(JSON.parse(localStorage.getItem("all"))!=null)products=JSON.parse(localStorage.getItem("all"))


showData()//عشان يعرض الداتا اللي جت من اللوكل ستورتج







// call

btnAdd.onclick=function()
{
if(btnAdd.innerText=="update"){ //up date mode
 upNewDate()


}
else{//add data

    addData()

}

// checkData()

showData()
deletBack()
}



// function checkData(){
//     for(i = 0 ; i < refrash.length ; i++ ){
//         if(refrash[i].value=="" ){
    
    
//             window.alert(`plase input${i} enter`)
    
    
    
    
    
              
//         }
    
    
    
//     }   
      



// }

function addData()
{
   

   
   
 if(regesName.test(productName.value)&&regesPrice.test(productPrice.value)&&regesCetegory.test(productAge.value)&&regesDisc.test(productDsc.value)){
var product={
    name:productName.value,
    price:productPrice.value,
    age:productAge.value,
    dsc:productDsc.value


 }
products.push(product)

localStorage.setItem("all",JSON.stringify(products))
}
else{
    bigAlert.classList.add("d-block")
bigAlert.classList.remove("d-none")

}

}
// بمسك الاراي ولف عليه وطبع الاوبجكت 
function showData()
{
    var cartona=""
    for (let i = 0; i< products.length;i++) {
      cartona+=`<tr>          
                    <td>
                    ${products[i].name}
                    </td>
                    <td>
                    ${products[i].price}
                    </td>
                    <td>
                    ${products[i].age}
                    </td>
      
                    <td>
                    ${products[i].dsc}
                    </td>
                    <td>
                        <button class=" btn btn-warning" onclick="upDate(${i})">
                        updata
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-danger" onclick="deletproduct(${i})">
                        delet
                        </button>
                    </td>
                </tr>`
    }
    tableBody.innerHTML=cartona



}
function deletproduct(index)
{
products.splice(index,1)
showData()

}
function deletBack(){
for(i=0;i<refrash.length;i++){
refrash[i].value=""

}
}

searchInput.onkeyup=function(){
    var cartona=""
    for (let i = 0; i< products.length;i++) {
    //   املي الكرتونه لو الفاليو بتاع السرش بيساوي النيم اللي جوه الاراي
      if(products[i].name.toUpperCase().includes(searchInput.value.toUpperCase())){
        cartona+=`<tr>          
                    <td>
                    ${products[i].name}
                    </td>
                    <td>
                    ${products[i].price}
                    </td>
                    <td>
                    ${products[i].age}
                    </td>
      
                    <td>
                    ${products[i].dsc}
                    </td>
                    <td>
                        <button class=" btn btn-warning" onclick="upDate(${i})">
                        updata
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-danger" onclick="deletproduct(${i})">
                        delet
                        </button>
                    </td>
                </tr>`
    }
    tableBody.innerHTML=cartona
    }

     
}
function upDate(index){
upDateVar=index
productName.value=products[index].name
productPrice.value=products[index].price
productAge.value=products[index].age
productDsc.value=products[index].dsc
btnAdd.innerText="update"

}
function  upNewDate(){  

    var product={
        name:productName.value,
        price:productPrice.value,
        age:productAge.value,
        dsc:productDsc.value
    
    
    }

products[upDateVar]=product

localStorage.setItem("all",JSON.stringify(products))
//اول متزود واول متعدل احفظ الداتا
btnAdd.innerText="add"


}



var alert=document.getElementsByClassName("alert")
productName.onkeyup=function(){


if(regesName.test(productName.value))

{btnAdd.removeAttribute(`disabled`)

productName.classList.add("is-valid")
productName.classList.remove("is-invalid")
alert[0].classList.add("d-none")
}

else{btnAdd.disabled="true"
productName.classList.add("is-invalid")
productName.classList.remove("is-valid")
alert[0].classList.remove("d-none")
}




}

productPrice.onkeyup=function(){


    if(regesPrice.test(productPrice.value))
    
    {btnAdd.removeAttribute(`disabled`)
    
    productPrice.classList.add("is-valid")
    productPrice.classList.remove("is-invalid")
    alert[1].classList.add("d-none")
    }
    
    else{btnAdd.disabled="true"
    productPrice.classList.add("is-invalid")
    productPrice.classList.remove("is-valid")
    alert[1].classList.remove("d-none")
    }
    
    
    
    
}


productAge.onkeyup=function(){


        if(regesCetegory.test(productAge.value))
        
        {btnAdd.removeAttribute(`disabled`)
        
        productAge.classList.add("is-valid")
        productAge.classList.remove("is-invalid")
        alert[2].classList.add("d-none")
        }
        
        else{btnAdd.disabled="true"
        productAge.classList.add("is-invalid")
        productAge.classList.remove("is-valid")
        alert[2].classList.remove("d-none")
        }
        
        
        
        
}










btnAlert.onclick=function(){
    bigAlert.classList.remove("d-block")
    bigAlert.classList.add("d-none")

console.log(1)
}


console.log("klll">5)













var a=0
var b="0"
if(a,b){


console.log(1)

}
else{

    console.log(0)



}


// console.log(undefined*2)


























var arr=[1,2.3,4]


console.log(arr.concat(5))
console.log(arr)



// let nN=["fdf","fd","fdsf","dvdsv"]

// for(let i=0;i<nN.length;i++){
// console.log(nN[i])

// }

console.log(undefined+10)


// اي حاجه عمليه حسابيه بنان او اند فليند بتطلع نان

// var modilIpone=window.prompt("enter name")
// console.log(modilIpone)

// console.log("10"+50+40)
// console.log(typeof NaN)







// console.log("md">"zhmed"&&"mostafa">"foaz")




// let sc1=4
// let sc2=3
// var res=1
// for(i=0;i<sc2;i++){

// res*=sc1

// }

// console.log(res)