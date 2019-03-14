import React, { Component } from 'react';

class Info extends Component {
    render() {
        const info = this.props.info;

        return (
            <div>
                <h4>{info.nom}</h4>
                <p>{info.prenom}</p>
            </div>
        );
    }
}

export default Info;