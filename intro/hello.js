
function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

string = "hello world"

console.log(ucfirst(string));