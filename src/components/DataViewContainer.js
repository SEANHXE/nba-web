import React, {Component} from 'react';
import ShotChart from "./ShotChart"
import CounterSlider from "./CounterSlider"

class DataViewContainer extends Component {
  state = {
    minCount: 2
  }

  onCountSliderChange = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div className="data-view">
        <ShotChart
          playerId={this.props.playerId}
          minCount={this.state.minCount}
        />
        <div className="filter">
          <CounterSlider
            onConutSliderChange={this.onCountSliderChange}
          />
        </div>
      </div>
    );
  }
}

export default DataViewContainer;