let API_URL = `https://api.github.com/users/`;

let inputVal = document.getElementById("github-user");
let button = document.getElementById("btn");
let userDetails = document.getElementById("details");

async function getUserData(userName) {
  const response = await fetch(API_URL + userName);

  if (userName == "") alert("please enter username");

  if (response.status == 404 || response.status == 403) {
    document.querySelector(`#user-details`).style.display = "none";
    document.querySelector(`.error-msg`).style.display = "block";
  } else {
    const data = await response.json();
    document.querySelector(`#profile-link`).href = data.html_url;
    document.querySelector(`#profile-image`).src = data.avatar_url;
    document.querySelector(`#name`).innerText = "NAME :- " + data.name;
    document.querySelector(`#username`).innerText = "USERNAME :- " + data.login;
    document.querySelector(`#bio`).innerText = "BIO :- " + data.bio;
    document.querySelector(`#company`).innerText = "COMPANY :- " + data.company;
    document.querySelector(`#blog`).innerText = "BLOG :- " + data.company;
    document.querySelector(`#location`).innerText = "LOCATION :- " + data.location;
    document.querySelector(`#repos`).innerText = "PUBLIC REPOS :- " + data.public_repos;
    document.querySelector(`#followers`).innerText = "FOLLOWERS :- " + data.followers;
    document.querySelector(`#following`).innerText = "FOLLOWING :- " + data.following;
    document.querySelector(`#user-details`).style.display = "block";
    document.querySelector(`.error-msg`).style.display = "none";
  }
}

button.addEventListener("click", () => {
  getUserData(inputVal.value);
});
