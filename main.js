function fetchGitHubData() {
    const apiUrl = 'https://api.github.com/users/ogiansouza'; 
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const avatar = data.avatar_url;
        const name = data.name;
        const username = data.login;
        const repos = data.public_repos;
        const followers = data.followers;
        const following = data.following;
  
       
        document.querySelector('.profile-avatar').src = avatar;
        document.querySelector('.profile-name').textContent = name;
        document.querySelector('.profile-username').textContent = `@${username}`;
        document.querySelector('.numbers-item.repos').textContent = repos;
        document.querySelector('.numbers-item.followers').textContent = followers;
        document.querySelector('.numbers-item.following').textContent = following;
      })
      .catch(error => {
        console.error('Erro ao buscar dados do GitHub:', error);
      });
  }
  
  
  window.addEventListener('load', fetchGitHubData);