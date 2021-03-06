import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/header/content.jsx';
import Content from '../components/data/Content.jsx';

class App extends Component {
    render () {
        return (
            <section
                style={{
                    width: '100%',
                }}
            >
                <Header 
                    {...this.props} 
                />
                <Content 
                    {...this.props}
                />
            </section>
        )
    }
}

export default connect(function (state) {
    return {
        move: state.move,
        INIT_LEFT: state.INIT_LEFT,
        loginInf: state.loginInf
    }
})(App)