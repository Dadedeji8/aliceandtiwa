import React from 'react'
import { useState } from 'react'
const Dashboard = () => {
    const [dclass, setdClass] = useState(1);
    const [user, setUser] = useState('');
    const handleChange = (e) => {
        setUser(e.target.value);
        
    }
    return (
        <div className='centered' >
            <div className="container p-5 ">
                <div className="card big-card p-5 m-auto">
                    <div className="cardhead">
                        <div className="topic">
                            <div className={dclass===1 ? 'large-round-circle roundcolour p-5  round': dclass===2 ? 'large-round-circle dblue p-5  round':dclass ===3 ? 'large-round-circle dgreen p-5  round' :dclass ===4 ? 'large-round-circle dred p-5  round': 'large-round-circle dyellow p-5  round'}>

                            </div>
                            <h3 className='align-center'>
                                Task Assignment Color
                            </h3>
                        </div>
                    </div>

                    <div className='p5  ball-holders d-flex text-center '>

                       <div className="color-group-holder">
                       <div className="round-holder" onClick={()=>setdClass(1)}>
                        </div>
                        <p className=''>pink</p>
                       </div>


                       <div className="color-group-holder">
                       <div className="round-holder-blue" onClick={()=>setdClass(2)}>
                        </div>
                        <p className=''>Blue</p>
                       </div>
                       

                       <div className="color-group-holder">
                       <div className="round-holder-green" onClick={()=>setdClass(3)}>
                        </div>
                        <p className=''>Green</p>
                       </div>


                       <div className="color-group-holder">
                       <div className="round-holder-red" onClick={()=>setdClass(4)}>
                        </div>
                        <p className=''>Red</p>
                       </div>


                       <div className="color-group-holder">
                       <div className="round-holder-yellow " onClick={()=>setdClass(5)}>
                        </div>
                        <p className=''>Yellow</p>
                       </div>
                    </div>

                        
                            <button className=' m-auto bg-dark btn-d text-light p-2 btn save-color mb-3'>Save Color</button>


                            <div className="card-body text-center fw-bold">
                                <p className="text-center fw-bold">Display Name</p>
                                    <form action="">
                                        <input type="text" className='displayname rounded p-2' onChange={handleChange} />
                                                            <br />
                                        <button className=' m-auto bg-dark my-2 text-light p-2 btn save-color'>Save Display Name</button>

                                    </form>

                                    <div>
                                        <hr />
                                        <p className="fw-200">
                                            Username: {user}
                                        </p>
                                        <hr />
                                    </div>
                            </div>
                
                   
                </div>


            </div>
                <div className="card big-card down m-5 p-5 m-auto text-center">
                   <div className="card-head">
                    <h2 className='py-2'>Application</h2>
                    <hr />
                    <p>teams</p>
                    <hr />
                    <p>Outlook</p>
                   </div>
                </div>

        </div>
    )
}

export default Dashboard