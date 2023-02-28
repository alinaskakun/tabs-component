import { createRef } from 'react';

import './styles.css';

function TabsList({ data, selectedTabIndex, setSelectedTabIndex }) {
    const tabListRef = createRef();
    const firstTabRef = createRef();
    const lastTabRef = createRef();

    const getTabRef = (index) => {
        if (index === 0) return firstTabRef;
        if (index === data.length - 1) return lastTabRef;
    };

    const onTabClick = (index) => {
        setSelectedTabIndex(index);
    };

    const moveFocusToTab = (target) => {
        target.focus();
    };

    const onKeyDownHandler = (e, index) => {
        switch (e.key) {
            case 'Enter':
                onTabClick(index);
                e.preventDefault();
                break;
            case 'ArrowLeft':
                moveFocusToTab(tabListRef.current.childNodes[index-1]);
                e.preventDefault();
                break;

            case 'ArrowRight':
                moveFocusToTab(tabListRef.current.childNodes[index+1]);
                e.preventDefault();
                break;

            case 'Home':
                moveFocusToTab(firstTabRef.current);
                e.preventDefault();
                break;

            case 'End':
                moveFocusToTab(lastTabRef.current);
                e.preventDefault();
                break;

            default:
                break;
        }
    };

    return (
        <div role="tablist" aria-labelledby="tablist-1" className="tablist" ref={tabListRef}>
            {data.map(({ name }, index) => (
                <button id={`tab-${index+1}`}
                    type="button"
                    role="tab"
                    aria-selected={selectedTabIndex === index}
                    aria-controls={`tabpanel-${index+1}`}
                    onClick={() => onTabClick(index)}
                    onKeyDown={(e) => onKeyDownHandler(e, index)}
                    ref={getTabRef(index)}
                    tabIndex={selectedTabIndex !== index && -1}
                >
                    <span className="tab">{name}</span>
                </button>
            ))}
        </div>
    )
}

export default TabsList;