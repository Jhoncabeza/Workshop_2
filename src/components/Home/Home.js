import React from 'react'
import Card from '../Cards/Card'
import Header from '../Header/Header'
import LogoMain from '../Main/LogoMain'

const Home = ({category}) => {
    return (
        <div>
            <Header />
            <LogoMain/>
            <Card productos={category}/>
        </div>
    )
}

export default Home
