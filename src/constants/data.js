import images from './images';

const wines = [
  {
    title: 'Chateau Margaux',
    price: '₹10,000',
    tags: 'FR | Bottle',
  },
  {
    title: 'Penfolds Grange',
    price: '₹25,000',
    tags: 'AU | Bottle',
  },
  {
    title: 'Dom Pérignon',
    price: '₹20,000',
    tags: 'FR | Bottle',
  },
  {
    title: 'Veuve Clicquot',
    price: '₹8,000',
    tags: 'FR | Bottle',
  },
  {
    title: 'Guinness Draught',
    price: '₹500',
    tags: 'IE | Pint',
  },
];

const cocktails = [
  {
    title: 'Mojito',
    price: ' ₹300',
    tags: 'Rum | Mint | Lime | Sugar | Soda',
  },
  {
    title: "Margarita",
    price: ' ₹350',
    tags: 'Tequila | Lime Juice | Orange Liqueur | Salt',
  },
  {
    title: 'Old Fashioned',
    price: ' ₹400',
    tags: 'Whiskey | Angostura Bitters | Sugar | Orange Peel',
  },
  {
    title: 'Cosmopolitan',
    price: ' ₹350',
    tags: 'Vodka | Cointreau | Cranberry Juice | Lime Juice',
  },
  {
    title: 'Pina Colada',
    price: ' ₹300',
    tags: 'Rum | Pineapple Juice | Coconut Cream',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
