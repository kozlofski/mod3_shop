import React from 'react'
import Logo from '../logo/Logo'
import Input from '../input/Input'
import { Search } from '../icons/icons'
import HeaderButtons from '../headerButtons/HeaderButtons'
import Navbar from '../navbar/Navbar'
import Button from '../button/Button'

const userLoggedIn = true

const Header = () => {
    return (
        <div className={`header`}>
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