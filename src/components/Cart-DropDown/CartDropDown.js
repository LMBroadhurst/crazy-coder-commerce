import React from 'react'
import ButtonA from '../Button/ButtonA'

const CartDropDown = ( {displayStatus} ) => {
  return (
    <>
        <section className={`${displayStatus} absolute right-0 z-10 bg-white h-auto w-64 p-2 border-4 rounded-md mt-[-75px] mr-[250px]`}>


            <div className='flex flex-col items-stretch flex-end'>

                <ButtonA type="button" buttonStyle="default" text="Go to Checkout"/>

            </div>

        </section>
    </>
  )
}

export default CartDropDown;

// top-14 right-60