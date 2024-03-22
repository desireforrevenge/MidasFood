import back from '../assets/back.svg'
import next from '../assets/next.svg'

import '../styles/dropdown.scss'

export default function DropDownMenu(props) {
    return (
        <>
        <div className='help'>
        {props.type === 'hot' && <menu className='drop_down_menu hot_menu'>
            <p>Кулинарные творения, требующие нагревания, такие как супы, мясные блюда и гарниры.</p>
        </menu>}

        {props.type === 'cold' && <menu className='drop_down_menu cold_menu'>
            <p>Блюда без нагревания, обычно с использованием свежих ингредиентов: салаты, закуски, десерты.</p>
        </menu>}
        </div>
        </>
    )
}