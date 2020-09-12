import React from "react";
import Watch from "../Watches/watches";

class WatchesList extends React.Component {
  render() {
    return (
      <div className="WatchList">
        {this.props.watches.map((watch) => <Watch watch={watch} />)}
      </div>
    );
  }
}

export default WatchesList;