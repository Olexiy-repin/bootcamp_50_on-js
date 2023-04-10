/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const updateUserInfo = (userId, userInfo) => {
  fetch(`${BASE_URL}/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      const userForUpdate = {
        ...data,
        ...userInfo,
      };

      return fetch(`${BASE_URL}/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(userForUpdate),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }

          return response.json();
        })
        .then(data => {
          console.log(data);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

updateUserInfo(11, {
  name: 'Oleksii Repin',
  phone: '(478) 688-5572',
  email: 'doap@siefvup.sj',
});
