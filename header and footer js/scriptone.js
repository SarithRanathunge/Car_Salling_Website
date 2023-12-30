
function datastore(){
    if(document.paymentForm.fullname.value == ""){
        alert("Please, Enter your full name.");
        document.paymentForm.fullname.focus();
        return false;
    }else if(document.paymentForm.cardnumber.value==""){
        alert("Please, Enter your card number.");
        document.paymentForm.cardnumber.focus();
        return false;
    }else if(document.paymentForm.CW.value == ""){
        alert("Please, Enter your card number cw.");
        document.paymentForm.CW.focus();
        return false;
    }else if(document.paymentForm.city.value == ""){
        alert("Please, Enter your city name.");
        document.paymentForm.city.focus();
        return false;
    }else if(document.paymentForm.postalcode.value==""){
        alert("Please, Enter your city postal code.");
        document.paymentForm.postalcode.focus();
        return false;
    }else if(document.paymentForm.country.value == "empty"){
        alert("Please, Select your country.");
        document.paymentForm.country.focus();
        return false;
    }else{
        return true;
    }
}