// using ES6 syntax
let user = [
  {
    firstName: 'Samuel',
    lastName: 'Samuel',
    eMail: 'sam@gmail.com',
    passWord: '4567890',
    contact: [{ contactFirstName: 'emeey', contactLastName: 'Lanr', contactPhoneNumber: 8152304412, contactEmailAd: 'email04@gmail.com', contactEdit: 'Edit' },
    { contactFirstName: 'emeey', contactLastName: 'Lanr', contactPhoneNumber: 8152304412, contactEmailAd: 'email04@gmail.com', contactEdit: 'Edit' }],
    event: [],
    note: [{
      noteInfo: [{ noteTitle: 'Name', noteContent: `I'm born to be great, no one can stop my shine` }, { noteTitle: `I'm Emeey`, noteContent: `Emeey will be great` }]
    }],
  }

]
let getUserInfo = () => {
  if (localStorage.userInfo) {
    user = JSON.parse(localStorage.userInfo)
  }
}
let register = () => {
  let ftName = fName.value;
  let ltName = lName.value;
  let eMl = email.value;
  let pWord = password.value;
  // preventing user from inputing nothing  
  if (ftName != '' && ltName != '' && eMl != '' && pWord != '') {
    let newUser = {
      firstName: ftName,
      lastName: ltName,
      eMail: eMl,
      passWord: pWord,
      contact: [],
      event: [],
      note: [{ noteInfo: [] }],

    }
    user.push(newUser)
    localStorage.userInfo = JSON.stringify(user)
    fName.value = '';
    lName.value = '';
    email.value = '';
    password.value = '';
    alert(`Registration Successful`)
    window.location.href = 'dashboard.html';
  }
  else {
    alert(`Complete the information above`)
  }
}