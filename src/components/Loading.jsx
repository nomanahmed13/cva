import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = ({height = 350}) => {
  return (
    <div className="skeleton-wrapper">
        <Skeleton height={height} />
    </div>
  )
}

export default Loading