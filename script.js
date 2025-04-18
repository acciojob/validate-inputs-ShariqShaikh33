//your JS code here. If required.
let name = document.getElementById("name");
name.style.backgroundColor = "pink";
let email = document.getElementById("email");
email.style.backgroundColor = "pink";
let phone = document.getElementById("phone");
phone.style.backgroundColor = "pink";

let nameEx = /[A-Za-z]{3,}/;
let emailEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
let phoneEx = /[0-9]{10}/

let elements = [{input: name,regex: nameEx}, {input: email,regex: emailEx}, {input: phone, regex: phoneEx}];
elements.forEach((e)=>{
	e.input.addEventListener('keyup',()=>{
		let bool = Validate(e.input, e.regex);
		if(bool){
			e.input.style.backgroundColor = "lightgreen";
		}
		else{
			e.input.style.backgroundColor = "pink";
		}
	})
})

function Validate(input, inputEx){
	if(inputEx.test(input.value)){
		return true;
	}
	else{
		return false;
	}
}