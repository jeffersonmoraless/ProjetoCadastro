class User{

    constructor(name, gender, birth, country, email, password, photo, admin){
        this._name = name;
        this._gender = gender;
        this._birth = birth;    
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._registro;
    }
    get registro(){
        return new Date();
    }
    set registro(valor){
        this._registro = valor;
    }
    get name(){
        return this._name;
    }
    set name(valor){
        this._name = valor;
    }
    get gender(){
        return this._gender;
    }
    set gender(valor){
        this._gender = valor;
    }
    get birth(){
        return this._birth;
    }
    set birth(valor){
        this._this._birth= valor;
    }
    get country(){
        return this._country;
    }
    set country(valor){
        this._country = valor; 
    }
    get email(){
        return this._email;
    }
    set email(valor){
        this._email = valor;
    }
    get password(){
        return this._password ;
    }
    set password(valor){
        this._password = valor;
    }
    get photo(){
        return this._photo ;
    }
    set photo(valor){
        this._photo = valor;
    }
    get admin(){
        return this._admin ;
    }
    set admin(valor){
        this._admin = valor;
    }

}