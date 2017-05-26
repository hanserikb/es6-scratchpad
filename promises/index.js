((fetch) => {
  // *****
  // Promises
  // Nothing strange here!

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => data.filter(d => d.userId === 1))
    .then(data => data.filter((d, i) => i % 2))
    .then(data => data.map(({
      title,
      userId,
      id,
    }) => ({
      id,
      user: userId,
      title,
    })))
    .then(data => console.log(data))
    .catch(err => console.log(err));


  // Create new promises
  const p = new Promise((resolve) => {
    setTimeout(() => resolve('Resolved!'), 1000);
  });
  p.then(message => console.log(message));


  let posts = [{
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
  }];

  let comments = [{
    postId: 3,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium',
  },
  {
    postId: 3,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et',
  },
  {
    postId: 1,
    id: 3,
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    body: 'quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione',
  }];


  function getPostById(id) {
    return new Promise((resolve, reject) => {
      let post = posts.find(pst => pst.id === id);
      if (post) {
        resolve(post);
      } else {
        reject(Error('No post found'));
      }
    });
  }

  function enhancePostWithComments(post) {
    return new Promise((resolve) => {
      resolve(Object.assign(post, comments.filter(comment => comment.postId === post.id)));
    });
  }

  getPostById(3)
    .then(enhancePostWithComments)
    .then(post => console.log('this is the post', post));
})(window.fetch);
