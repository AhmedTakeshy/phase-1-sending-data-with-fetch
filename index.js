// Add your code here

const submitData = (name, email) => {
  const formData = {
    name: name,
    email: email,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then((resp) => resp.json())
    .then((json) => (document.body.innerHTML = json["id"]))
    .catch((error) => (document.body.innerHTML = error.message));
};
