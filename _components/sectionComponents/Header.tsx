"use client"

import React, { useEffect, useState } from 'react'
import Logo from '../basicComponents/Logo'
import Input from '../basicComponents/Input'
import { Search } from '../icons/icons'
import HeaderButtons from '../compoundComponents/HeaderButtons'
import Navbar from '../compoundComponents/Navbar'
import Button from '../basicComponents/Button'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const Header = () => {
    const { data: session, status } = useSession();
    console.log("Session data: ", session, status)

    return (
        <div className={`header container`}>
            <div className={`header-upperHalf`}>
                <Logo />
                <Input id={''} value={''}
                    leftIcon={<Search />}
                    data={{
                        placeholder: 'Search',
                        error: '',
                        label: '',
                        helper: '',
                    }}
                    size="xl" type={''} />
                {status === "authenticated" ? <HeaderButtons /> :
                    <Link href={'/login'} >
                        <Button className="btn btn-xl btn-full btn-primary">Sign In</Button>
                    </Link>}
            </div>
            <div className={`header-lowerHalf`}>
                <Navbar />
            </div>
        </div>
    )
}

export default Header