import React, {useState} from "react";


const Counter = () => {
    const [value, setValue] = useState(0)

    function increment() {
        setValue(value + 1);
    }

    function decrement() {
        setValue(value - 1)
    }

    const [input, setInput] = useState('Текст')
    return (
        <div className="Counter">
            <div className="mb-5 mt-4 text-2xl "> {value}</div>
            <button onClick={increment} className="p-4 border-solid border-cyan-300 border-2 mr-5"> increment</button>
            <button onClick={decrement} className="p-4 border-solid border-cyan-300 border-2"> decrement</button>
            <h1>{input}</h1>
            <input
                type="text"
                value={input}
                className="border-solid border-black border-2"
                onChange={event => setInput(event.target.value)}
            />

        </div>
    )
}
export default Counter