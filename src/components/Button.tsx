import React from 'react'

type Button = {
    children: JSX.Element | string;
    className?: string;
    onClick?: () =>  void


}

export default function Button({children, className , onClick}: Button) {
  return (
    <div>
          <button className={className} type='submit' onClick={onClick}> {children}</button>
      
    </div>
  )
}
