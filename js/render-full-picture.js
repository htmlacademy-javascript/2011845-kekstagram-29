const pictureContainer = document.querySelector('.big-picture');
const bigImage = pictureContainer.querySelector('img');
const socialCaption = document.querySelector('.social__caption');
const likesCount = document.querySelector('.likes-count');
const pictureCancel = document.querySelector('.big-picture__cancel');
const commentsLoader = document.querySelector('.comments-loader');
const socialComment = document.querySelector('.social__comment');
const socialComments = document.querySelector('.social__comments');
const socialCommentCount = document.querySelector('.social__comment-count');


const closeModal = () => {
  pictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureCancel.removeEventListener('click', pictureCancelClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

const openModal = () => {
  pictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  pictureCancel.addEventListener('click', pictureCancelClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};

const hideBlocks = () => {
  commentsLoader.remove();
  socialCommentCount.remove();
};

function pictureCancelClickHandler(event) {
  event.preventDefault();
  closeModal();
}

function documentKeydownHandler(event) {
  if (event.key === 'Escape' && !event.target.closest('.social__footer-text')) {
    event.preventDefault();
    closeModal();
  }
}

const fillBigPicture = (post) => {
  bigImage.src = post.url;
  socialCaption.textContent = post.description;
  likesCount.textContent = post.likes;
};

const fillComment = (item) => {
  const comment = socialComment.cloneNode(true);
  const img = comment.querySelector('.social__picture');
  img.src = item.avatar;
  img.alt = item.name;
  comment.querySelector('.social__text').textContent = item.message;
  socialComments.append(comment);
};

const fillComments = (comments) => {
  comments.forEach((item) => fillComment(item));
};

const renderFullPicture = (post) => {
  socialComments.innerHTML = '';
  hideBlocks();
  openModal();
  fillBigPicture(post);
  fillComments(post.comments);
};

export { renderFullPicture };
