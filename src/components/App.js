import React from 'react';
import Header from './Header';
import Management from './Management';
import Customer from './Customer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  const [newestTicket, setNewestTicket] = React.useState(0)
  const [lastServed, setLastServed] = React.useState(0)
  const [counters, setCounters] = React.useState([])
  const [page, setPage] = React.useState('Management');

  React.useEffect(() => {
    setCounters([
      {
        counterNumber: 1,
        online: true,
        servingTicket: null
      },
      {
        counterNumber: 2,
        online: true,
        servingTicket: null
      },
      {
        counterNumber: 3,
        online: true,
        servingTicket: null
      },
      {
        counterNumber: 4,
        online: false,
        servingTicket: null
      }
    ])
  }, []
)

  const notify = () => toast(`Your Ticket is Number ${newestTicket + 1}`)

  function switchPage () {
    setPage((oldPage) => oldPage === 'Management' ? 'Customer' : 'Management')
  }

  function generateTicket () {
    notify()
    setNewestTicket(oldState => oldState+1)
  }

  function serveNew(counterNumber) {
    setCounters(oldState => {
      let newCounters = []
      for (const counter of oldState) {
        if (counter.counterNumber === counterNumber) {
          
          newCounters.push({
            ...counter,
            servingTicket: lastServed + 1
          })
          setLastServed(oldState => (oldState + 1))
        } else {
          newCounters.push(counter)
        }
      }
      return newCounters
    })
  }

  function toggleOnline (counterNumber) {
    setCounters(oldState => {
      let newCounters = []
      for (const counter of oldState) {
        if (counter.counterNumber === counterNumber) {
          newCounters.push({
            ...counter,
            online: !counter.online
          })
        } else {
          newCounters.push(counter)
        }
      }
      return newCounters
    })
  }
  
  function completeTicket (counterNumber) {
    setCounters(oldState => {
      let newCounters = []
      for (const counter of oldState) {
        if (counter.counterNumber === counterNumber) {
          newCounters.push({
            ...counter,
            servingTicket: null
          })
        } else {
          newCounters.push(counter)
        }
      }
      return newCounters
    })
  }
  return (
    <div>
      <Header page={page} switchPage={switchPage}/>
      <ToastContainer />
      <div>
        {page === 'Management' 
        ? 
        <Management 
          lastNumber={newestTicket} 
          lastServed={lastServed} 
          counters={counters} 
          serveNew={serveNew} 
          toggleOnline={toggleOnline} 
          completeTicket={completeTicket}
        /> 
        : 
        <Customer 
          lastNumber={newestTicket} 
          counters={counters} 
          nowServing={lastServed} 
          generateTicket={generateTicket}
        />}
      </div>
    </div>
  )
}