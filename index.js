/*setTimeout(()=>{
    alert ("hello word");  
},10000);*/
var name = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");

var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

fields.forEach(function(campo,index){
    
    if(campo.name == "gender"){
        
        user[campo.name] = campo.value;
    
    }
    else{

        user[campo.name] = campo.value;
    
    }
    
});
console.log("abc",user);
