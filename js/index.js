console.log("form validation using regular expression")
const alert = document.querySelector(".notification")

const name = document.getElementById("name")
const Email = document.getElementById("Email")
const phoneNO = document.getElementById("phn")

let is_name_display = document.querySelector(".helpName")
let is_email_display = document.querySelector(".helpEmail")
let is_phone_display = document.querySelector(".helpPhone")

let vlidPhone = false;
let vlidEmail = false;
let vlidName = false;
let vlidtextarea = true;
//blur event

name.addEventListener("blur", () => {
	// validating the form
	let regex = /^[a-zA-Z]([0-9a-zA-z]){2,20}$/
	let str = name.value

	if (str.length >= 20) {
		name.setAttribute(
			"style",
			"border: 2px solid hsl(348, 100%, 61%) !important;"
		)
		is_name_display.innerHTML = "name is invalid <strong>the username must be 2-10 character long it cannot be empty</strong>"
		is_name_display.style.color = "hsl(348, 100%, 61%)"
		is_name_display.firstElementChild.style.color = "hsl(348, 100%, 61%)"
		vlidName = false;
	} else if (str.length < 20 && str.length > 2) {
		if (regex.test(str)) {
			name.setAttribute(
				"style",
				"border: 2px solid hsl(171, 100%, 41%) !important;"
			)
			is_name_display.innerHTML = "name is valid"
			is_name_display.style.color = "hsl(171, 100%, 41%)"
			vlidName = true;
		} else {
			name.setAttribute(
				"style",
				"border: 2px solid hsl(348, 100%, 61%) !important;"
			)
			is_name_display.innerHTML = "name is invalid <strong>it cannot start with a number </strong>"
			is_name_display.style.color = "hsl(348, 100%, 61%)"
			is_name_display.firstElementChild.style.color = "hsl(348, 100%, 61%)"
			vlidName = false;
		}
	} else if (str.length <= 2) {
		name.setAttribute(
			"style",
			"border: 2px solid hsl(348, 100%, 61%) !important;"
		)
		is_name_display.innerHTML = "name is invalid <strong>minimum 3 charater is neaded</strong>"
		is_name_display.style.color = "hsl(348, 100%, 61%)"
		is_name_display.firstElementChild.style.color = "hsl(348, 100%, 61%)"
		vlidName = false;
	}
})
Email.addEventListener("blur", () => {
	// validating the form
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/
	let str = Email.value
    
	if (regex.test(str)) {
			console.log(str, "worked")
		Email.setAttribute(
			"style",
			"border: 3px solid hsl(171, 100%, 41%) !important;"
		)
		is_email_display.innerHTML = "Email number is valid <strong>you are good to go</strong>"
		is_email_display.style.color = "hsl(171, 100%, 41%)"
		is_email_display.firstElementChild.style.color = "hsl(171, 100%, 41%)"
		vlidEmail = true;
	} else {
		console.log(str, "i dont know")
		Email.setAttribute(
			"style",
			"border: 3px solid hsl(348, 100%, 61%) !important;"
		)
		is_email_display.innerHTML = "Email number is invalid <strong>enter correct email</strong>"
		is_email_display.style.color = "hsl(348, 100%, 61%)"
		is_email_display.firstElementChild.style.color = "hsl(348, 100%, 61%)"
		vlidEmail = false;
	}
})
phoneNO.addEventListener("blur", () => {
	// validating the form
	let regex = /^([0-9]){10}$/
	let str = phoneNO.value
    
	if (str == "" || str == null || str == undefined) {
		phoneNO.setAttribute(
			"style",
			"border: 2px solid hsl(348, 100%, 61%) !important;"
		)
		is_phone_display.innerHTML = "phone number is invalid <strong>it cannot be empty</strong>"
		is_phone_display.style.color = "hsl(348, 100%, 61%)"
		is_phone_display.firstElementChild.style.color = "hsl(348, 100%, 61%)"
		vlidPhone = false;
	} else {
		if (regex.test(str)) {
		    	console.log(str, regex)
			phoneNO.setAttribute(
				"style",
				"border: 3px solid hsl(171, 100%, 41%) !important;"
			)
			is_phone_display.innerHTML = "phone number is valid <strong>you are good to go</strong>"
			is_phone_display.style.color = "hsl(171, 100%, 41%)"
			is_phone_display.firstElementChild.style.color = "hsl(171, 100%, 41%)"
			vlidPhone = true;
		} else {
			console.log(str, regex)
			phoneNO.setAttribute(
				"style",
				"border: 3px solid hsl(348, 100%, 61%) !important;"
			)
			is_phone_display.innerHTML = "phone number is invalid <strong>it cannot be less then or greater then 10 numbers</strong>"
			is_phone_display.style.color = "hsl(348, 100%, 61%)"
			is_phone_display.firstElementChild.style.color = "hsl(348, 100%, 61%)"
			vlidPhone = false;
		}
	}
})

const NewAlert = (propsType,propsMassage) => {
	this.propsType = propsType
	this.propsMassage = propsMassage
	let html = `
	    <div class="notification is-${propsType}" id="alert">
	    	<button class="delete"></button>
	    	<div class="is-flex">
	    		<strong>!Massage:</strong> &nbsp <p>${propsMassage}</p>
	    	</div>
	    </div>
	`;
	const massage = document.querySelector(".massageRoot")
	massage.innerHTML = html
	const cut = () => {
		// let parentelm = parentNode;
	    let deletebtn = document.querySelector(".delete")
		// deletebtn.parentElement.style.display="none"
		// console.log(deletebtn.parentElement)
		deletebtn.addEventListener("click", () => {
			deletebtn.parentElement.style.display="none"
		})
	}
	cut()
}

const submit = document.querySelector("a[id=\"submit\"]")
const cencel = document.querySelector("a[id=\"cencel\"]")
submit.addEventListener("click", (e) => {
	
	e.preventDefault()
	let text = document.querySelector("textarea[class=\"textarea\"]")

	if (vlidName && vlidPhone && vlidEmail && vlidtextarea) {
		console.log("done")
        NewAlert(
        	"primary",
        	"you have sucess fully submited the form"
		)
		name.value = ""
		Email.value = ""
		phoneNO.value = ""
		is_name_display.innerHTML = "";
		is_email_display.innerHTML = "";
		is_phone_display.innerHTML = "";
		text.value = ""
		
	} else {
		console.log("i dont know")
		NewAlert(
        	"danger",
        	`Your one of Name or Email or phone is not valid or empity`
		)
		name.setAttribute(
			"style",
			"border: 3px solid hsl(348, 100%, 61%) !important;"
		)
		Email.setAttribute(
			"style",
			"border: 3px solid hsl(348, 100%, 61%) !important;"
		)
		phoneNO.setAttribute(
			"style",
			"border: 3px solid hsl(348, 100%, 61%) !important;"
		)
	}
	
})
cencel.addEventListener("click", ()=> {
	console.log("form is cencel")
	let text = document.querySelector("textarea[class=\"textarea\"]")
	if (
		name.value != "" &&
		Email.value != "" &&
		phoneNO.value != "" &&
		text.value != ""
	) {
		name.value = ""
	    Email.value = ""
	    phoneNO.value = ""
	    is_name_display.innerHTML = ""
	    is_phone_display.innerHTML = ""
	    is_email_display.innerHTML = ""
	    text.value = ""
	    NewAlert(
	    	"primary",
	    	"Your Form submission has been canceled"
	    )
	} else {
        NewAlert(
	    	"danger",
	    	"invalid cancelation Fildes are empty"
		)
	}
})