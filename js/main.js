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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(MIN_AVATARS_COUNT, MAX_AVATARS_COUNT)}.svg`,
  messeg: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES)
});

const getComments = () =>
  Array.from({ length: getRandomInteger(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS) }, (_, index) =>
    createComment(index + 1)
  );

const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: getComments()
});


const getPosts = () =>
  Array.from({ length: POSTS_COUNT }, (_, index) =>
    createPost(index + 1)
  );

