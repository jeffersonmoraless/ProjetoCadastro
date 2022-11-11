class User{

    constructor(name, gender, birth, country, email, password, photo, admin){
        this.name = name;
        this.gender = gender;
        this.birth = birth;    
        this.country = country;
        this.email = email;
        this.password = password;
        this.photo = photo;
        this.admin = admin;
        this._registro;
    }
    get registro(){
        return new Date();
    }
    set registro(valor){
        this._registro = valor;
    }

}