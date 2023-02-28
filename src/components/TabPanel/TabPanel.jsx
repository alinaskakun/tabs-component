import './styles.css';

function TabPanel({ content, selectedTabIndex, index }) {
    return (
        <div id={`tabpanel-${index+1}`}
             role="tabpanel"
             aria-labelledby={`tabpanel-${index+1}`}
             className={selectedTabIndex !== index && "is-hidden"}
        >
            {content}
        </div>
    )
}

export default TabPanel;