

const RedButton = (props) => {
    // console.log(props)

    const handleClick = (event) => {
        console.log(props.consoleMsg)
    }

    return (
        <button className="red-button" onClick={() => {console.log(props.consoleMsg)}}>
            {props.message}
        </button>
    )
}

export default RedButton