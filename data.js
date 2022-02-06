(async function data() {
  try {
    const name = localStorage.getItem('user-name');

    if (document.getElementById('onb-title') === null) {
      console.log('Not Available');
    } else {
      document.getElementById('onb-title').innerHTML = `Hello ${name}`;
    }
    const url = 'https://bank-backend12.herokuapp.com/api/user/';

    const req = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'auth-token': localStorage.getItem('token'),
      }
    });

    const res = await req.json();

    console.log(res);


    if (req.status !== 200) {
      return document.location.href = '/login.html';
    } else {

      const accountBal = document.getElementsByClassName('accountBalance');
      for (let i = 0; i < accountBal.length; i++) {
        accountBal[i].textContent = `$${res.user.accountBalance.toLocaleString('en-US')}.00`;
      }
      const name = document.getElementsByClassName('logged-user-name');
      for (let i = 0; i < name.length; i++) {
        name[i].textContent = `${res.user.name} ${res.user.lastName}`;
      }

      const email = document.getElementsByClassName('logged-user-role');
      for (let i = 0; i < email.length; i++) {
        email[i].textContent = res.user.email;
      }

      if (document.getElementById('accountNumber') === null) {
        console.log('Not Available');
      } else {
        document.getElementById('accountNumber').textContent = res.user.acctNumber;
      }
    }

    document.getElementById('email-in').value = res.user.email;
    document.getElementById('fname').value = res.user.name;
    document.getElementById('lname').value = res.user.lastName;
    document.getElementById('gender').value = res.user.gender;
    document.getElementById('phone-in').value = res.user.phone;
    document.getElementById('address').value = `${res.user.address.houseAddress} ${res.user.address.city}, ${res.user.address.state}. ${res.user.address.country}`
  } catch (error) {
    console.log(error);
  }
} ());