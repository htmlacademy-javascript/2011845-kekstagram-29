import { createPosts } from './data.js';
import { renderFullPicture } from './render-full-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const posts = createPosts();

const createPost = (post) => {
  const newPicture = pictureTemplate.cloneNode(true);
  const img = newPicture.querySelector('.picture__img');
  img.src = post.url;
  img.alt = post.description;
  newPicture.id = post.id;
  newPicture.querySelector('.picture__likes').textContent = post.likes;
  newPicture.querySelector('.picture__comments').textContent = post.comments.length;
  newPicture.addEventListener('click', (event) => {
    event.preventDefault();
    renderFullPicture(post);
  });
  fragment.append(newPicture);
};

const renderPosts = () => {
  posts.forEach((post) => createPost(post));
  pictureContainer.append(fragment);
};
export { renderPosts };
