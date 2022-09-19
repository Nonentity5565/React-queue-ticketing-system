import './Customer.css'
import CounterIcon from './CounterIcon'

export default function Customer (props){

    const counterComponents = props.counters.map(data => {
            return <CounterIcon data={data} key={data.counterNumber}></CounterIcon>
        }
    )

    return(
        <div className="customer-con">
            <div className="action-con">
                <div className="now-serving">Now Serving: {props.nowServing}</div>
                <div className="last-ticket">Last Number: {props.lastNumber}</div>
                <button className="ticket-btn" onClick={props.generateTicket}>Take a Number</button>
            </div>
            <div className="customer-counters-con">
                {counterComponents}
            </div>
        </div>
    )
}