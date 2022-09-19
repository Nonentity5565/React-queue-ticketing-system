import './CounterIcon.css'

export default function CounterIcon({data}) {
    let statusColor;
    let statusText;
    if (data.online) {
        if(data.servingTicket) {
            statusColor = "red"
            statusText = `Now Serving: ${data.servingTicket}`
        } else {
            statusColor = "green"
            statusText = "Counter Open"
        } 
    } else {
        statusColor = "grey"
        statusText = "Counter Offline"
    }

    return(
        <div className="customer-counter-con">
            <div className="online-status" style={{backgroundColor: statusColor}}></div>
            <div className="counter-id">Counter {data.counterNumber}</div>
            <div className="counter-status">{statusText}</div>
        </div>
    )
}