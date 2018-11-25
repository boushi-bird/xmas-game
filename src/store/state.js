import { childrenAssets, gifts } from '../assets';
import { shuffle } from '../util';

const wishes = shuffle([].concat(gifts));

const children = [];
childrenAssets.forEach((faceAssets, index) => {
  let wish;
  if (wishes.length > index) {
    wish = wishes[index];
  }
  children.push({
    id: `${index}`,
    emotion: 'normal',
    faceAssets,
    wish,
    sock: null,
  });
});

export default {
  success: false,
  gifts,
  children,
};
