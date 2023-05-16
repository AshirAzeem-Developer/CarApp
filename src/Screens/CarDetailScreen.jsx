import { Circle, CircleOutlined, Star, StarHalf } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import AAZScreenHeader from '../components/AAZScreenHeader'

const CarDetailScreen = () => {
    return (
        <>
            <div className="container ">
                <div className="row py-5">
                    <AAZScreenHeader screenTitle="Car Details" />
                    <div className="col-md-4">
                        <img src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mike-bird-3729464.jpg&fm=jpg" alt="" width="100%" className='w-100' height="100%" />

                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12">
                            <h1>
                                Mercedes
                            </h1>
                        </div>
                        <div className="col-md-12 d-flex align-item-center ">
                            <div className="col-md-6">
                                <h5>
                                    Car Details
                                </h5>

                                <p>
                                    Name : Mercedes
                                </p>
                                <p>
                                    Model : "Montero"
                                </p>
                                <div>
                                    Features
                                    <ul>
                                        <li>

                                            AC
                                        </li>
                                        <li>

                                            GPS
                                        </li>
                                        <li>
                                            Bluetooth

                                        </li>
                                        <li>

                                            USB Port
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-md-6 mx-auto ">
                                <h4>Car Description</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptate dolorem eius rem nam, blanditiis vero deserunt asperiores provident fugiat dolor, magni vel hic iure corrupti dignissimos alias. Quaerat facere corporis odit vitae eaque laborum iusto qui, dicta quam molestiae nam in sunt a iure, tempora eligendi tempore quos culpa.
                                </p>
                            </div>
                            <div className="col-md-12 mx-auto px-5">
                                <h4>Ratings And Reviews</h4>
                                <h5 className='text-danger'>
                                    Ashir Azeem
                                </h5>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <StarHalf />
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptate iure odio.
                                </p>
                                <h5 className='text-danger'>
                                    Availability
                                </h5>
                                <p>Monday || Wednesday || Friday </p>

                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}

export default CarDetailScreen