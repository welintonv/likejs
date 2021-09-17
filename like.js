String.prototype.like = function(s){
    texto = this.toUpperCase();
    s = s.toUpperCase();
    let arr = s.split("*");

    let str = arr[0];
    if(str.trim() != "") 
        if(texto.substr(0,str.length) != str) 
            return false;

    str = arr[arr.length - 1];
    if(str.trim() != "") 
        if(texto.substr(-str.length) != str) 
            return false;
    
    if(arr.length == 1) return true;

    let i = 1;
    for (let i2 = 0; i2 < texto.length && i < arr.length; i2++) {
        str = arr[i];
        i++;
        i2 = texto.indexOf(str) + 2;
        if(i2 === 1) return false;
    }

    return true;
}