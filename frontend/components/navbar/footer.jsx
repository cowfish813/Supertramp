import React from 'react'
import { connect } from 'react-redux'
class Footer extends React.Component {

    render () {
        return (
                <div className="superFooter">

                    <div className="subFooter">
                        <div className="messageContainer">
                            Designed and developed by Nick Cheung using React & Rails
                        </div>
                            <div className="subMessage">Powered by AWS, PostgreSQL, and Heroku</div> 
                    </div>
                </div>
        )
    }
}

export default Footer;