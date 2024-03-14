import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
const Navbar = ({ setSearch }) => {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <div className="nav mt-3">
                <div className="button btn btn-outline-warning  mx-3"
                    onClick={() => setSearch("nature")}
                >Nature</div>
                <div className="button btn btn-outline-primary mx-3"
                    onClick={() => setSearch("travel")}
                >Travel</div>
                <div className="button btn btn-outline-info mx-3"
                    onClick={() => setSearch("city")}
                >City</div>
                <div className="button btn btn-outline-secondary mx-3"
                    onClick={() => setSearch("car")}
                >Car</div>
                <div className="button btn btn-outline-warning mx-3"
                    onClick={() => setSearch("fashion")}
                >Fashion</div>
                <div className="button btn btn-outline-light mx-3"
                    onClick={() => setSearch("animals")}
                >Animals</div>
                <div className="button btn btn-outline-dark text-light mx-3 "
                    onClick={() => setSearch("technology")}
                >Technology</div>
                <div className="button btn btn-outline-warning mx-3"
                    onClick={() => setSearch("business & finance")}
                >Business & Finance</div>
                <div className="button btn btn-outline-primary mx-3"
                    onClick={() => setSearch("tokyo")}
                >Tokyo</div>
                <div className="button btn btn-outline-info mx-3"
                    onClick={() => setSearch("dubai")}
                >Dubai</div>


{/* conditional rendring of home and saved page is done that is either any one of them visible on the ui */}
                {location.pathname == '/saved' ? (
                   <div className="button btn btn-outline-warning mx-3"
                   onClick={() => navigate('/')}
               >Home</div>
                ) : (
                    <div className="button btn btn-outline-warning mx-3"
                        onClick={() => navigate('/saved')}
                    >Saved</div>
                )}










            </div>
            <div className="container my-4" style={{ width: '780px' }}>

                {location.pathname === '/' && (
                       <div className="mb-3">
                       <input
                           type="text"
                           className="form-control bg-dark text-light"
                           id="exampleInputEmail1"
            
                           aria-describedby="emailHelp"
                           onChange={(e) => setSearch(e.target.value)}
                       />
   
                   </div>
                )}
           
            </div>

        </>
    )
}

export default Navbar
