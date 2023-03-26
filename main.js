const id = id => document.getElementById (id);
const classes = classes => document.getElementsByClassName (classes);

const form = id ('form'),
  username = id ('username'),
  email = id ('email'),
  password = id ('password'),
  failureIcon = classes ('failure'),
  successIcon = classes ('success'),
  errorMsg = classes ('error');

form.addEventListener ('submit', e => {
  e.preventDefault ();
  engine (username, 0,'Username cannot be blanked');
  engine (email, 1,'Email cannot be blanked');
  engine (password, 2,'Password cannot be blanked');
});

const engine = (id, serial, message) => {
  if (id.value.trim () === '') {
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = '1';
    successIcon[serial].style.opacity = '0';
  } else {
    errorMsg[serial].innerHTML = '';
    failureIcon[serial].style.opacity = '0';
    successIcon[serial].style.opacity = '1';
  }
};
