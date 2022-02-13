async function register() {
  try {
    const firstName = document.getElementById('fn').value;
    const lastName = document.getElementById('ln').value;
    const email = document.getElementById('em').value;
    const phone = document.getElementById('ph').value;
    const dateOfBirth = document.getElementById('age').value;
    const gender = document.getElementById('gen').value;
    const password = document.getElementById('pass').value;
    const nextOfKin = document.getElementById('nok').value;
    const houseAddress = document.getElementById('add').value;
    const state = document.getElementById('st').value;
    const country = document.getElementById('co').value;
    const city = document.getElementById('city').value;
    const zipcode = document.getElementById('zip').value;

    const buttonText = document.getElementById('register-btn');

    buttonText.innerHTML = 'Please Wait...';

    const url = 'https://bank-backend12.herokuapp.com/api/user/register';
    const body = {
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      gender,
      password,
      nextOfKin,
      houseAddress,
      state,
      country,
      city,
      zipcode,
    };

    const req = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    const res = await req.json();
    console.log(res);

    if (req.status !== 200) {
      buttonText.innerHTML = 'SIGN UP';
      return alert(res.errMessage);
    };
    localStorage.setItem('token', res.token);
    localStorage.getItem('user-name', firstName);
    buttonText.innerHTML = 'SIGN UP';
    document.location.href = '/dashboard.html'
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

async function login() {
  try {
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    const buttonText = document.getElementById('login-btn');

    buttonText.innerHTML = 'Please Wait...';

    const url = 'https://bank-backend12.herokuapp.com/api/user/login';
    const body = {
      email,
      password,
    };

    const req = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    const res = await req.json();

    if (req.status !== 200) {
      buttonText.innerHTML = 'LOGIN';
      console.log(res);
      return alert(res.errMessage);
    };
    localStorage.setItem('token', res.token);
    localStorage.setItem('user-name', res.user.name)
    buttonText.innerHTML = 'LOGIN';
    document.location.href = '/dashboard.html'
  } catch (error) {
    console.log(error);
  }
}