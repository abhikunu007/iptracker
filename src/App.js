
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import './App.css'
import icon from './icon'
import { useEffect, useState } from 'react';

function App() {
  const [address, setAddress] = useState(null);
  const [ip, setIp] = useState("");
  useEffect(() => {
    try{
      const getData = async() => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_U9Ve6ZnzU67x1x2fKI7Jdzcq2OOok&ipAddress=190.211.173.101`)

        const data = await res.json()
        setAddress(data);
        console.log(data);
      }
      getData()
    } catch(error) {
      console.trace(error);
    }
  }, [])
  return (
   <>
    <div className="main bg-dark vh-100">
      <div className="top p-5">
        <h3>IP Address Tracker</h3>
        <form>
        <input type="text" name='ip' id='ip' placeholder='Search IP' required className='mt-2 px-3 py-2 rounded'/>  
        <button type='submit' className='btn btn-dark py-2 mb-1'>
            <i className='fa fa-arrow-circle-right'></i>
        </button>
        </form> 
        {address && 
          <div className='bg-white d-flex gap-4'>
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
          <h4> UTC {address.timezone}</h4>
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
        <Marker icon={icon} position={[address.location.lat, address.location.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    
      }
    </div>
   </>
  );
}

export default App;
