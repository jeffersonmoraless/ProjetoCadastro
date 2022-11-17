class UserController{

    constructor(formId, tableId, updateId){
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);
        this.update = document.getElementById(updateId);
        this.onSubmit();
        this.onEdit();    
        
    }
onEdit(){
    document.querySelector(".box-primary .btn-default").addEventListener('click',()=>{
        document.querySelector(".box-primary").style.display = "none";
        document.querySelector(".box-success").style.display = "block";
    });

    
    
}
    
onSubmit(){
    
    
    //let _this = this; // tratamento para usar this dentro da função 
    this.formEl.addEventListener("submit",event =>{
    
        event.preventDefault();
        
        let values = this.getValues();
        if(!values){
            return false;
        }
       
        this.getPhoto().then(
        
            (content)=>{
                
                values.photo = content;
                this.addLine(values);
                this.formEl.reset();
                
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
        
    let user = {}, isValid = true;
       
    [...this.formEl.elements].forEach(function(campo,index){
        
        if(['name'].indexOf(campo.name)> -1 && !campo.value){
            
            campo.parentElement.classList.add('has-error')
            
            isValid = false;
            
        }else{
            campo.parentElement.classList.remove('has-error');
        }


        if(campo.name == "gender"){
            if(campo.checked) user[campo.name] = campo.value;
        }else if(campo.name == 'admin'){
            user[campo.name] = campo.checked;
        }else{
            user[campo.name] = campo.value;
        }
    });
    if(!isValid){
        
        return false;
        
    }
        
        return new User(user.name, user.gender, user.birth, user.country, user.email, user.password, user.photo, user.admin);
        
}   // fechando metodo getValues()

addLine(dataUser){

    let tr = document.createElement('tr');
    
    tr.dataset.user = JSON.stringify(dataUser);
    
    tr.innerHTML = `  
        <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${(dataUser.admin)? 'sim' : 'não'}</td>
        <td>${Utils.formatDateTime(dataUser.registro,1)}</td>
        <td>
        <button type="button" class="btn btn-edit btn-primary btn-xs btn-flat">Editar</button>
        <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>`

        tr.querySelector(".btn-edit").addEventListener('click',e =>{
            //console.log(JSON.parse(tr.dataset.user));
            let json = JSON.parse(tr.dataset.user);

            for(let name in json){

                let field = this.update.querySelector("[name="+name.replace("_","")+"]");
                //console.log(field);

                if(field){
                    if(field.type == 'file') continue;
                    field.value = json[name];
                }
            }


         
            this.showPanel();
        })
    this.tableEl.appendChild(tr);
    
    
    this.updateCount();
}
showPanel(){
    document.querySelector(".box-primary").style.display = "block";
    document.querySelector(".box-success").style.display = "none";
}


updateCount(){
    let numUsers = 0;
    let adminUsers = 0;
    [...this.tableEl.children].forEach(tr=>{
        numUsers++;
        let user =  JSON.parse(tr.dataset.user);
        
        if(user._admin){
            adminUsers++;
        }
    });
    document.querySelector("#num-users").innerHTML = numUsers;
    document.querySelector("#num-admin").innerHTML = adminUsers;
}

}