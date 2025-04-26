import UserInputGroup from "./user-input-group"

export default function UserInput() {
    const inputArray = ['Initial Invest', 'Annual Invest', 'Expected Return', 'Duration']

    const inputContent = (
        inputArray.map((item) => (
            <div>
                <label>{item}</label>
                <input id={item} type="number" />
            </div>
        ))
    )
    console.log(inputContent);
    return (
        <section id="user-input" >
            <div className="input-group"> {inputContent.slice(0,2)} </div>
            <div className="input-group"> {inputContent.slice(2,4)} </div>           
        </section>
    )
}