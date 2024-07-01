import { useState } from "react"

const ClickCounter = () =>{

    const [count, setCount] = useState(0)

    const handleIncreaseCount = () => {
      setCount(count + 1)
    }

    return (
        <div>
            <p>Count is: {count}</p>
            <button onClick={handleIncreaseCount}>Increase Count</button>
        </div>
    )
}

export default ClickCounter