import React from 'react'
import { Link } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions/modal_actions'
import { connect } from 'react-redux'


class Footer extends React.Component {

    render () {
        return (
            // <div className="ultraFooter">
                <div className="superFooter">

                    <div className="subFooter">
                        <div className="messageContainer">
                            SuperTramp is created with hours of blood, swearing, and the hope for a New Dawn
                            <div className="subMessage">All pictures were shot by yours truly</div> 
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}


const mSTP = state => ({
    
})

export default connect(null)(Footer)

