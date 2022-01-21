import React, { useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { connect } from "react-redux";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchSmurfs } from "./actions";

const App = (props)=> {
  const { fetchSmurfs } = props;

  useEffect(()=> {
    fetchSmurfs();
  },[]);

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

export default connect(null, { fetchSmurfs })(App);
