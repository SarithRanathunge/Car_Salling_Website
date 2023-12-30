const today = new Date();

function ordervalidation(){
    if(document.dataForm.brand.value=="empty"){
        alert("Please select your vehical brand, you choosed!");
        document.dataForm.brand.focus();
        return false;
    }else if(document.dataForm.type.value=="empty"){
        alert("Please select your vehical type, you choosed!");
        document.dataForm.type.focus();
        return false;
    }else if(document.dataForm.year.value == ""){
        alert("Vehical year can not be empty.");
        document.dataForm.year.focus();
        return false;
    }else if(document.dataForm.color.value=="empty"){
        alert("Please select your vehical color, you choosed!");
        document.dataForm.color.focus();
        return false;
    }else if(document.dataForm.firstname.value == ""){
        alert("First name can not be empty.");
        document.dataForm.firstname.focus();
        return false;
    }else if(document.dataForm.lastname.value == ""){
        alert("Last name can not be empty.");
        document.dataForm.lastname.focus();
        return false;
    }else if(document.dataForm.email.value == ""){
        alert("Email can not be empty.");
        document.dataForm.email.focus();
        return false;
    }else if(document.dataForm.telephoneno1.value == ""){
        alert("Telephone no.1 can not be empty.");
        document.dataForm.telephoneno1.focus();
        return false;
    }else if(isNaN(document.dataForm.telephoneno1.value)){
        alert("Telephone no.1 should be a number.");
        document.dataForm.telephoneno1.focus();
        return false;
    }else if(document.dataForm.telephoneno2.value != null){
        if(document.dataForm.telephoneno2.value == document.dataForm.telephoneno1.value){
            alert("Telephone no.2 can not be telephone no.2.");
            document.dataForm.telephoneno2.focus();
            return false;
        }
    }else if(document.dataForm.address.value == ""){
        alert("Address can not be empty.");
        document.dataForm.address.focus();
        return false;
    }else if(document.dataForm.postalcode.value == ""){
        alert("Postal code can not be empty.");
        document.dataForm.postalcode.focus();
        return false;
    }else if(document.dataForm.nicno.value == ""){
        alert("Nic number can not be empty.");
        document.dataForm.nicno.focus();
        return false;
    }else if(document.dataForm.niccopy.value == ""){
        alert("Nic copy can not be empty.(png/jpg)");
        document.dataForm.nicno.focus();
        return false;
    }else{
        return true;
    }
}