
type Input = {
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>

}

export default function Input({inputValue, setInputValue}: Input) {
  return (
    <div>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='w-full p-2 rounded-sm mb-2' type="text" />
      
    </div>
  )
}
