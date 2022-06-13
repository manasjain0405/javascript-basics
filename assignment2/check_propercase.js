function convertProperCase(str) {
    if(str.length <= 0){
        return;
    }
    if(str[0] == str[0].toLowerCase()) {
        return str[0].toUpperCase().concat(str.substring(1))
    }
    return str;
}

console.log(convertProperCase("manas"))
console.log(convertProperCase("Jain"))