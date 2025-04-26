export default function UserInputGroup({item}) {

    return (
        <div>
            <label>{item}</label>
            <input id={item} type="number" />
        </div>
    )    
}