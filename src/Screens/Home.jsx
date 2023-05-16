import React, { useEffect, useState } from 'react'
import AAZSearchBar from '../components/AAZSearchbar'
import { Get } from '../config/apibasemethods'
import AAZCard from '../components/AAZCard'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [car, setCar] = useState("")

  const carList = [
    {
      id: 1,
      carName: "Suzuki"

    },
    {
      id: 2,
      carName: "Suzuki"

    },
    {
      id: 3,
      carName: "Suzuki"

    }
  ]
  const handleChange = (e) => {
    setCar(e.target.value)
  }
  useEffect(() => {
    Get('cars').then((res) => {
      console.log(res.data);


    }).catch((err) => {
      console.log(err);
    })

  }, [])

  const cardata = [
    {
      car: "Mercedes",
      carImage: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mike-bird-3729464.jpg&fm=jpg",
      car_model: "Montero",
      car_color: "Yellow",
      car_model_year: 2002,
      car_vin: "SAJWJ0FF3F8321657",
      price: "$2814.46",
      availability: false
    },
    {
      car: "Volkswagen",
      carImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gYhXyQGR2xFiY3aBRBVIcQHB1CefQCbSLXWtAyP2HQ8K4TBIQHsVL2bt3x_sn2huN5Y&usqp=CAU",
      car_model: "Volkswagen",
      car_color: "red",
      car_model_year: 2002,
      car_vin: "SAJWJ0FF3F8321657",
      price: "$2814.46",
      availability: false
    },
    {
      car: "Mitsubishi",
      carImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07raRTVqHYWM4yjoMhcWrWIZ5KHlinKEVDR_h6VCLqUZWaqKIfHjNknXTzWxWbkdYvJw&usqp=CAU",
      car_model: "Mitsubishi",
      car_color: "purple",
      car_model_year: 2002,
      car_vin: "SAJWJ0FF3F8321657",
      price: "$2814.46",
      availability: false
    },


  ]
  const navigate = useNavigate();
  const moveScreen = () => {
    navigate('/cardetails')
  }



  return (
    <>
      <div className='container align-items-center text-center'>
        <div className="row justify-content-center d-flex  flex-row align-items-center">
          <div className="col-md-6 text-start p-3">
            <img src="https://img.freepik.com/free-vector/car-company-logo-template_1071-3.jpg" width="20%" alt="" />
          </div>
          <div className="col-md-4  " >
            <AAZSearchBar label="Search Car Here" className="w-100 p-3" />
          </div>
        </div>

      </div>
      <div className='container align-items-center py-2'>
        <div className="row d-flex flex-column" onClick={moveScreen} >
          <AAZCard carDetails={cardata} />
        </div>
      </div>
    </>

  )
}

export default Home