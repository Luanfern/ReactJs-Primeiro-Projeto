import PropTypes from 'prop-types'

import style from './Header.module.css'

import ItemHeader from './ItemsHeader/ItemsHeader';

function Header({title, ops}) {
    return (
        <div className={style.header}>
            <h2>{title}</h2>
            <div className={style.options}>
                {ops.map((values, i) => <ItemHeader key={i} name={values.name} url={values.url}></ItemHeader>)}
            </div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    ops: PropTypes.array
}

export default Header