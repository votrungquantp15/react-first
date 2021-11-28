import React from 'react'

const ShoppingListItem = (props) => {
    console.log(props)
    return (
        <li>
            {props.title}
        </li>
    )
}

export default ShoppingListItem
