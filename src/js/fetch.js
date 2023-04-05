fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then(posts => {
    console.log(posts);
  })
  .catch(err => {
    if (err.message === '404') {
      alert('Такого ресурсу не знайдено!');
    }
  });
