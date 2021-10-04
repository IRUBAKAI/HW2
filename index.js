import ReactDom from 'react-dom'
import React from 'react'
import terminator from './img/1.JPG'
import anonimus from './img/2.png'
import cat from './img/3.jpg'
import Clock from './clocksComponent/Clock.js'

const styles = {
    div: {
        border: '2px solid #000',
        textAlign: 'center',
        padding: '10px',
        width: '500px',
        margin: '50px'

    },
    img: {
        width: "300px",
        height: "400px"
    },
    ul: {
        listStyle: "none"
    },
    li: {
        margin: '5px',
        fontSize: '20px'
    },
    h1: {
        fontSize: '40px',
        marginLeft: '30px'
    }
}

function FilmInfo (propps) {
    return (
        <>
        <div style={styles.div}>
            <h1 style={styles.h1}>Film Adv</h1>
            <ul style={styles.ul}>
                <li style={styles.li}>Name: {propps.name}</li>
                <li style={styles.li}>filmname: {propps.filmName}</li>
                <li style={styles.li}>years: {propps.years}</li>
                <li style={styles.li}><img style={styles.img} src={terminator} alt=""/></li>
            </ul>
        </div>
        </>
    )
}

function UserInfo (UserInfo) {
    return(
        <>
          <div style={styles.div}>
            <h1 style={styles.h1}>Anonimus Info</h1>
            <ul style={styles.ul}>
                <li style={styles.li}>Name: {UserInfo.name}</li>
                <li style={styles.li}>filmname: {UserInfo.surname}</li>
                <li style={styles.li}>years: {UserInfo.email}</li>
                <li style={styles.li}>skills: {UserInfo.skills}</li>
                <li style={styles.li}><img style={styles.img} src={anonimus} alt=""/></li>
            </ul>
        </div>
        </>
    )
}

function CatInfo (props) {
    return(
        <>
          <div style={styles.div}>
            <h1 style={styles.h1}>Cat Info</h1>
            <ul style={styles.ul}>
                <li style={styles.li}>Name: {props.name}</li>
                <li style={styles.li}>Surname: {props.surname}</li>
                <li style={styles.li}>Color: {props.color}</li>
                <li style={styles.li}>Skills: {props.skills}</li>
                <li style={styles.li}>Size: {props.size}</li>
                <li style={styles.li}><img style={styles.img} src={cat} alt=""/></li>
            </ul>
        </div>
        </>
    )
}

function App () {
    return(
        <>
        <FilmInfo name='James' filmName='terminator' years='1984' src='1.JPG'/>
        <UserInfo name='Anonim' surname='Anonimus' email='anonimus228@gmail.com' skills='name Anonimus'/>
        <CatInfo name='Arnold' surname='Shvarc' color='black' skills='Meow' size="Big Fat"/>
        </>
    ) 
}

function Clocks () {
    return (
        <>
        <Clock/>
        </>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))
ReactDom.render(<Clocks/>, document.getElementById('block-clock'))
