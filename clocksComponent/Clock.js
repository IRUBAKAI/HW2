import React from 'react'

const styles = {
    h1: {
        textAlign: 'center'
    }
}

function Clock () {
        const date = new Date();
        return (
        <h1 style={styles.h1}>Time now: {new Date().toLocaleTimeString()}</h1>
    )
}

export default Clock