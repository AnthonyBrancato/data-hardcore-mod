const PERIODS = [
  {
    id: 1,
    name: 'Petit-déjeuner',
    startTime: '07:00',
    endTime: '10:00',
    weekdays: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    name: 'Midi semaine',
    startTime: '11:00',
    endTime: '15:00',
    weekdays: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    name: 'Soir semaine',
    startTime: '19:00',
    endTime: '23:00',
    weekdays: [1, 2, 3, 4],
  },
  {
    id: 4,
    name: 'Brunch',
    startTime: '19:00',
    endTime: '23:00',
    weekdays: [6, 7],
  },
  {
    id: 5,
    name: 'Happy Hour',
    startTime: '18:00',
    endTime: '20:00',
    weekdays: [5, 6],
  },
  {
    id: 6,
    name: 'Soir weekend',
    startTime: '20:00',
    endTime: '23:59',
    weekdays: [5, 6],
  },
];

const CATEGORIES = [
  {
    id: 1,
    name: 'Jus de fruits pressés',
    articles: [1, 3],
    periods: [1, 4],
  },
  {
    id: 2,
    name: 'Menus',
    articles: [4, 5, 6],
    periods: [2, 3],
  },
  {
    id: 3,
    name: 'Softs',
    articles: [11],
    periods: [],
  },
  {
    id: 5,
    name: 'Cocktails',
    articles: [7, 8, 9, 10],
    periods: [2, 5, 6],
  },
];

const ARTICLES = [
  { id: 1, name: "Jus d'orange", price: 4, periods: [] },
  { id: 3, name: 'Jus de mangue', price: 4, periods: [1, 2] },
  { id: 4, name: 'Entrée + Plat', price: 10, periods: [] },
  { id: 5, name: 'Plat + Dessert', price: 9, periods: [] },
  { id: 6, name: 'Entrée + Plat + Dessert', price: 14, periods: [] },
  { id: 7, name: 'Mojito', price: 10, periods: [] },
  { id: 8, name: 'Caïpirinha', price: 9, periods: [] },
  { id: 9, name: 'Cuba libre', price: 8, periods: [5] },
  { id: 10, name: 'Bloody Mary', price: 10, periods: [4] },
  { id: 11, name: 'Coca 33cl', price: 2, periods: [] },
];

const WEB_PRICES = [
  {
    id: 1,
    articleId: 4,
    prices: {
      default: 11,
      periods: {
        3: 12,
      },
    },
  },
  {
    id: 2,
    articleId: 5,
    prices: {
      periods: {
        2: 10,
        3: 11,
      },
    },
  },
  {
    id: 3,
    articleId: 7,
    prices: {
      default: 12,
    },
  },
  {
    id: 4,
    articleId: 8,
    prices: {
      default: 10,
      periods: {
        5: 7,
        6: 8,
      },
    },
  },
  {
    id: 5,
    articleId: 11,
    prices: {
      periods: {
        5: 1,
      },
    },
  },
];

const periodsObj = {};
const categoriesObj = {};
const articlesObj = {};
const webPricesObj = {};

PERIODS.forEach((element) => {
  periodsObj[element.id] = element;
});

CATEGORIES.forEach((element) => {
  categoriesObj[element.id] = element;
});

ARTICLES.forEach((element) => {
  articlesObj[element.id] = element;
});

WEB_PRICES.forEach((element) => {
  webPricesObj[element.id] = element;
});

interface IExpectedResult {
  id: string;
  name: string;
  price: number;
  periods: {
    startTime: string;
    endTime: string;
    weekDays: number[];
  }[];
}

const EXPECTED_RESULT_OBJ = {};
const EXPECTED_RESULT: IExpectedResult[] = [];

// const newResult = Object.values(articlesObj).forEach((item) => {});

// weekDays include same weekDays alors faire une copie de l article en question
