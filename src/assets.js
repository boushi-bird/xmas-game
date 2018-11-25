const childrenAssets = [
  {
    normal: require('./assets/children/child1/normal.png'),
    angry: require('./assets/children/child1/angry.png'),
    laugh: require('./assets/children/child1/laugh.png'),
  },
  {
    normal: require('./assets/children/child2/normal.png'),
    angry: require('./assets/children/child2/angry.png'),
    laugh: require('./assets/children/child2/laugh.png'),
  },
  {
    normal: require('./assets/children/child3/normal.png'),
    angry: require('./assets/children/child3/angry.png'),
    laugh: require('./assets/children/child3/laugh.png'),
  },
  {
    normal: require('./assets/children/child4/normal.png'),
    angry: require('./assets/children/child4/angry.png'),
    laugh: require('./assets/children/child4/laugh.png'),
  },
];

const gifts = [
  {
    id: '1',
    image: require('./assets/gifts/1.png'),
  },
  {
    id: '2',
    image: require('./assets/gifts/2.png'),
  },
  {
    id: '3',
    image: require('./assets/gifts/3.png'),
  },
  {
    id: '4',
    image: require('./assets/gifts/4.png'),
  },
];

const santa = {
  normalImage: require('./assets/santa/normal.png'),
  successImage: require('./assets/santa/success.png'),
};

export { childrenAssets, gifts, santa };
