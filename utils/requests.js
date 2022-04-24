import constants from '../utils/constants';

export default {
    popular: {
        title: 'Popular',
        url: `/trending/movie/week?api_key=${constants.API_KEY}&language=en-US`,
        section: 'popular',
    },
    action: {
        title: 'Action',
        url: `/discover/movie?api_key=${constants.API_KEY}&with_genres=28`,
        section: '28',
    },
    comedy: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${constants.API_KEY}&with_genres=35`,
        section: '35',
    },
    horror: {
        title: 'Horror',
        url: `/discover/movie?api_key=${constants.API_KEY}&with_genres=27`,
        section: '27',
    },
    scifi: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${constants.API_KEY}&with_genres=878`,
        section: '878',
    },
    adventure: {
        title: 'Adventure',
        url: `/discover/movie?api_key=${constants.API_KEY}&with_genres=12`,
        section: '12',
    },
    crime: {
        title: 'Crime',
        url: `/discover/movie?api_key=${constants.API_KEY}&with_genres=80`,
        section: '80',
    },
    documentary: {
        title: 'Documentary',
        url: `/discover/movie?api_key=${constants.API_KEY}&with_genres=99`,
        section: '99',
    },
    fantasy: {
        title: 'Fantasy',
        url: `/discover/movie?api_key=${constants.API_KEY}&with_genres=14`,
        section: '14',
    },
    mystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${constants.API_KEY}&with_genres=9648`,
        section: '9648',
    },
    thriller: {
        title: 'Thriller',
        url: `/discover/movie?api_key=${constants.API_KEY}&with_genres=53`,
        section: '53',
    },
};

export const genres = [
    'popular', 'action', 'comedy', 'horror', 'scifi', 'adventure', 'crime', 'documentary', 'fantasy', 'mystery', 'thriller'
]