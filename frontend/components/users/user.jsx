import React from 'react'


class User extends React.Component {
    constructor(props) {
        super(props)
    }





    render () {
        return (
            <div className="userBody">

                <h2>come back later for more. maybe</h2>
                {/* left user panel */}
                <div className="left_panel">
                    <div className="bioPanel">
                        <div className="panelHeader">
                            <div className="left_avatar">

                            </div>
                            <div className="right_header">
                                <h2 className="userName">{this.props.user.first_name}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="middleBody">
                    <div className="bookings">
                        
                    </div>
                    <div className="reviews">
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default User