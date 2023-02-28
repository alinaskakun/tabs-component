import * as React from 'react';
import { useState } from 'react';

import TabsList from './TabsList';

import { TABS } from '../../constants/data';

export default {
    title: 'Tabs List',
    parameters: {
        info: { inline: true },
    },
};

export const DefaultState = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
        <TabsList
            data={TABS}
            selectedTabIndex={selectedTabIndex}
            setSelectedTabIndex={setSelectedTabIndex}
        />

    );
};
