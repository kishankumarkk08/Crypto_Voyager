import React from 'react'
import GridCard from './GridCard';

const GridDisplay = ({ data }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-6 m-6 flex-col sm:flex-row">
        {data.map((data, i) => {
          return (<GridCard dataa={data} key={i} />);
        })}
      </div>
    </>
  )
}

export default GridDisplay