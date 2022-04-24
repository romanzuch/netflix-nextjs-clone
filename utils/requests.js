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
};

export const genres = [
    'popular', 'action', 'comedy', 'horror', 'scifi'
]