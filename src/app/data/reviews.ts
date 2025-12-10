export interface Review {
  productId: number;  
  user: string;
  rating: number;     
  comment: string;
  date: string;       
}

export const REVIEWS: Review[] = [
  // Reviews for original products
  { productId: 1, user: 'Alice', rating: 5, comment: 'Very sweet and juicy!', date: '2025-12-01' },
  { productId: 2, user: 'Bob', rating: 4, comment: 'Always fresh and ripe.', date: '2025-12-02' },
  { productId: 12, user: 'Charlie', rating: 5, comment: 'Perfect for steaming and salads.', date: '2025-12-03' },
  { productId: 21, user: 'Dana', rating: 4, comment: 'Great quality milk for my coffee.', date: '2025-12-04' },
  { productId: 32, user: 'Eve', rating: 5, comment: 'Rich flavor, perfect dark roast.', date: '2025-12-05' },
  { productId: 42, user: 'Frank', rating: 4, comment: 'Good crunch, not too salty.', date: '2025-12-06' },
  { productId: 51, user: 'Grace', rating: 5, comment: 'Tender and high quality chicken.', date: '2025-12-07' },
  { productId: 61, user: 'Henry', rating: 5, comment: 'Crusty exterior, soft interior, delicious!', date: '2025-12-08' },
  { productId: 72, user: 'Ivy', rating: 5, comment: 'The best olive oil for dressing.', date: '2025-12-09' },
  { productId: 84, user: 'Jack', rating: 4, comment: 'Classic vanilla, great for sundaes.', date: '2025-12-10' },
  { productId: 93, user: 'Kelly', rating: 5, comment: 'Perfect coarse salt for seasoning.', date: '2025-12-11' },
  
  // Reviews for expanded products
  { productId: 5, user: 'Liam', rating: 4, comment: 'Strawberries were firm and sweet.', date: '2025-12-12' },
  { productId: 17, user: 'Mia', rating: 3, comment: 'Onions were a little small, but fine.', date: '2025-12-13' },
  { productId: 25, user: 'Noah', rating: 5, comment: 'Eggs always arrive fresh and clean.', date: '2025-12-14' },
  { productId: 35, user: 'Olivia', rating: 4, comment: 'Good non-dairy alternative.', date: '2025-12-15' },
  { productId: 45, user: 'Peter', rating: 5, comment: 'High quality jerky, great snack.', date: '2025-12-16' },
  { productId: 52, user: 'Quinn', rating: 5, comment: 'Amazing salmon, definitely recommend.', date: '2025-12-17' },
  { productId: 66, user: 'Rose', rating: 5, comment: 'Flaky and buttery, felt like Paris!', date: '2025-12-18' },
  { productId: 74, user: 'Sam', rating: 4, comment: 'Basmati rice cooks up beautifully fluffy.', date: '2025-12-19' },
  { productId: 86, user: 'Tom', rating: 5, comment: 'Perfect mix for my morning smoothie.', date: '2025-12-20' },
  { productId: 97, user: 'Uma', rating: 4, comment: 'Essential for almost every dish I cook.', date: '2025-12-21' },
  
  // More random reviews
  { productId: 10, user: 'Victor', rating: 4, comment: 'Great for making homemade lemonade.', date: '2025-12-22' },
  { productId: 39, user: 'Wendy', rating: 3, comment: 'Espresso pods are decent, slightly weak.', date: '2025-12-23' },
  { productId: 56, user: 'Xavier', rating: 5, comment: 'Best bacon I have bought online.', date: '2025-12-24' },
  { productId: 69, user: 'Yara', rating: 4, comment: 'Pita bread is soft and pliable.', date: '2025-12-25' },
  { productId: 79, user: 'Zane', rating: 5, comment: 'Use this for all my salad dressings.', date: '2025-12-26' },
  { productId: 81, user: 'Anna', rating: 4, comment: 'Good value for a quick frozen pizza night.', date: '2025-12-27' },
  { productId: 3, user: 'Ben', rating: 5, comment: 'The mangoes were incredibly fragrant.', date: '2025-12-28' },
  { productId: 27, user: 'Chris', rating: 4, comment: 'Crumbled feta adds the perfect tang.', date: '2025-12-29' },
  { productId: 91, user: 'Drew', rating: 5, comment: 'Always need more black pepper!', date: '2025-12-30' },
];