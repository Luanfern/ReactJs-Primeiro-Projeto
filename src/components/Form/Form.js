import PropTypes from 'prop-types'
import { useState } from 'react'
import style from './Form.module.css'

function Form({ addItem }) {

    function submitItem(e) {
        e.preventDefault()
        addItem(title)
    }

    const [title, setTitle] = useState()

    return (
        <div className={style.screen}>
            <form className={style.formCapsule} onSubmit={submitItem}>
                <p  className={style.labelTitle}>Criar um Item na Lista</p>
                <div>
                <label className={style.label} htmlFor='title'>Título: </label>
                <input
                    className={style.input}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                </div>
                <button className={style.buttonSubmit} type='submit'>Adicionar Item</button>
            </form>
        </div>
    )

}

Form.propTypes = {
    addItem: PropTypes.func
}

export default Form