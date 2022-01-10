const getUsersBlogs = async (arrOfUsers) => {
  const fetchArray = (id) =>
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
  const result = await Promise.all(arrOfUsers.map((el) => fetchArray(el)));
  return result.map((el) => el.blog);
};

console.log(getUsersBlogs(['facebook', 'google', 'github']));
console.log(getUsersBlogs(['yuriiburow', 'facebook', 'google', 'github']));
