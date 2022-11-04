class UserController{

    constructor(formId, tableId){
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);
        this.onSubmit()
        
        
    }

    
onSubmit(){
    
    let _this = this; // tratamento para usar this dentro da função 
    this.formEl.addEventListener("submit",function(event){
    
        event.preventDefault();
        
        _this.addLine(_this.getValues());
        
    }); 
}//fechando metodo OnSubmit


getValues(){
        
    let user = {};
       
    [...this.formEl.elements].forEach(function(campo,index){
        
        if(campo.name == "gender"){
            if(campo.checked) user[campo.name] = campo.value;
        }else{
            user[campo.name] = campo.value;
        }
    });
    
    return new User(user.name, user.gender, user.birth, user.country, user.email, user.password, user.photo, user.admin);
        
}   // fechando metodo getValues()

addLine(dataUser){

    console.log(dataUser);

    this.tableEl.innerHTML = `  
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
}


}