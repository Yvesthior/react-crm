import React, { Component } from "react";
import Grid from "./Grid";
import Form from "./Form";
import firebase from "../firebase";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  updateData() {
    const db = firebase.firestore();
    db.collection("contacts")
      .get()
      .then(snapshot => {
        let contacts = [];
        snapshot.forEach(doc => {
          let contact = Object.assign({ id: doc.id }, doc.data());
          contacts.push(contact);
        });
        this.setState({ contacts });
      })
      .catch(err => {
        console.log("Erreur!", err);
      });
  }

  deleteData(docId) {
    const db = firebase.firestore();
    db.collection("contacts")
      .doc(docId)
      .delete();
    this.updateData();
  }

  UNSAFE_componentWillMount() {
    this.updateData();
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo-center">
                {" "}
                Contacts
              </a>
            </div>
          </nav>
        </div>

        <div>
          <Form updateData={this.updateData.bind(this)} />
          <Grid
            items={this.state.contacts}
            deleteData={this.deleteData.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
