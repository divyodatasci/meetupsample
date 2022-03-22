import { useHistory } from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUp(){
    const history = useHistory();


    function addMeetupHandler(meetupData){
        
     
        fetch('https://react-starter-93281-default-rtdb.firebaseio.com/meetups.json',{
            
            method: 'POST',
            body: JSON.stringify(meetupData),
            header: {
            'Content-Type': 'application/json'  
            }

        }).then(() => {
            history.replace('/');
        });
    }

    
    return(
         <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}


export default NewMeetUp;