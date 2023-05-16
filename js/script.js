// prompt di richiesta del nome
let userName;
userName = prompt('Come ti chiami');
console.log(userName)

//prompt di richiesta del cognome
let userSurname = prompt('Qual è il tuo cognome?');
console.log(userSurname)

//prompt di richiesta del colore preferito
let userColorFav = prompt('Qual è il tuo colore preferito?');
console.log(userColorFav)

//creazione della password
let password = `${userName}${userSurname}${userColorFav}21`;
console.log(password)

//mostro la password a schermo
document.getElementById('password').innerHTML = `${password}`;