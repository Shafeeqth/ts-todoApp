
import { useState } from 'react'
import './App.css'
import ImageHead from './components/ImageHead'
import Input from './components/Input';
import Button from './components/Button';
import type { Items } from './types/utils';
import ItemList from './components/itemList';



function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setItems((prev) => [...prev, {title: inputValue, id: Date.now().toString()}]);
    setInputValue('')


  }


  return (
    <div className='h-[100vh] flex-col justify-center items-center mb-8'>
      <ImageHead />

      <div className="w-[350px]">
        <form onSubmit={handleSubmit} className="mb-5">
          <Input
           inputValue={inputValue}
           setInputValue={ setInputValue}/>

           <Button className="bg-gray-700 w-full p-2">Add</Button>          
        

        </form>
        <div>
          <ItemList items={items} setItems={setItems}/>
          
        </div>
      </div>

    </div>

  )
}

export default App
