const GreetingAgain = ({timeOfDay})=>{
    if(timeOfDay === "morning"){
        return <p>Good morning!</p>
    }
    else if(timeOfDay === "afternoon"){
        return <p>Good afternoon!</p> 
    }
    else{
        return <p>Good Night</p>
    }
}

export default GreetingAgain;