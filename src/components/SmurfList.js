import React from 'react';
import Smurf from './Smurf';

import { connect } from "react-redux";

const SmurfList = (props)=> {
    const { smurfs, isLoading } = props;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
       {
           smurfs.map(smurf => {
               return <Smurf smurf={smurf} key={smurf.id}/>
            })
       }
    </div>);
}

const mapToStateProps = (state) => {
    return ({
      smurfs: state.smurfs,
      isLoading: state.isLoading,
      error: state.error
    })
  }

export default connect(mapToStateProps, {})(SmurfList);