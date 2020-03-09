import React from 'react'
import { Link } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions/modal_actions'


class Footer extends React.Component {


    render () {
        return (
            <div className="superFooter">

                <div className="subFooter">
                    <div className="messageContainer">
                        SuperTramp is created with hours of blood, swearing, tears, and the hope for a New Dawn
                    </div>
                </div>
            </div>
        )
    }
}