import React from 'react'
import { CartIcon } from '../icons/icons'

const CartMiniButton = () => {
    return (
        <button className='absolute bg-secondaryBg w-[32px] h-[32px] flex justify-start pl-[5px] items-center top-[32px] left-[32px] rounded-md stroke-header'>
            <CartIcon />
        </button>
    )
}

export default CartMiniButton