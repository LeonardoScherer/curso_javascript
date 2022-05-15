var name = document.querySelector('#exampleInputName');
var gender = document.querySelector('#form-user-create [name=gender]:checked');
var birth = document.querySelector('#exampleInputBirth');
var contry = document.querySelector('#exampleInputContry');
var email = document.querySelector('#exampleInputEmail');
var password = document.querySelector('#exampleInputPassword');
var photo = document.querySelector('#exampleInputPhoto');
var admin = document.querySelector('#exampleInputAdmin');

var fields = document.querySelectorAll('#form-user-create [name]');

fields.forEach(function(field, index) {

    if (field.name == "gender") {
        if (field.checked){
            console.log('sim', field);
        }
        
    } else {
        console.log('nao');
    }

    //console.log(index);

});