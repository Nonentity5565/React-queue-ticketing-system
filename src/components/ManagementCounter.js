import './ManagementCounter.css'

export default function ManagementCounter (props) {
    return (
        <div className="management-counter-con">
            <div className="counter-number">
                Counter {props.data.counterNumber} - Now Serving: {props.data.servingTicket}
            </div>
            <button 
                className="" 
                onClick={props.toggleOnline}
                disabled={props.data.servingTicket}
            >
                Go {props.data.online ? "Offline" : "Online"}
            </button>
            <button 
                className="" 
                onClick={props.completeTicket}
                disabled={!props.data.servingTicket}
            >
                Complete Ticket
            </button>
            <button 
                className="" 
                onClick={props.serveNew}
                disabled={((props.data.servingTicket || !props.data.online) || !(props.lastServed < props.lastNumber))}
            >
                Call Next Ticket
            </button>
        </div>
    )
}