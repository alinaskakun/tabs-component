import * as React from 'react';

import Tabs from './Tabs';

import { TABS } from '../../constants/data';

export default {
    title: 'Tabs',
    parameters: {
        info: { inline: true },
    },
};

export const DefaultState = () => {
    return (
        <Tabs data={TABS} />

    );
};
