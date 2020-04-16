/*----------------PASSWORD CONFIRMATION---------------*/
function Validate() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password2").value;
    if (password != confirmPassword) {
        alert("Passwordi se ne poklapaju!");
        return false;
    }
    else if(password == ""){
        alert("Molim vas unesite password!");
        return false;
    }
    else{
        $(document).ready(function(){
                var ime = document.getElementById('firstname').value;
                var prezime = document.getElementById('lastname').value;
                var email = document.getElementById('email').value;
                var password = document.getElementById('password').value;
                var ageTypeIndex = document.getElementById('ageType').selectedIndex;
                var ageType = document.getElementById('ageType')[ageTypeIndex].value;
                var data = {"ime": ime, "prezime":prezime, "email":email, "password":password, "ageType":ageType};
                JSON.stringify(data);
                $.ajax({
                    url     : 'http://192.168.1.3:3000/post',
                    type    : "POST",
                    data    : data,
                    dataType: 'JSON',
                    success : function(result){
                        res.send(result);
                    },
                    error:function(error, result){
                        console.log(error);
                    }
                });
            });
            alert("Clanska karta uspijesno narucena!");

        return true;
    }
}

