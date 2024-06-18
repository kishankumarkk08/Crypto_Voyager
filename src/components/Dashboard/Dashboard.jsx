import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GridDisplay from './GridDisplay'
import ListDisplay from './ListDisplay'
import "../Dashboard/Dashboard.css"
import Search from './Search'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [event, setEvent] = useState("Grid")

  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }

  let searchData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
    || item.symbol.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=100&sparkline=false&precision=2')
      .then((response) => {
        console.log(response)
        setData(response.data)
      })
      .catch((error) => {
        console.log("error", error)
      })
  }, [])

  // useEffect(() => {
  //   ; (async () => {
  //     try {
  //       const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=100&sparkline=false&precision=2')
  //       setData(response.data)
  //     } catch (error) {
  //       console.log("Something went wrong")
  //     }
  //   })()
  // }, [])

  const gridHandle = () => {
    setEvent("Grid")
    document.querySelector(".firstGrid").style.borderBottom = "2px solid #fca311"
    document.querySelector(".list").style.borderBottom = "none"
  }

  const listHandle = () => {
    setEvent("List")
    document.querySelector(".list").style.borderBottom = "2px solid #fca311"
    document.querySelector(".firstGrid").style.borderBottom = "none"
  }


  return (
    <>
      <div className="bg-black h-screen w-full overflow-scroll absolute top-0">
        <div className="body overflow-scroll mt-32">
          <Search search={search} onSearchChange={onSearchChange} />
          <div className="grid grid-cols-12 place-content-center place-items-center m-4 mb-8">
            <div className="col-span-6 hover:text-[#fca311] w-full flex justify-center items-center firstGrid cursor-pointer text-xl text-[#e5e5e5] border-b-2 border-[#fca311] p-2 mb-3" onClick={gridHandle}>
              Grid
            </div>
            <div className="col-span-6 hover:text-[#fca311] w-full flex justify-center items-center list cursor-pointer text-xl text-[#e5e5e5] p-2 mb-3" onClick={listHandle}>
              List
            </div>
          </div>

          <div>
            {event !== 'List' ? <div>
              <GridDisplay data={searchData} />
            </div> :
              <div>
                <ListDisplay data={searchData} />
              </div>}
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard