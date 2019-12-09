import React from 'react';
import { View, Text, Button } from 'magic-script-components';

class HackathonApp extends React.Component {

  renderNormalKey({
    localPosition = [0, 0, 0],
    title,
    enabled = true,
    roundness = 0.05,
    textColor = [1, 1, 1, 1],
    textSize = 0.03,
    width = 0.05,
    height = 0.3,
    onClick = () => { },
  }) {
    return (
      <view>
      <button
        localPosition={localPosition}
        enabled={enabled}
        textColor={textColor}
        textSize={textSize}
        roundness={roundness}
        width={width}
        height={height}
        onClick={onClick}
      >{title}</button>
       <image
          color={[1, 1, 1, 0.5]}
          localPosition={[localPosition[0], localPosition[1], -0.001]}
          width={width}
          height={height}
         />
      </view>
    );
  }

  renderSpecialKey({
    localPosition = [0, 0, 0],
    title,
    enabled = true,
    roundness = 0.00,
    textColor = [1, 1, 1, 1],
    textSize = 0.03,
    width = 0.04,
    height = 0.15,
    onClick = () => { },
  }) {
    return (
      <view>
        <button
          localPosition={[localPosition[0], localPosition[1], 0.002]}
          enabled={enabled}
          textColor={textColor}
          textSize={textSize}
          roundness={roundness}
          width={width}
          height={height}
          onClick={onClick}
        >{title}</button>
        <image
          color={[0, 0, 0, 1]}
          localPosition={[localPosition[0], localPosition[1], 0.001]}
          width={width}
          height={height}
        />
      </view>
    );
  }

  onButtonClick(param) {
    return () => {  };
  }


  render() {
    return (
      <View name='main-view' alignment={'center-center'}>
        {this.renderNormalKey({ localPosition: [0, 0, 0], title: 'C', onClick: this.onButtonClick({ title: 'C' }) })}
        {this.renderSpecialKey({ localPosition: [0.024, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.048, 0, 0], title: 'D', onClick: this.onButtonClick({ title: 'D' }) })}
        {this.renderSpecialKey({ localPosition: [0.072, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.096, 0, 0], title: 'E', onClick: this.onButtonClick({ title: 'E' }) })}
        {this.renderNormalKey({ localPosition: [0.144, 0, 0], title: 'F', onClick: this.onButtonClick({ title: 'F' }) })}
        {this.renderSpecialKey({ localPosition: [0.168, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.192, 0, 0], title: 'G', onClick: this.onButtonClick({ title: 'G' }) })}
        {this.renderSpecialKey({ localPosition: [0.216, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.240, 0, 0], title: 'A', onClick: this.onButtonClick({ title: 'A' }) })}
        {this.renderSpecialKey({ localPosition: [0.264, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.288, 0, 0], title: 'H', onClick: this.onButtonClick({ title: 'H' }) })}
      </View>
    );
  }
}

export default HackathonApp;
