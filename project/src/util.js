import dayjs from 'dayjs'
import 'dayjs/locale/ru';

export const formatCommentDate = (date) => {
  return dayjs().locale('ru').fromNow();
};

const generateCommentId = () => {
  let commentId = 0;
  return () => commentId++;
}

export const getCommentId = generateCommentId();
