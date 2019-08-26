import React from 'react'
import SearchBar from '../components/SearchBar';
import Calendar from '../components/Calendar';
import Explanation from '../components/Explanation';
import Bottom from '../components/Bottom';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__top'>
                <SearchBar/>
                <i className='material-icons notification'>notifications_none</i>
                <div className='user'>
                    <img alt='' src='img/avatar.png' className='user__avatar'/>
                    <span className='user__name'>Boniface Esanji</span>
                </div>
            </div>
            <div className='home__midle'>
                <div>
                    <Explanation/>
                    <Calendar/>
                </div>
                <div>
                    <img alt='' src='img/woman.png' className='woman'/>
                </div>
            </div>
            <div>
                <Bottom/>
            </div>
        </div>
    )
}

export default Home
