import React from 'react'
import Logo from '../basicComponents/Logo'
import Input from '../basicComponents/Input'
import { Search } from '../icons/icons'
import HeaderButtons from '../compoundComponents/HeaderButtons'
import Navbar from '../navbar/Navbar'
import Button from '../basicComponents/Button'

const userLoggedIn = true

const Header = () => {
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
                    size="xl" />
                {userLoggedIn ? <HeaderButtons /> :
                    <Button className="btn btn-xl btn-full btn-primary">Sign In</Button>}

            </div>
            <div className={`header-lowerHalf`}>
                <Navbar />
            </div>
        </div>
    )
}

export default Header