class Utils{
   static formatDateTime(data,format){
    /*  1 - data / hora 11/11/22 - 06:42:18 
        2 - data        11/11/22
        3 - data        11/11/2022
        4 - data        11 de novembro de 2022
        5 - dia / mês   11/11
        6 - dia / mês   11 de novembro
        7 - mês / ano   11/22
        8 - mês / ano   11/2022
        9 - hora        06:42:18
    */  
   this._local = 'pt-br';
        switch(format){
            case 1:
                return data.toLocaleDateString(this._local,{
                    day:'2-digit',
                    month:'2-digit',
                    year:'2-digit'
                }) +' - '+ data.toLocaleTimeString(this._local);
            break;
            case 2:
                return data.toLocaleDateString(this._local,{
                    day:'2-digit',
                    month:'2-digit',
                    year:'2-digit'
                });    
            break;
            case 3:
                return data.toLocaleDateString(this._local,{
                    day:'2-digit',
                    month:'2-digit',
                    year:'numeric'
                });
            break;    
            case 4:
                return data.toLocaleDateString(this._local,{
                    day:'2-digit',
                    month:'long',
                    year:'2-digit'
                });
            break;
            case 5:
                return data.toLocaleDateString(this._local,{
                    day:'2-digit',
                    month:'2-digit'
                });
            break;
            case 6:
                return data.toLocaleDateString(this._local,{
                    day:'2-digit',
                    month:'long'
                });
            break;
            case 7:
                return data.toLocaleDateString(this._local,{
                    month:'2-digit',
                    year:'2-digit'
                });
            break;
            case 8:
                return data.toLocaleDateString(this._local,{
                    month:'2-digit',
                    year:'numeric'
                });
            break;
            case 9:
                return data.toLocaleTimeString(this._local);
            break;
            
            
        }        
            
    }
}