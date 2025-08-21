function List({ items, category = 'unknown' }) {

    //items.sort((a, b) => a.calories - b.calories);
    items.sort((a, b) => a.name.localeCompare(b.name));

    //const lowCalFruits = items.filter(item => item.calories < 100);

    const listitems = items.map((item) => {
        return <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b> calories 🔥</li>;
    });
    return ( items.length === 0 ?
    <>
    <h1 className="list-title">{category}</h1>
    <ol className="list">
        <li>No items found</li>
    </ol>
    </>
     :
    <>
    <h1 className="list-title">{category}</h1>
    <ol className="list">{listitems}</ol>
    </>
  );
}

export default List;
