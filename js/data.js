import { getRandomNumber, getRandomArrayElement, shuffleArray } from './util.js';

const POSTS_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COUNT_COMMENTS = 0;
const MAX_COUNT_COMMENTS = 30;
const MIN_AVATARS_COUNT = 1;
const MAX_AVATARS_COUNT = 6;
const DESCRIPTIONS = [
  'Если вас огорчает наступление понедельника, работайте без выходных',
  'Каникулы в Мексике)))',
  'Впечатления',
  'С днем рождения меня!!!',
  'Случайное фото',
  'Я обернулся посмотреть не обернулась ли она...',
  'Фото с пляжа',
  'Мои впечатления'
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!'
];
const NAMES = [
  'Амина',
  'Рината',
  'Нюша',
  'Ваня',
  'Настя',
  'Илья',
  'Никита',
  'Роман'
];

let postID = 1;
let commentId = 1;

const createMessage = (elements) => shuffleArray(elements).slice(0, getRandomNumber(1, 2)).join(' ');

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomNumber(MIN_AVATARS_COUNT, MAX_AVATARS_COUNT)}.svg`,
  message: createMessage(COMMENTS),
  name: getRandomArrayElement(NAMES)
});

const createPost = () => ({
  id: postID,
  url: `photos/${postID++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: Array.from({ length: getRandomNumber(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS) }, createComment)
});

const createPosts = () => Array.from({ length: POSTS_COUNT }, createPost);

export { createPosts };
