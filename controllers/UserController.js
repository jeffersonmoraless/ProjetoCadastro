class UserController{

    constructor(formId, tableId){
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);
        this.onSubmit()
        
        
    }

    
onSubmit(){
    
    //let _this = this; // tratamento para usar this dentro da função 
    this.formEl.addEventListener("submit",event =>{
    
        event.preventDefault();
        
        let values = this.getValues();

        

        this.getPhoto().then(
        
            (content)=>{
                values.photo = content;
                this.addLine(values);
            },
            (error)=>{
                console.error(error);
            }
            );     
    }); 
}//fechando metodo onSubmit


getPhoto(){

    return new Promise((resolve, reject)=>{
        let fileReader = new FileReader();

    let elements = [...this.formEl.elements].filter(item =>{

        if(item.name === 'photo' ){
            return item;
        }

    });
   
    let file = elements[0].files[0];
    
   fileReader.onload = ()=>{

        resolve(fileReader.result);

    };
    fileReader.onerror = (e)=>{
        reject(e);
    };
    fileReader.readAsDataURL(file);
    });

}//fechando metodo get photo

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

    
    this.tableEl.innerHTML = `  
        <tr>
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
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