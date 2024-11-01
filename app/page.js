import LikeButton from './like-button.js';

function Header({ title }) {
    console.log(title);
    return <h1>{title ? title : 'No title'}</h1>;
}

export default function HomePage() {
    const names = ['Sam', 'Harry', 'Theo', 'Jacob'];

    return (
        <div>
            {/* Nesting the Header component */}
            <Header title="React"/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}