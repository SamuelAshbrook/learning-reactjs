const app = document.getElementById('app');

function Header({ title }) {
    console.log(title);
    return <h1>{title ? title : 'No title'}</h1>;
}

function HomePage() {
    const names = ['Sam', 'Harry', 'Theo', 'Jacob'];
    const [likes, setLikes] = React.useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            {/* Nesting the Header component */}
            <Header title="React"/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))};
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);