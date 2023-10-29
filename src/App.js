
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import './App.css'
import { useEffect, useState } from 'react';
import { MarkerPosition } from './MarkerPosition';

function App() {
  const [address, setAddress] = useState(null);
  const [ip, setIp] = useState("");
  const checkIpAddress =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
const checkDomain =
  /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/



  useEffect(() => {
    try{
      const getData = async() => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_U9Ve6ZnzU67x1x2fKI7Jdzcq2OOok&ipAddress=142.250.188.238`)

        const data = await res.json()
        setAddress(data);
        // console.log(data);
      }
      getData()
    } catch(error) {
      console.trace(error);
    }
  }, [])

async function getIp() {
  const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_GEO_API_KEY}&${checkIpAddress.test(ip) ? `ip=${ip}` : checkDomain.test(ip) ? `domain=${ip}` : ""}`)

        const data = await res.json()
        setAddress(data);
}

function handleSubmit(e) {
  e.preventDefault()
  getIp() 
  setIp("");
}

  return (
   <>
    <div className="main bg-dark vh-100">
      <div className="top p-5">
        <h3>IP Address Tracker</h3>
        <form onSubmit={handleSubmit}>
        <input type="text" name='ip' id='ip' placeholder='Search here...' required className='mt-2 px-3 py-2 rounded' value={ip} onChange={(e) => setIp(e.target.value)}/>  
        <button type='submit' className='btn btn-dark py-2 mb-1 mx-1'>
            <i className='fa fa-arrow-circle-right'></i>
        </button>
        </form> 
        {address && 
          <div className='bg-white d-flex gap-4 rounded'>
          <div className='border-end p-3'>
          <p>IP ADDRESS</p>
          <h4>{address.ip}</h4>
        </div> 
  
        <div className='border-end p-3'>
          <p>LOCATION</p>
          <h4>{address.location.city}, {address.location.region}</h4>
        </div> 
  
        <div className='border-end p-3'>
          <p>TIMEZONE</p>
          <h4> UTC {address.location.timezone}</h4>
        </div> 
  
        <div className=' p-3'>
          <p>ISP</p>
          <h4>{address.isp}</h4>
        </div> 
          </div>
        }
         
      </div>
      

      {address && 
        <MapContainer center={[address.location.lat, address.location.lng]} zoom={11} scrollWheelZoom={true} style={{height:"370px", width:"100vw"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerPosition address={address}></MarkerPosition>
      </MapContainer>
    
      }
    </div>
   </>
  );
}

export default App;
