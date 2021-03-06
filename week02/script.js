const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const input = document.getElementById("input");
const toggle = document.getElementById("toggle");

const createUserCard = (user) => {
  console.log(user);
  const cardHTML = `
    <div class="card">
      <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
      </div>
      <div class="user-info changable" >
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="info">
          <li><strong>Followers</strong>${user.followers}</li>
          <li><strong>Following</strong>${user.following}</li>
          <li><strong>Repos</strong>${user.public_repos}</li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
`;

  main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 10).forEach((repo) => {
    /**
     * <a class="repo" href={repo.html_url} target="_black">{repo.name}</a>
     */
    const repoEl = document.createElement("a"); // <a></a>
    repoEl.classList.add("repo"); // class="repo"
    repoEl.classList.add("changable");
    repoEl.style.transition = "0.4s";
    repoEl.href = repo.html_url; // href={repo.html_url}
    repoEl.target = "_blank"; // target="_black"
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
};

const getRepos = async (username) => {
  const response = await fetch(`${API_URL}${username}/repos`);
  const responseData = await response.json();

  addReposToCard(responseData);
};

const getUser = async (username) => {
  const response = await fetch(API_URL + username);
  const responseData = await response.json();

  createUserCard(responseData);
  getRepos(username);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = input.value.trim();

  if (user) {
    getUser(user);
    input.value = "";
  }
});

const onToggle = () => {
  const body = document.getElementById("root");
  const nodes = document.getElementsByClassName("changable");
  console.log(nodes);

  for (let i = 0; i < nodes.length; i++) {
    if (toggle.checked) {
      nodes[i].classList.add("white");
    } else {
      nodes[i].classList.remove("white");
    }
  }
};

toggle.addEventListener("click", (event) => setTimeout(onToggle(), 0));
