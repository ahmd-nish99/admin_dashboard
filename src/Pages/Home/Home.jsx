import React from 'react'
import Chart from '../../Components/Chart/Chart'
import Featured from '../../Components/Featured/Featured'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import MyTable from '../../Components/Table/Table'
import Widget from '../../Components/Widget/Widget'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
            <Navbar/>
            <div className="widgets">
              <Widget type="user"/>
              <Widget type="order"/>
              <Widget type="earnings"/>
              <Widget type="balalnce"/>
            </div>
            <div className="charts">
              <Featured/>
              <Chart aspect={2/1} title="Last 6 month revenue"/>
            </div>
            <div className="listContainer">
              <div className="listTitle">
                Top Subscriptions
                <MyTable/>
              </div>
            </div>
          </div> 
    </div>
  )
}

export default Home