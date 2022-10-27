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

/*fields.forEach(function(campo,index){
    
    if(campo.name == "gender"){
        
        user[campo.name] = campo.value;
    
    }
    else{

        user[campo.name] = campo.value;
    
    }
    
});*/
/* *********************  para percorrer e adicionar evento em todos botoes da pagina
 document.querySelectorAll("button").forEach(function(){
    this.addEventListener("click", function(){
        console.log("funcionou");
    });
 });
 */
function addLine(dataUser){
    var tr = document.createElement("tr");

    tr.innerHTML = `  
        <tr>
            <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
            <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>`

    document.getElementById("table-Users").appendChild(tr);
    }

 document.getElementById("form-user-create").addEventListener("submit",function(event){
    
    event.preventDefault(); //parar a rotina padrão  "prevenir o padrão"
    
    fields.forEach(function(campo,index){
    
        if(campo.name == "gender"){
            if(campo.checked) user[campo.name] = campo.value;
                    
        }
        else{
    
            user[campo.name] = campo.value;
        
        }
                
    });
    addLine(user); 
 });
