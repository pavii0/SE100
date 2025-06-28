const domContainer = document.getElementById('root'); 
// referring to the id of root, give reference of domContainer 
const root = ReactDOM.createRoot(domContainer);
// since you have imported it, react can find ReactDOM
root.render(
    <App />

)

// React components are essentially 
// functions that you can call within your JSX
// and they each return one element 

// React components must be capitalised 


function WelcomeMessagesTitle() {
    return <p>Welcome Messages</p>
  }
  
  function WelcomeMessageTom() {
    return <li>Welcome Tom from Singapore</li>
  }
  
  function WelcomeMessageJerry() {
    return <li>Welcome Jerry from Malaysia</li>
  }
  
  function WelcomeMessageSarah() {
    return <li>Welcome Sarah from Indonesia</li>
  }
  
  function WelcomeMessage(props) {
    return <li>Welcome {props.name} from {props.country}</li>
  }
  function WelcomeMessagesList() {
    return <ul>
// exercise6
      <WelcomeMessage
        name="Tom"
        country="Singapore"
      />

      <WelcomeMessage
        name="Jerry"
        country="Malaysia"
      />

      <WelcomeMessage
        name="Sarah"
        country="Indonesia"
      />
    </ul>
  }
  
  function WelcomeMessagesSection() {
    return <div>
      <WelcomeMessagesTitle />
      <WelcomeMessagesList />
    </div>
  }
  
  function App() {
    return <div>
      <WelcomeMessagesSection />
    </div>
  }


function Final(){ //have a parent component called app then order the components inside
    return (
        <>
            <WelcomeMessagesSection/>
        </>
    )
}
// now if u want to change the header just change the header dont need to care abt other components
// can reuse components in other pages of website 