import "./App.css"
import RedButton from "./RedButton"
import ClickCounter from "./ClickCounter"

function App() {
    // const stateValues = useState(0)
    // const count = stateValues[0]
    // const setCount = stateValues[1]
    

    console.log("the component was rendered")

    return (
        <>
            <ClickCounter/>          
            <RedButton message="Click me" consoleMsg="first button" />
            <RedButton
                message={`I'm another button`}
                consoleMsg="second button"
            />
        </>
    )
}

export default App
