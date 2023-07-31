const navbar = document.createElement('nav');
navbar.className = 'navbar';

const ul = document.createElement('ul');

const aHome = document.createElement('a');
aHome.href = './';
aHome.innerHTML = 'Home';

const aCreate = document.createElement('a');
aCreate.href = './create-com-post.html';
aCreate.innerHTML = 'POST';

const aRead = document.createElement('a');
aRead.href = './read-com-get.html';
aRead.innerHTML = 'GET';

const aUpdate = document.createElement('a');
aUpdate.href = './update-com-put.html';
aUpdate.innerHTML = 'UPDATE';

const aDelete = document.createElement('a');
aDelete.href = './delete-com-delete.html';
aDelete.innerHTML = 'DELETE';

ul.appendChild(document.createElement('li')).appendChild(aHome);
ul.appendChild(document.createElement('li')).appendChild(aCreate);
ul.appendChild(document.createElement('li')).appendChild(aRead);
ul.appendChild(document.createElement('li')).appendChild(aUpdate);
ul.appendChild(document.createElement('li')).appendChild(aDelete);

// nav.appendChild(ul);

document.querySelector('header').insertBefore(navbar, document.querySelector('h1')).appendChild(ul);