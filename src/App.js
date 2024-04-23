import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faEllipsisVertical, faCompass, faBitcoinSign, faAngleDown, faAngleUp, faDollarSign, faCircle, faGear, faBell, faFile} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Area, AreaChart} from 'recharts';

function App() {

  const data = [
    {
      "name": "Page A",
      "pv": 2400,
    },
    {
      "name": "Page B",
      "pv": 2600,
    },
    {
      "name": "Page C",
      "pv": 2550,
    },
    {
      "name": "Page D",
      "pv": 3000,
    },
    {
      "name": "Page E",
      "pv": 3200,
    },
    {
      "name": "Page F",
      "pv": 3100,
    },
    {
      "name": "Page G",
      "pv": 3500,
    }
  ]
  const currency ={
    0:'BTC',
    1:'ETH',
    2:'Defi',
    3:'XRP'
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [tab, setTab]= useState(0)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleTab=(value)=>{
    setTab(value)
  }
  const toggleDrop = () => {
    setIsDropOpen(!isDropOpen);
  };
  return (
    <div className="App">
      <div className="mobile-screen-div">
      {/* Navbar */}
      <div className="navbar">
          <h4 className="navbar-button">
          <FontAwesomeIcon className='greyPara' icon={faChevronLeft} />
          </h4>
          <h4 className="navbar-button">Bitcoin Wallet</h4>
          
          <h4 onClick={toggleMenu} className="navbar-button">
          <FontAwesomeIcon className='greyPara' icon={faEllipsisVertical} />
          </h4>
      </div>
      {/* Dropdown */}

      <div onClick={toggleMenu} className={`menu ${isMenuOpen ? '' : 'menu-hidden'}`}>
        <div className="menu-content">
          <ul className='ul'>
            <li className="menu-item" onClick={toggleMenu}><span>Option</span><span> <FontAwesomeIcon icon={faCompass} /></span></li>
            <hr></hr>
            <li className="menu-item" onClick={toggleMenu}><span>Option</span><span> <FontAwesomeIcon icon={faCompass} /></span></li>
            <hr></hr>

            <li className="menu-item" onClick={toggleMenu}><span>Option</span><span> <FontAwesomeIcon icon={faCompass} /></span></li>
            <hr></hr>

            <li className="menu-item" onClick={toggleMenu}><span>Option</span><span> <FontAwesomeIcon icon={faCompass} /></span></li>
            <hr></hr>

            <li className="menu-item" onClick={toggleMenu}><span>Option</span><span> <FontAwesomeIcon icon={faCompass} /></span></li>
            <hr></hr>

            <li className="menu-item" onClick={toggleMenu}><span>Option</span><span> <FontAwesomeIcon icon={faCompass} /></span></li>
            <hr></hr>

          </ul>
        </div>
      </div>
      {/* Card */}
      <br></br>
      <div className="card">
        <div className="row">
          <div className='rowDiv'>
          <h3><FontAwesomeIcon className='dollarSign' style={{backgroundColor:'orange'}} icon={faBitcoinSign} /></h3>
          <p>Bitcoin</p>
          </div>
          <p className='greyPara'>BTC</p>
        </div>
        <div className="row">
          <h2>3.529020 BTC</h2>
        </div>
        <div className="row">
          <p className='greyPara'>$ 19.153 USD</p>
          <div className='profitLoss'>
          <p style={{color:'white',fontSize:'13px'}}>- 2.32%</p>
          </div>
        </div>
        {isDropOpen?
          <div className="row">
          <p className='greyPara buySell'> <FontAwesomeIcon style={{color:'skyblue'}} icon={faDollarSign}></FontAwesomeIcon> BUY</p>
          <p className='greyPara buySell'><FontAwesomeIcon style={{color:'pink'}} icon={faDollarSign}></FontAwesomeIcon> SELL</p>
        </div>:<></>
        }
        
        <div className="arrowRow">
        <span><FontAwesomeIcon style={{cursor:'pointer'}} onClick={toggleDrop} className='greyPara' icon={!isDropOpen?faAngleDown:faAngleUp} /></span>
        </div>
      </div>

      {/* Tabs*/}
      <br></br>
      <div className="tabs">
          <span onClick={()=>{handleTab(0)}} className={tab==0?'tabsSwitch':''}>Day</span>
          <span onClick={()=>{handleTab(1)}} className={tab==1?'tabsSwitch':''}>Week</span>
          <span onClick={()=>{handleTab(2)}} className={tab==2?'tabsSwitch':''}>Month</span>
          <span onClick={()=>{handleTab(3)}} className={tab==3?'tabsSwitch':''}>Year</span>
      </div>
      <div className="cardChart">
      <div className="row">
          <p className='greyPara rateSize'> <FontAwesomeIcon style={{color:'red'}} icon={faCircle}></FontAwesomeIcon> Lower : $ 4.895</p>
          <p className='greyPara rateSize'><FontAwesomeIcon style={{color:'green'}} icon={faCircle}></FontAwesomeIcon> Higher : $ 5.895</p>
        </div>
        <AreaChart
          width={300}
          height={100}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
         <Area type="monotone" dataKey="pv" stroke="#ff8700" fill="#fff7ee" />
     </AreaChart>
<p className='greyPara rateSize'><FontAwesomeIcon style={{color:'#ff8700'}} icon={faCircle}></FontAwesomeIcon> 1 {currency[tab]} = $ 5.483 </p>

     </div>
     <br></br>
     <div className="tabsSmall">
     <div className="cardSmall">
        <div className="row">
          <h3><FontAwesomeIcon className='dollarSign' style={{backgroundColor:'#18b0f9'}} icon={faDollarSign} /></h3>
          <span className='greyPara'>Buy {currency[tab]}</span>
        </div>
      </div>
      <div className="cardSmall">
        <div className="row">
          <h3><FontAwesomeIcon className='dollarSign' style={{backgroundColor:'#fe518a'}} icon={faDollarSign} /></h3>
          <span className='greyPara'>Sell {currency[tab]}</span>
        </div>
      </div>
      </div>
{
  isDropOpen ? <></>:
  <div className="footer">
          <h4 className="navbar-button">
          <FontAwesomeIcon className='greyPara' icon={faFile} />
          </h4>
          <h4 className="navbar-button">
          <FontAwesomeIcon className='greyPara' icon={faCompass} />
          </h4>          <h4 className="navbar-button">
          <FontAwesomeIcon className='greyPara' icon={faBell} />
          </h4>
          
          <h4 onClick={toggleMenu} className="navbar-button">
          <FontAwesomeIcon className='greyPara' icon={faGear} />
          </h4>
      </div>
}
      

    </div>
    </div>
  );
}

export default App;
