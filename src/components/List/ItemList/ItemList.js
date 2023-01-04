import PropTypes from 'prop-types'

import style from './ItemList.module.css'

function ItemList({title, id, addItem, removeItem}) {

    function seeMore(){
        alert('O nome do Item é: ' + title)
    }

    function removeItemTwo() {
        removeItem(id)
    }

    return (
        <div className={style.ItemList}>
            <h4>{title} - {id}</h4>
            <div className={style.options}>
                <div onClick={removeItemTwo} className={style.delete}>DELETE</div>
                <div>|</div>
                <div onClick={seeMore} className={style.see}>SEE</div>
            </div>
        </div>
    )
}

ItemList.propTypes = {
    title: PropTypes.string,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
}

export default ItemList