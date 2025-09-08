import React from 'react'
import { Bell, CartIcon, Message } from '../icons/icons'
import tempAvatar from "@/app/_assets/avatar.png" // #TODO remove
import Image from 'next/image'

const HeaderButtons = () => {
    return (
        <div className={`header-buttons`}>
            <button className={`icon-header-button`}>
                <CartIcon />
            </button>
            <button className={`icon-header-button`}>
                <Bell />
            </button>
            <button className={`icon-header-button`}>
                <Message />
            </button>
            <button className={`icon-header-button`}>
                <Image src={tempAvatar} alt="productImg" width={40} height={40} >
                </Image>
            </button>
        </div>
    )
}

export default HeaderButtons