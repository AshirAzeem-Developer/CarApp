import React from 'react'
import AAZButton from './AAZButton';
import { useNavigate } from 'react-router-dom';

const AAZCard = (props) => {
    const { carDetails } = props
    console.log();
    const handleChildElementClick = (e) => {
        e.stopPropagation()

        moveScreen();
    }
    const navigate = useNavigate();
    const moveScreen = () => {
        navigate('/booknow')
    }

    return (
        <>
            <div className="container align-items-center">
                <div className="row  justify-content-center">
                    {
                        carDetails.map((x, i) => {
                            return (
                                <div className="col-md-4 d-flex flex-column shadow mx-auto" key={i}>
                                    <div className="col-md-12">
                                        <img src={x.carImage} alt="car1" width='100%' className='w-100' height="auto " />
                                    </div>
                                    <div className="col-md-12 text-start">
                                        <h3 className='text-danger'>{x.car}</h3>
                                    </div>
                                    <div className="col-md-12  ">
                                        <h3>
                                            Car Details
                                        </h3>
                                        <div className="col-md-6 ">
                                            <p>
                                                Car Color : {x.car_color}
                                            </p>
                                        </div>
                                        <div className="col-md-6 ">
                                            <p>
                                                Car Model :{x.car_model}

                                            </p>
                                        </div>
                                        <div className="col-md-6 ">
                                            <p>
                                                Car Model year: {x.car_model_year}
                                            </p>
                                        </div>
                                        <div className="col-md-6 ">
                                            <p>
                                                Car vin : {x.car_vin}
                                            </p>
                                        </div>


                                    </div>
                                    <div className='col-md-12'>
                                        <h5>
                                            Car Description
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, facere. Voluptatibus deleniti quo explicabo nobis nam ipsam amet quas numquam?
                                        </p>
                                    </div>
                                    <div className='col-md-12'>
                                        <AAZButton onClick={(e) => handleChildElementClick(e)} classname="p-2 rounded-pill w-100" label="Book Now" />
                                    </div>


                                </div>

                            )
                        })
                    }


                </div>
            </div>



        </>

    )
}

export default AAZCard