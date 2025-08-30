import React from 'react'
import Logo from '../logo/Logo'
import Input from '../input/Input'
import { Search } from '../icons/icons'
import HeaderButtons from '../headerButtons/HeaderButtons'

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
                <HeaderButtons />
            </div>
            <div className={`header-lowerHalf`}></div>
        </div>
    )
}

export default Header