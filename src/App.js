import React, { Component } from 'react';
import Profil from "./Components/Profil"
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import Message from "./Components/Message/Message";



const profil1 = {
    info: {
        prenom: "Jeanne",
        nom: "Duprez"
    },
    image: {
        src: "https://archzine.fr/wp-content/uploads/2015/04/1-comment-choisir-ses-lunettes-reflet.jpg",
        alt: "ECE PARIS"
    },
    message: {
        texte:"babla"
    }

    }

const profil2 = {
    info: {
        prenom: "Martine",
        nom: "Broutaille"
    },
    image: {
        src: "https://finemchi.com/wp-content/uploads/2018/03/Pacha-profil.jpg",
        alt: "ECE PARIS"
    },
    message: {
        texte:"babla2"
    }
}

const profil3 = {
    info: {
        prenom: "Claude",
        nom: "Salamis"
    },
    image: {
        src: "http://www.ifidelity.fr/blog/wp-content/uploads/2013/06/trompeur-homme-infidele-ou-pas.jpg",
        alt: "ECE PARIS"
    },
    message: {
        texte:"babla3"
    }
}






class App extends Component {


    constructor(props){
        super(props);
        this.state={
            user: {

                info: {
                    prenom: "Jeanne",
                    nom: "Duprez"
                },

                image: {
                    src: "https://archzine.fr/wp-content/uploads/2015/04/1-comment-choisir-ses-lunettes-reflet.jpg",
                    alt: "ECE PARIS"
                },

                message: {
                    texte:"babla",
                }

            },

        }
    }


    fonction1(){

        this.setState({user : profil1});

    }
    fonction2(){

        this.setState({user : profil2});
    }

    fonction3(){

        this.setState({user : profil3});
    }



  render() {
    return (


      <div className="App">

        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
        />


        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#facedebook">Face de Book</Navbar.Brand>
          <Button className="mr-auto">
            <Button onClick={()=>{this.fonction1()}}>Jeanne</Button>
            <Button onClick={()=>{this.fonction2()}}>Martine</Button>
            <Button onClick={()=>{this.fonction3()}}>Claude</Button>
          </Button>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>

          <h2>Profil Face de Book</h2>

          <Profil profilData={this.state.user}/>

          <Message message={this.state.user}/>

      </div>
    );
  }
}

export default App;