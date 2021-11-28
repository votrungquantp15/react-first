import React from 'react'
import ShoppingListItem from './ShoppingListItem'
import ShoppingListTitle from './ShoppingListTitle'

const ShoppingList = () => {
    const data =[
        'Instagram',
        'Whatsapp',
        'Oculus'
    ]
    const username = 'john'
    return (
        <div>
            <ShoppingListTitle title={username}/>
            <ul>
                {
                    data.map(function(item){
                        return <ShoppingListItem  key={item} title={item} />
                    })
                }
                {/* <ShoppingListItem title="Instagram" />
                <ShoppingListItem title="Whatsapp"/>
                <ShoppingListItem title="Oculus" /> */}
            </ul>
        </div>
    )
}

export default ShoppingList
