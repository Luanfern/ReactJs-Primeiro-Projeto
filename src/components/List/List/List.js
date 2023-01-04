import PropTypes from 'prop-types'

import ItemList from '../ItemList/ItemList'

function List({ items, addItem, removeItem }) {

    return (
        <>
            {items.length > 0 ? (
                items.map((values, i) => <ItemList key={i} title={values.title} id={values.id} addItem={addItem} removeItem={removeItem}></ItemList>)
            ) : (
                <p>
                    Não há Items para mostrar!
                </p>
            )}
        </>
    )
}

List.propTypes = {
    items: PropTypes.array,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
}

export default List