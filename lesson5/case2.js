const fetchUser = () => Promise.resolve({ id: 1, name: "Alice" });
const fetchUserPosts = (userId) => Promise.resolve(
  [
    { postId: 101, content: "Hello World" }, 
    { postId: 102, content: "Learning JS" }
  ]
);

fetchUser()
  .then((user) => {
    console.log(`User: ${user.name}`);
    return fetchUserPosts(user.id);
  })
  .then((posts) => {
    const formattedPosts = posts.map((post) => `Post ${post.postId}: ${post.content}`);
    console.log(formattedPosts);
  });
