import React from 'react';

class Watch extends React.Component {
    render(){
        return (
            <div className="Watch">
                <div className="image-container">
                    <img src={this.props.watch.src} alt="" />
                </div>
                <h2>{this.props.watch.title}</h2>
                <h3>{this.props.watch.price}</h3>
            </div>
        )
    }
}