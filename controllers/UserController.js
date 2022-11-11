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
        console.log("aqui estous!!!",values);
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
    if ( file ){
        
        fileReader.readAsDataURL(file);
    
    }else{
        resolve('dist/img/boxed-bg.jpg');
    }
    });

}//fechando metodo get photo

getValues(){
        
    let user = {};
       
    [...this.formEl.elements].forEach(function(campo,index){
        
        if(campo.name == "gender"){
            if(campo.checked) user[campo.name] = campo.value;
        }else if(campo.name == 'admin'){
            user[campo.name] = campo.checked;
        }else{
            user[campo.name] = campo.value;
        }
    });
    
    return new User(user.name, user.gender, user.birth, user.country, user.email, user.password, user.photo, user.admin);
        
}   // fechando metodo getValues()

addLine(dataUser){

    let tr = document.createElement('tr');
    tr.innerHTML = `  
        <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${(dataUser.admin)? 'sim' : 'não'}</td>
        <td>${Utils.formatDateTime(dataUser.registro,1)}</td>
        <td>
        <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
        <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>`
    this.tableEl.appendChild(tr);
}


}