import questionsData from '../questions.json';

function Board() {
    const { categories } = questionsData;

    return (
        <div>
            {categories.map((category, index) => (
                <div key={index}>{category.name}</div>
            ))}
        </div>
    );
}

export default Board;