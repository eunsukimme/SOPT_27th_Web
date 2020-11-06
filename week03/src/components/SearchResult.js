import React, { useEffect, useState } from "react";
import { getUserReposAPI } from "../lib/api";

export default function SearchResult({ user }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (user) {
      (async function getUserRepos() {
        const repos = await getUserReposAPI(user.login);
        setRepos(repos);
      })();
    }
  }, [user]);

  if (!user) return null;

  return (
    <main id="main" className="changable">
      <div className="card">
        <div>
          <img className="avatar" src={user.avatar_url} alt={user.name} />
        </div>
        <div className="user-info changable">
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <ul className="info">
            <li>
              <strong>Followers</strong>
              {user.followers}
            </li>
            <li>
              <strong>Following</strong>
              {user.following}
            </li>
            <li>
              <strong>Repos</strong>
              {user.public_repos}
            </li>
          </ul>
          <div id="repos">
            {repos.slice(0, 10).map((repo) => (
              <a
                className="repo changable"
                href={repo.html_url}
                target="_black"
              >
                {repo.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
