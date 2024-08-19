import { Items } from '../types/utils'
import Button from './Button'
type ItemList = {
    items: Items[];
    setItems:  React.Dispatch<React.SetStateAction<Items[]>>

}

export default function ItemList({ setItems, items }: ItemList) {

    const handleDelete = (value: string) => {
        setItems((items) => items.filter(data => data.id !== value))
    }


    return items.map(item => (
        <div>
            <p key={item.id}>{item.title}</p> 

            <Button onClick={() => handleDelete(item.id)}> X</Button>

            
        </div>

    ))
}
