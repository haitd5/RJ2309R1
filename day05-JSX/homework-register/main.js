const registerArea = document.createElement('div');
registerArea.className = 'register';

const heading_1 = document.createElement('h1');
heading_1.innerText = 'Register';

const p_heading = document.createElement('p');
p_heading.innerHTML = 'Kindly fill in this form to register';
p_heading.className = 'register-p';

const register_form = document.createElement('form');
register_form.className = 'register-form';
register_form.autocapitalize = 'off';
register_form.action = '#';
// user name
const label_username = document.createElement('label');
label_username.for = 'username';
label_username.className = 'register-label';
label_username.innerHTML = 'Username';

const input_username = document.createElement('input');
input_username.type = 'text';
input_username.id = 'username';
input_username.className = 'register-input';
input_username.placeholder = 'Enter username'; 

//email
const label_email = document.createElement('label');
label_email.for = 'email';
label_email.className = 'register-label';
label_email.innerHTML = 'Email';

const input_email = document.createElement('input');
input_email.type = 'email';
input_email.id = 'email';
input_email.className = 'register-input';
input_email.placeholder = 'Enter email';


// password
const label_password = document.createElement('label');
label_password.for = 'password';
label_password.className = 'register-label';
label_password.innerHTML = 'Password';

const input_password = document.createElement('input');
input_password.type = 'password';
input_password.id = 'password';
input_password.className = 'register-input';
input_password.placeholder = 'Enter password';

// rep password
const label_rep_password = document.createElement('label');
label_rep_password.for = 'rep-password';
label_rep_password.className = 'register-label';
label_rep_password.innerHTML = 'Repeat Password';

const input_rep_password = document.createElement('input');
input_rep_password.type = 'password';
input_rep_password.id = 'rep-password';
input_rep_password.className = 'register-input';
input_rep_password.placeholder = 'Repeat password';


// button submit

const btn_submit = document.createElement('button');
btn_submit.className = 'register-submit';
btn_submit.type = 'submit';
btn_submit.innerHTML = 'Register';

btn_submit.onclick = function() {
    let 
}


// p footer
const p_footer = document.createElement('p');
p_footer.className = 'register-p';

// span, link

const span_footer = document.createElement('span');
span_footer.innerHTML = 'Already have an account ? '

const login_link = document.createElement('a');
login_link.href = '#';
login_link.className = 'register-link';


//user name
register_form.appendChild(label_username);
register_form.appendChild(input_username);

//email
register_form.appendChild(label_email);
register_form.appendChild(input_email);

//password
register_form.appendChild(label_password);
register_form.appendChild(input_password);

//repeat password
register_form.appendChild(label_rep_password);
register_form.appendChild(input_rep_password);

// button submit

register_form.appendChild(btn_submit);

//span, link

p_footer.appendChild(span_footer);
p_footer.appendChild(login_link);



registerArea.appendChild(heading_1);
registerArea.appendChild(p_heading);
registerArea.appendChild(register_form);
registerArea.appendChild(p_footer);

// document.getElementById('root').appendChild(registerArea);