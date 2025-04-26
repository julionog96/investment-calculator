import UserInputGroup from "./user-input-group"

export default function UserInput() {

    return (
        <section id="user-input" >
            <div className="input-group">
                <UserInputGroup item='Initial Invest'/>  
                <UserInputGroup item='Annual Invest'/>                 
            </div>
            <div className="input-group"> 
                <UserInputGroup item='Expected Return'/>  
                <UserInputGroup item='Duration'/>                 
            </div>

            
        </section>
    )
}