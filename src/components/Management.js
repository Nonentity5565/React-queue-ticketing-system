import ManagementCounter from "./ManagementCounter"
import './Management.css'
export default function Management (props){
    
    const noMoreTicket = <div className='noMoreTicket'>No more tickets!!!</div>
    const managementCounterElements = props.counters.map(data =>{
            return (
                <ManagementCounter 
                    key={data.counterNumber}
                    data={data} 
                    toggleOnline={() => {props.toggleOnline(data.counterNumber)}}
                    serveNew={() => {props.serveNew(data.counterNumber)}}
                    completeTicket={() => {props.completeTicket(data.counterNumber)}}
                    lastServed = {props.lastServed}
                    lastNumber = {props.lastNumber}
                />
            )
    }
    )

    return (
        <>
            {(props.lastServed === props.lastNumber) && noMoreTicket}
            <div className="management-con">
                {managementCounterElements}
            </div>
        </>
    )
}