import { useState } from 'react';

import TabsList from '../TabsList/TabsList';
import TabPanel from '../TabPanel/TabPanel';

import './styles.css';

function Tabs({ data }) {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    return (
        <div className="tabs">
            <h1 id="tablist-1">Tablist</h1>
            <TabsList
                data={data}
                selectedTabIndex={selectedTabIndex}
                setSelectedTabIndex={setSelectedTabIndex}
            />
            {data.map(({ content }, index) => (
                <TabPanel
                    content={content}
                    selectedTabIndex={selectedTabIndex}
                    index={index}
                />
            ))}
        </div>
    );
}

export default Tabs;
