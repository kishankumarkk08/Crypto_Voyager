import React from 'react'
import ListCard from './ListCard';

const ListDisplay = ({ data }) => {
  return (
    <>
      <div className="flex flex-wrap sm:gap-4 gap-2 flex-col">
        {data.map((data, i) => {
          return (<ListCard data={data} key={i} />);
        })}
      </div>
    </>
  )
}

export default ListDisplay