import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../Loader/Loader'
import axios from 'axios'
import CoinHeader from './CoinHeader';


const CoinPage = () => {

  const { id } = useParams()
  const [coinData, setCoinData] = useState()
  const [loader, setLoader] = useState(true)
  const [error, setError] = useState(true)

  useEffect(() => {
    if (id) {
      ; (async () => {
        try {
          setError(false)
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
          setLoader(false)
          console.log(response.data)
          setCoinData(response.data)
        } catch (error) {
          console.log("Something went wrong")
          setError(true)
          setLoader(false)
        }
      })()
    }

  }, [id])

  return (
    <>
      <div className='bg-black h-screen w-full overflow-scroll absolute top-0'>
        {loader ?
          (
            <Loader />
          )
          :
          (
            <>
              <div className="overflow-x-scroll mt-36">
                <CoinHeader coinData={coinData} />
              </div>
            </>
          )}


      </div>
    </>
  )
}

export default CoinPage