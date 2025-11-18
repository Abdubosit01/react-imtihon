import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let data = [
    {
      "customer_name": "Jane Cooper",
      "Company": "Microsoft",
      "phoneNumber": "(225) 555-0118",
      "Email": "jane@microsoft.com",
      "Country": "United States",
      "Status": "Active"
    },
    {
      "customer_name": "Floyd Miles",
      "Company": "Yahoo",
      "phoneNumber": "(205) 555-0100",
      "Email": "floyd@yahoo.com",
      "Country": "Kiribati",
      "Status": "Inactive"
    },
    {
      "customer_name": "Ronald Richards",
      "Company": "Adobe",
      "phoneNumber": "(302) 555-0107",
      "Email": "ronald@adobe.com",
      "Country": "Israel",
      "Status": "Inactive"
    },
    {
      "customer_name": "Marvin McKinney",
      "Company": "Tesla",
      "phoneNumber": "(252) 555-0126",
      "Email": "marvin@tesla.com",
      "Country": "Iran",
      "Status": "Active"
    },
    {
      "customer_name": "Jerome Bell",
      "Company": "Google",
      "phoneNumber": "(629) 555-0129",
      "Email": "jerome@google.com",
      "Country": "Réunion",
      "Status": "Active"
    },
    {
      "customer_name": "Kathryn Murphy",
      "Company": "Microsoft",
      "phoneNumber": "(406) 555-0120",
      "Email": "kathryn@microsoft.com",
      "Country": "Curaçao",
      "Status": "Active"
    },
    {
      "customer_name": "Jacob Jones",
      "Company": "Yahoo",
      "phoneNumber": "(208) 555-0112",
      "Email": "jacob@yahoo.com",
      "Country": "Brazil",
      "Status": "Active"
    },
    {
      "customer_name": "Kristin Watson",
      "Company": "Facebook",
      "phoneNumber": "(704) 555-0127",
      "Email": "kristin@facebook.com",
      "Country": "Åland Islands",
      "Status": "Inactive"
    }
  ]

  return (
    <>



      <table>
        {
          data.map((a) => {
            return (
                <div className="car">
                <h2>{a.customer_name}</h2>
                <h2>{a.Company}</h2>
                <h2>{a.phoneNumber}</h2>
                <h2>{a.Email}</h2>
                <h2>{a.Country}</h2>
                <button style={{ background: a.Status < "Inactive" ? 'green' : 'red' }}>{a.Status}</button>
              </div>
            )

          })
        }
      </table>



    </>
  )
}

export default App
