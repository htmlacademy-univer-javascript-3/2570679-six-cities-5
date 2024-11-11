import { Review } from '../types';

export const ReviewsMock: Review[] =
    [
      {
        id: 'e5f53852-5640-4c33-81f9-208bf32ffcc9',
        text: 'The apartment was absolutely amazing! Spacious, clean, and in the perfect location. We had everything we needed, and the host was incredibly helpful and responsive. I would definitely stay here again!',
        rating: 5,
        date: new Date(2024, 10, 5),
        author: {
          name: 'Lucy Martin',
          avatarSource: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
      },
      {
        id: 'b649560f-1947-46bb-8b9c-15c371855051',
        text: 'Our stay was wonderful! The amenities were top-notch, and the view from the balcony was stunning. It felt like a home away from home. Highly recommend this place for anyone visiting the city.',
        rating: 4,
        date: new Date(2024, 9, 20),
        author: {
          name: 'Michael Brown',
          avatarSource: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
      },
      {
        id: '576d6f98-82a4-4798-8032-ebdfa497ea4f',
        text: 'Fantastic experience! The host was very accommodating, and the apartment was beautifully furnished. The neighborhood was lively, and there were plenty of great restaurants nearby. Worth every penny!',
        rating: 5,
        date: new Date(2024, 8, 15),
        author: {
          name: 'Sylvia Rice',
          avatarSource: 'https://randomuser.me/api/portraits/women/3.jpg',
        },
      },
      {
        id: '61d94ee1-cbcd-4589-9314-62f301226755',
        text: 'Disappointing experience. The apartment wasn\'t as clean as we expected, and there were several broken appliances. The noise from the street was unbearable, making it difficult to get a good night\'s sleep.',
        rating: 2,
        date: new Date(2024, 7, 12),
        author: {
          name: 'James Smith',
          avatarSource: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
      },
      {
        id: '3b09ca16-276c-4556-bc5f-d06b744497e2',
        text: 'I had a terrible stay. The pictures online were misleading, and the apartment looked nothing like them. It was cramped, outdated, and had a persistent smell. I wouldn\'t recommend this place to anyone.',
        rating: 1,
        date: new Date(2024, 6, 25),
        author: {
          name: 'Olivia Wilson',
          avatarSource: 'https://randomuser.me/api/portraits/women/5.jpg',
        },
      },
    ];
