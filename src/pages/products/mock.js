// Products photos
import img1 from '../../images/products/img1.jpg';
import img2 from '../../images/products/img2.jpg';
import img3 from '../../images/products/img3.jpg';

export default [
  {
    id: 0,
    img: img1,
    title: 'trainers',
    description: 'Trainers In White',
    price: 76,
    favourite: true,
    label: false,
  },
  {
    id: 1,
    img: img2,
    title: 'boots',
    description: 'Trainers In Blue',
    price: {
      old: 56,
      new: 45,
      percents: 20,
    },
    favourite: false,
    label: 'Sale',
  },
  {
    id: 2,
    img: img3,
    title: 'flat sandals',
    description: 'Trainers In White',
    price: 55,
    favourite: false,
    label: 'New',
  },
];
