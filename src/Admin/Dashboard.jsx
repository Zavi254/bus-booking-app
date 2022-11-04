import React from "react";

function Dashboard() {
    return (
        <>
            <div className="container mt-4 ">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#07D2FF"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                {/* <h5 className="card-title">0</h5> */}
                                <p className="card-text">Total Bookings</p>
                            </div>
                            <a href="/bookings" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More<i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#18BD28"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                {/* <h5 className="card-title">0</h5> */}
                                <p className="card-text">Total Buses</p>
                            </div>
                            <a href="buses" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More<i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 " style={{backgroundColor:"#FFC01D"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                {/* <h5 className="card-title">0</h5> */}
                                <p className="card-text">Total Customers</p>
                            </div>
                            <a href="customers" className="small-box-footer" style={{textDecoration: 'none', color:'black'}}>More<i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#A764FC"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                {/* <h5 className="card-title">0</h5> */}
                                <p className="card-text">Total Drivers</p>
                            </div>
                            <a href="drivers" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More<i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    {/* <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#FF0A18"}}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">0</h5>
                                <p className="card-text">Total Routes </p>
                            </div>
                            <a href="routes" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div> */}
                    {/* <div className="col">
                        <div className="card h-100" style={{backgroundColor:"blue"}}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body"> */}
                                {/* <h5 className="card-title">0</h5> */}
                                {/* <p className="card-text">Add Admin</p> */}
                            {/* </div>
                            <a href="admin" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default Dashboard;