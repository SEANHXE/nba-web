import React, {Component} from 'react';
import ShotChart from "./ShotChart"
import CounterSlider from "./CounterSlider"
import _ from 'lodash';
import {Radio, Row, Col, Switch} from "antd";

class DataViewContainer extends Component {
  state = {
    minCount: 2,
    chartType: "hexbin",
    displayTooltip: true,
  }

  onCountSliderChange = (count) => {
    console.log(count);
    this.setState({
      minCount: count,
    })
  }

  onChangeChartType = (e) => {
    console.log(e.target)
    this.setState({
      chartType: e.target.value
    })
  }

  onTooltipChange = (checked) => {
    this.setState({
      displayTooltip: checked,
    })
  }

  render() {
    return (
      <div className="data-view">
        <ShotChart
          playerId={this.props.playerId}
          minCount={this.state.minCount}
          chartType={this.state.chartType}
          displayTooltip={this.state.displayTooltip}
        />
        <div className="filter">
          {
            this.state.chartType === "hexbin" ?
                <CounterSlider
                    value={this.state.minCount}
                    onConutSliderChange={ _.debounce(this.onCountSliderChange, 500)}
                />
                : null
          }

          <br/>
          <Row>
            <Col span={9}>
              <Radio.Group onChange={this.onChangeChartType} >
                <Radio value="hexbin">hexbin</Radio>
                <Radio value="scatter">scatter</Radio>
              </Radio.Group>
            </Col>
            <Col>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                onChange={this.onTooltipChange}
                defaultChecked
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DataViewContainer;