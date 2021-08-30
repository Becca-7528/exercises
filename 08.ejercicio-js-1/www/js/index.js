/* # Ejercicio 1

Escribe una función que devuelva un array de usuarios. De cada usuario guardaremos el username, el nombre y apellido, el sexo, el país, el email y un enlace a su foto de perfil.

El número de usuarios a obtener se debe indicar con un parámetro de dicha función.

Sírvete de la API: https://randomuser.me/ */

const URL = 'https://randomuser.me/api/?results=';

let usersArray = [];

async function getUsers(cant) {
  try {
    const response = await fetch(`${URL}+${cant}`);
    const data = await response.json();
    const users = data.results;

    for (const user of users) {
      const User = {
        username: `${user.login.username}`,
        fullname: `${user.name.first} ${user.name.last}`,
        sex: `${user.gender}`,
        country: `${user.location.country}`,
        email: `${user.email}`,
        picture: `${user.picture.large}`,
      };

      usersArray.push(User);
    }

    console.log(usersArray);
  } catch (error) {
    console.log(error);
  }
}

getUsers(prompt('Escriba la cantidad de Usuarios que quiere ver: '));
// getUsers(5);
