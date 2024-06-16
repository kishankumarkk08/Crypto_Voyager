import React from 'react'

const GridDisplay = ({ data }) => {
  return (
    <>
      <div>
        {data.map((item, i) => {
          return (<p key={i} className="text-white">{i + 1}.{item.name}</p>);
        })}
      </div>
    </>
  )
}

export default GridDisplay