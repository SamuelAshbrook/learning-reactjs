const app = document.getElementById('app');

function Header({ title }) {
    console.log(title);
    return <h1>{title ? title : 'No title'}</h1>;
}

function HomePage() {
    const names = ['Sam', 'Harry', 'Theo', 'Jacob'];

    return (
        <div>
            {/* Nesting the Header component */}
            <Header title="React"/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))};
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);