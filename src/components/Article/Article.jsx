import './styles.css';

function Article ({ title, text, img, alt }) {
    return (
        <>
            <h2 className="title">{title}</h2>
            <div className="wrapper">
                <img src={img}
                     alt={alt}
                     className="image"
                />
                <p className="text">{text}</p>
            </div>
        </>
    );
}

export default Article;