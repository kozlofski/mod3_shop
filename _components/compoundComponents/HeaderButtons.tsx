import React from 'react'
import { Bell, CartIcon, Message } from '../icons/icons'
import tempAvatar from "@/app/_assets/avatar.png" // #TODO remove
import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const HeaderButtons = () => {
    return (
        <div className={`header-buttons`}>
            <Link href='/cart'>
                <button className={`icon-header-button`}>
                    <CartIcon />
                </button>
            </Link>
            <button className={`icon-header-button`}>
                <Bell />
            </button>
            <button className={`icon-header-button`}>
                <Message />
            </button>
            <button className={`icon-header-button`} onClick={() => signOut()}>
                <Image src={tempAvatar} alt="productImg" width={40} height={40} />
            </button>
        </div>
    )
}

export default HeaderButtons