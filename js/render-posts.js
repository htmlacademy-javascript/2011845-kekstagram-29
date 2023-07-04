import { createPosts } from './data.js';
//import { renderBigPost } from './render-big-post.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const posts = createPosts();

const createPost = (item) => {
  const picture = pictureTemplate.cloneNode(true);
  const img = picture.querySelector('.picture__img');
  img.src = item.url;
  img.alt = item.description;
  picture.id = item.id;
  picture.querySelector('.picture__likes').textContent = item.likes;
  picture.querySelector('.picture__comments').textContent = item.comments.length;
  picture.addEventListener('click', (event) => {
    event.preventDefault();
    renderBigPost(item);
  });
  fragment.appendChild(picture);
};

const renderPosts = () => {
  posts.forEach((picture) => createPost(picture));
  pictureContainer.appendChild(fragment);
};
export { renderPosts };
