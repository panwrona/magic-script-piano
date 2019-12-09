import React from 'react';
import { View, Text, Button } from 'magic-script-components';

class HackathonApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playSound: false
    };
  }

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

  renderAudio = event => {
    this.setState({ [event.target.id]: false })
    this.setState({ [event.target.id]: true })
  };

  onButtonClick(param) {
    const { value } = param
    return () => {
      switch()
      this.setState({ })
     };
  }


  render() {
    const { playSoundC, playSoundD, playSoundE, playSoundF, playSoundG, playSoundA, playSoundH } = this.state
    return (
      <View name='main-view' alignment={'center-center'}>
        {this.renderNormalKey({ localPosition: [0, 0, 0], title: 'C', onClick: {() => this.renderAudio({playSoundC: true})} })}
        {this.renderSpecialKey({ localPosition: [0.024, 0.075, 0], title: '' })}
        {this.renderNormalKey({ localPosition: [0.048, 0, 0], title: 'D', onClick: {() => this.renderAudio({playSoundD: true})} })}
        {this.renderSpecialKey({ localPosition: [0.072, 0.075, 0], title: '' })}
        {this.renderNormalKey({ localPosition: [0.096, 0, 0], title: 'E', onClick: {() => this.renderAudio({playSoundE: true})} })}
        {this.renderNormalKey({ localPosition: [0.144, 0, 0], title: 'F', onClick: {() => this.renderAudio({playSoundF: true})} })}
        {this.renderSpecialKey({ localPosition: [0.168, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.192, 0, 0], title: 'G', onClick: {() => this.renderAudio({playSoundG: true})} })}
        {this.renderSpecialKey({ localPosition: [0.216, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.240, 0, 0], title: 'A', onClick: {() => this.renderAudio({playSoundA: true})} })}
        {this.renderSpecialKey({ localPosition: [0.264, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.288, 0, 0], title: 'H', onClick: {() => this.renderAudio({playSoundH: true})} })}
        {playSoundC && (<audio 
          fileName={require('../resources/c3.mp3')} 
          action={'start'} 
          soundMute={false} 
          soundLooping={false} 
          soundVolumeLinear={3} 
        />)}
        {playSoundD && (<audio 
          fileName={require('../resources/d3.mp3')} 
          action={'start'} 
          soundMute={false} 
          soundLooping={false} 
          soundVolumeLinear={3} 
        />)}
        {playSoundE && (<audio 
          fileName={require('../resources/e3.mp3')} 
          action={'start'} 
          soundMute={false} 
          soundLooping={false} 
          soundVolumeLinear={3} 
        />)}
        {playSoundF && (<audio 
          fileName={require('../resources/f3.mp3')} 
          action={'start'} 
          soundMute={false} 
          soundLooping={false} 
          soundVolumeLinear={3} 
        />)}
        {playSoundG && (<audio 
          fileName={require('../resources/g3.mp3')} 
          action={'start'} 
          soundMute={false} 
          soundLooping={false} 
          soundVolumeLinear={3} 
        />)}
        {playSoundA && (<audio 
          fileName={require('../resources/a3.mp3')} 
          action={'start'} 
          soundMute={false} 
          soundLooping={false} 
          soundVolumeLinear={3} 
        />)}
      </View>
    );
  }
}

export default HackathonApp;
