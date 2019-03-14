import React, { Component } from 'react';
import "./Profil.css";
import Image from "./Image/Image";
import Info from "./Info/Info";

class Profil extends Component {



    render() {


        const { info, image } = this.props.profilData;

        return(
            <div className="profil-container">
                <Image image={image}/>
                <Info info={info} />
            </div>
        )
    }
}

export default Profil;