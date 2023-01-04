import PropTypes from 'prop-types'

import style from '../Header.module.css'

function ItemHeader({name, url}) {
    return (
        <a href={url} className={style.option}>{name}</a>
    )
}

ItemHeader.propTypes = {
    name: PropTypes.string,
    ulr: PropTypes.string
}

export default ItemHeader