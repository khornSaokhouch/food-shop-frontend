// src/app/data/shop.ts

export interface Shop {
    id: number;
    name: string;
    description: string;
    bannerImage?: string;
    location: string;
    hours: string;
    rating: number;
    phone?: string;
    email?: string;
    contactEmail?: string;
    socialLinks?: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
    };
  }
  
  export const SHOP_LIST: Shop[] = [
    {
      id: 1,
      name: 'DelishEats Grocery',
      description: 'Hand-picked quality groceries, delivered fresh to your kitchen.',
      bannerImage: 'https://s3-media0.fl.yelpcdn.com/bphoto/djd7Z7xNhBTbTmXybqfsWA/1000s.jpg',
      location: '123 Fresh Market Lane, Food City, FC 12345',
      hours: '8:00 AM - 9:00 PM',
      rating: 4.5,
      contactEmail: 'info@delisheats.com',
      phone: '+1 (555) 123-4567',
      socialLinks: {
        facebook: 'https://facebook.com/delisheats',
        twitter: 'https://twitter.com/delisheats',
        instagram: 'https://instagram.com/delisheats',
      },
    },
    {
      id: 2,
      name: 'Nature\'s Basket',
      description: 'Organic and natural products for a healthier lifestyle.',
      bannerImage: 'https://images.jdmagicbox.com/v2/comp/mumbai/74/022p8907774/catalogue/godrej-nature-s-basket-thane-west-thane-grocery-stores-e9ffc.jpg',
      location: '45 Greenway Ave, Wellness Town, WT 54321',
      hours: '9:00 AM - 8:00 PM',
      rating: 4.7,
      contactEmail: 'hello@naturesbasket.com',
      phone: '+1 (555) 234-5678',
      socialLinks: {
        facebook: 'https://facebook.com/naturesbasket',
        instagram: 'https://instagram.com/naturesbasket',
      },
    },
    {
      id: 3,
      name: 'FreshFarm Foods',
      description: 'Fresh produce sourced directly from local farms.',
      bannerImage: 'https://www.freshfarm.org/app/uploads/2025/05/IMG_6315_900x465_acf_cropped-1.jpg',
      location: '78 Country Rd, Farmville, FV 67890',
      hours: '7:00 AM - 7:00 PM',
      rating: 4.3,
      contactEmail: 'contact@freshfarm.com',
      phone: '+1 (555) 345-6789',
      socialLinks: {
        twitter: 'https://twitter.com/freshfarm',
        instagram: 'https://instagram.com/freshfarm',
      },
    },
    {
      id: 4,
      name: 'Urban Grocery',
      description: 'Convenient grocery delivery for busy city life.',
      bannerImage: 'https://source.unsplash.com/1200x400/?city,grocery',
      location: '12 Metro St, Urban City, UC 10101',
      hours: '10:00 AM - 10:00 PM',
      rating: 4.2,
      contactEmail: 'support@urbangrocery.com',
      phone: '+1 (555) 456-7890',
      socialLinks: {
        facebook: 'https://facebook.com/urbangrocery',
        twitter: 'https://twitter.com/urbangrocery',
      },
    },
    {
      id: 5,
      name: 'Healthy Harvest',
      description: 'Premium organic products for health-conscious customers.',
      bannerImage: 'https://source.unsplash.com/1200x400/?healthy,food',
      location: '90 Wellness Blvd, Health City, HC 20202',
      hours: '8:30 AM - 8:30 PM',
      rating: 4.6,
      contactEmail: 'info@healthyharvest.com',
      phone: '+1 (555) 567-8901',
      socialLinks: {
        facebook: 'https://facebook.com/healthyharvest',
        instagram: 'https://instagram.com/healthyharvest',
      },
    },
    {
      id: 6,
      name: 'GreenGrocer',
      description: 'Eco-friendly and sustainable grocery options.',
      bannerImage: 'https://source.unsplash.com/1200x400/?green,grocer',
      location: '34 Eco Lane, Green Town, GT 30303',
      hours: '9:00 AM - 9:00 PM',
      rating: 4.4,
      contactEmail: 'hello@greengrocer.com',
      phone: '+1 (555) 678-9012',
      socialLinks: {
        twitter: 'https://twitter.com/greengrocer',
        instagram: 'https://instagram.com/greengrocer',
      },
    },
    {
      id: 7,
      name: 'Farm to Table',
      description: 'Locally sourced ingredients for your everyday meals.',
      bannerImage: 'https://source.unsplash.com/1200x400/?farm,table',
      location: '56 Local Rd, Farm City, FC 40404',
      hours: '7:30 AM - 8:00 PM',
      rating: 4.8,
      contactEmail: 'contact@farmtotable.com',
      phone: '+1 (555) 789-0123',
      socialLinks: {
        facebook: 'https://facebook.com/farmtotable',
        twitter: 'https://twitter.com/farmtotable',
      },
    },
    {
      id: 8,
      name: 'Gourmet Groceries',
      description: 'Specialty foods and gourmet products for food lovers.',
      bannerImage: 'https://source.unsplash.com/1200x400/?gourmet,food',
      location: '101 Epicure St, Foodie Town, FT 50505',
      hours: '10:00 AM - 9:00 PM',
      rating: 4.5,
      contactEmail: 'info@gourmetgroceries.com',
      phone: '+1 (555) 890-1234',
      socialLinks: {
        facebook: 'https://facebook.com/gourmetgroceries',
        instagram: 'https://instagram.com/gourmetgroceries',
      },
    },
    {
      id: 9,
      name: 'Daily Fresh Market',
      description: 'Fresh daily produce for your family’s needs.',
      bannerImage: 'https://source.unsplash.com/1200x400/?fresh,market',
      location: '22 Market St, Freshville, FV 60606',
      hours: '6:00 AM - 8:00 PM',
      rating: 4.1,
      contactEmail: 'support@dailyfresh.com',
      phone: '+1 (555) 901-2345',
      socialLinks: {
        facebook: 'https://facebook.com/dailyfresh',
        twitter: 'https://twitter.com/dailyfresh',
      },
    },
    {
      id: 10,
      name: 'Organic Oasis',
      description: 'Organic, natural, and healthy groceries for all.',
      bannerImage: 'https://source.unsplash.com/1200x400/?organic,oasis',
      location: '88 Nature Way, Oasis City, OC 70707',
      hours: '9:00 AM - 7:00 PM',
      rating: 4.6,
      contactEmail: 'hello@organicoasis.com',
      phone: '+1 (555) 012-3456',
      socialLinks: {
        twitter: 'https://twitter.com/organicoasis',
        instagram: 'https://instagram.com/organicoasis',
      },
    },
  ];
  