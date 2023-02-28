import Article from '../components/Article/Article';

export const ARTICLE_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sapien porta erat convallis
    ullamcorper at sed est. Maecenas ac orci ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque
    habitant morbi tristique senectus et.`;


export const TABS = [{
    name: 'Tab 1',
    content:
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="https://www.google.com.ua/">Phasellus scelerisque mauris</a> eu convallis vehicula.
            Vivamus eros libero, pulvinar posuere auctor at, sollicitudin non lacus. Pellentesque vel neque facilisis,
            pulvinar erat ac, accumsan tellus. Nam nec placerat erat. Suspendisse euismod odio id venenatis semper.
            Vivamus augue purus, auctor sit amet lacus.
        </p>,
}, {
    name: 'Tab 2',
    content: <Article
        img='https://picsum.photos/800/900'
        alt='Picture'
        title='Very interesting article'
        text={ARTICLE_TEXT}
    />,
}, {
    name: 'Tab 3',
    content:
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra, odio a consectetur iaculis,
            mi dui ullamcorper nunc, eu sodales mi ex vel lorem. Cras consequat malesuada augue, ut imperdiet dui
            ultrices sed. Suspendisse quis dolor turpis. Ut ultricies molestie accumsan. Morbi dictum ac purus in
            pellentesque. Morbi magna massa.
        </p>,
}];
