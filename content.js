const boostButton = document.createElement('button');
boostButton.className = 'artdeco-button artdeco-button--secondary artdeco-button--3 artdeco-button--fluid';
boostButton.textContent = 'Boost';

const posts = document.querySelectorAll('.feed-shared-update-v2');
posts.forEach((post) => {
    const postContent = post.querySelector('.feed-shared-update-v2__content');
    postContent.appendChild(boostButton);
});