export default function UserInput({ handleInvest }) {

    const inputArray = ['Initial Investment', 'Annual Investment', 'Expected Return', 'Duration']
    const inputContent = 
        inputArray.map((item, index) => (
            <p key={index}>
                <label>{item}</label>
                <input id={index} type="number" onKeyUp={handleInvest}/>
            </p>
        ));

    return (
        <section id="user-input" >
            <div className="input-group"> {inputContent.slice(0,2)} </div>
            <div className="input-group"> {inputContent.slice(2,4)} </div>           
        </section>
    )
}