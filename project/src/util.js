import dayjs from 'dayjs'
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

dayjs.locale('ru');

export const formatCommentDate = (date) => {
  return dayjs(date).fromNow();
};

const generateCommentId = () => {
  let commentId = 0;
  return () => commentId++;
}

export const getCommentId = generateCommentId();
