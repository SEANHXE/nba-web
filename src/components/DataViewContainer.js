import React, {Component} from 'react';
import ShotChart from "./ShotChart"
import CounterSlider from "./CounterSlider"
import _ from 'lodash';

class DataViewContainer extends Component {
  state = {
    minCount: 2
  }

  onCountSliderChange = (count) => {
    console.log(count);
    this.setState({
      minCount: count,
    })
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
            value={this.state.minCount}
            onConutSliderChange={ _.debounce(this.onCountSliderChange, 500)}
          />
        </div>
      </div>
    );
  }
}

export default DataViewContainer;