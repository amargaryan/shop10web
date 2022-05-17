

async function postData(post){
    
    const response = await fetch(
        'http://shop.test/api/Nona_Telunts_Homeworks/Classwork/registration.php',
        {
            method: 'POST',
            body: JSON.stringify(post)
        }
    );
    const data = await response.json();
    

function signUpValidation(){

	const formData = {
		first_name : document.getElemenetsByName("first_name"),
		last_name : document.getElemenetsByName("last_name"),
		email : document.getElemenetsByName("email"),
		seller : document.getElemenetsByName("seller"),
		buyer : document.getElemenetsByName("buyer"),
		male : document.getElemenetsByName("male"),
		female : document.getElemenetsByName("female"),
		password : document.getElemenetsByName("password"),
		confirm_password : document.getElemenetsByName("confirm_password"),
	}

	if(firstNameValidation(formData.first_name)){
		if(lastNameValidation(formData.last_name)){
			if(emailValidation(formData.email)){
				if(typeValidation(formData.seller,formData.buyer)){
					if(genderValidation(formData.male,formData.female)){
						if(passwordValidation(formData.password)){
							if(confirmPasswordValidation(formData.password,formData.confirm_password)){
						
								postData(formData);
   
							}
						}
					}
				}
			}
		}
	}
	return false;
}


function firstNameValidation(first_name){
	let letters = /^[A-Za-z]+$/;
    if(first_name.value.match(letters)){
        return true;
    }else{
        first_name.focus();
    return false;
}

function lastNameValidation(last_name){
	let letters = /^[A-Za-z]+$/;
    if(last_name.value.match(letters)){
        return true;
    }else{
        last_name.focus();
    return false;
}

function emailValidation(email){
	var emailChars = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(emailChars)){
        return true;
    }else{
        email.focus();
    return false;
}

function genderValidation(male,female){
	if(male.checked || female.checked){
		return true;
	}
	return false;
}

function typeValidation(seller,buyer){
	if(seller.checked || buyer.checked){
		return true;
	}
	return false;
}

function passwordValidation(password){
    let password_length = password.length;
    if(password_length < 3 || password_length > 10){
    	password.focus();
    	return false;
    }
    return true;
}

function confirmPasswordValidation(password,confirm_password){
	if(password != confirm_password){
		confirm_password.focus();
		return false;
	}
	return true;
}

function ifSubmitted(){
	if(signUpValidation){
		
	}
}