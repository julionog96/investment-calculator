export default function UserInput({ handleInvest }) {

    const inputArray = ['Initial Invest', 'Annual Invest', 'Expected Return', 'Duration']
    const inputContent = 
        inputArray.map((item, index) => (
            <div key={index}>
                <label>{item}</label>
                <input id={index} type="number" onKeyUp={handleInvest}/>
            </div>
        ));

    return (
        <section id="user-input" >
            <div className="input-group"> {inputContent.slice(0,2)} </div>
            <div className="input-group"> {inputContent.slice(2,4)} </div>           
        </section>
    )
}