import React,{useState} from 'react'

const NavLinks = () => {
    const [active,setActive] = useState('home');
    const beActive = (e)=>{
        e.persist();
        console.log(e.target.id  )
        setActive(e.target.id);
    }
    return (
        <div className='menu'>
            <div className='menu__link icon' id='home' onClick={beActive} >
                Home
                {active==='home'?<i className='material-icons'style={{marginTop:'0',fontSize:'0.5rem'}}>lens</i>:null}
             
            </div>
            <div className='menu__link' >
                <i className='material-icons icon' id='mail' onClick={beActive}>mail_outline</i>
                <br/>{active==='mail'?<i className='material-icons'style={{fontSize:'0.5rem'}}>lens</i>:null}
            </div>
            <span className='menu__link'>
                <img alt='' className='icon' src='img/clock.png'  id='clock' onClick={beActive}/>
                <br/>{active==='clock'?<i className='material-icons'style={{fontSize:'0.5rem'}}>lens</i>:null}
            </span>
            <span className='menu__link' >
                <img alt='' className='icon' src='img/calendar.png' id='calendar' onClick={beActive}/>
                <br/>{active==='calendar'?<i className='material-icons'style={{fontSize:'0.5rem'}}>lens</i>:null}
            </span>
        </div>
    )
}

export default NavLinks
