
import './App.css'

function App() {
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
        <div className='bg-white d-flex gap-4'>
        <div className='border-end p-3'>
        <p>IP ADDRESS</p>
        <h4>19.0.0.7.7</h4>
      </div> 

      <div className='border-end p-3'>
        <p>LOCATION</p>
        <h4>Motihari</h4>
      </div> 

      <div className='border-end p-3'>
        <p>TIMEZONE</p>
        <h4>IST-7:00</h4>
      </div> 

      <div className=' p-3'>
        <p>ISP</p>
        <h4>Abhishek</h4>
      </div> 
        </div>
         
      </div>
      
      <div className="bottom container" style={{"color":"white"}}>
        Bottom
      </div>
    </div>
   </>
  );
}

export default App;
