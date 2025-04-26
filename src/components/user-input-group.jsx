export default function UserInputGroup({item}) {

    return (
        <>
            <label>{item}</label>
            <input id={item} />
        </>
    )    
}