// your code here
const rootURL = 'https://api.github.com';
function getRepositories() {
  name = document.getElementById('username').value
  const uri = rootURL + '/users/' + name + '/respos'
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories)
  req.open('GET', uri);
  req.send();
}

function displayRepositories(){
  var repos = JSON.parse(this.responseText);
    console.log(repos);
    const repoList = `<ul>${repos
      .map(
        r =>
          '<li>' +
          r.name +
          ' - <a href="#" data-repo="' +
          r.name +
          '" onclick="getCommits(this)">Get Commits</a></li>'
      )
      .join('')}</ul>`;
    document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', 'https://api.github.com/repos/octocat/' + name + '/commits');
  req.send();
}

def displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.author.name +
        '</strong> - ' +
        '<li><strong>' +
        commit.author.fullname +
        '</strong> - ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;

}
