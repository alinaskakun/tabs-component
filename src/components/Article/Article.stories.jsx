import * as React from 'react';

import Article from './Article';

import { ARTICLE_TEXT } from '../../constants/data';

export default {
    title: 'Article',
    parameters: {
        info: { inline: true },
    },
};

export const DefaultState = () => {
    return (
        <Article
            img='https://picsum.photos/800/900'
            alt='Picture'
            title='Very interesting article'
            text={ARTICLE_TEXT}
        />
    );
};
