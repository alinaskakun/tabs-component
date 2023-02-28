import * as React from 'react';

import TabPanel from './TabPanel';

import { TABS } from '../../constants/data';

export default {
    title: 'Tab Panel',
    parameters: {
        info: { inline: true },
    },
};

export const DefaultState = () => {
    return (
        <TabPanel
            content={TABS[0].content}
            selectedTabIndex={0}
            index={0}
        />

    );
};
