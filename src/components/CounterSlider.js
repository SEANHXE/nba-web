import React, {Component} from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

class CounterSlider extends Component {

  state = {
    inputValue: this.props.value,
  };

  onChange = value => {
    const num = Number(value) ? value : this.state.inputValue;
    this.setState({
      inputValue: num,
    });
    this.props.onConutSliderChange(num);
  };

  render() {
    const { inputValue } = this.state;
    return (
        <Row>
          <Col span={12}>
            <Slider
                min={1}
                max={20}
                onChange={this.onChange}
                value={inputValue}
            />
          </Col>
          <Col span={4}>
            <InputNumber
                min={1}
                max={20}
                style={{ marginLeft: 16 }}
                value={inputValue}
                onChange={this.onChange}
            />
          </Col>
        </Row>
    );
  }
}

export default CounterSlider;