import React from 'react';
import { View, Text, Button } from 'magic-script-components';

class HackathonApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = { playC: false, playD: false, playE: false, playF: false, playG: false, playA: false }
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
		onClick = () => {},
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
		onClick = () => {},
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

  renderC() {
    return (
      <view>
        <audio
          fileName={require('../resources/c3.mp3')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={false}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  renderD() {
    return (
      <view>
        <audio
          fileName={require('../resources/d3.mp3')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={false}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  renderE() {
    return (
      <view>
        <audio
          fileName={require('../resources/e3.mp3')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={false}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  renderF() {
    return (
      <view>
        <audio
          fileName={require('../resources/f3.mp3')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={false}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  renderG() {
    return (
      <view>
        <audio
          fileName={require('../resources/g3.mp3')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={false}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  renderA() {
    return (
      <view>
        <audio
          fileName={require('../resources/a3.mp3')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={false}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }


  onButtonClick(param) {
    return () => {
    };
  }

  onButtonClick2(param, param2) {
		return () => { 
      this.setState(param); 
      this.setState(param2); 
    };
	}


  render() {
    const { playC, playD, playE, playF, playG, playA } = this.state
    return (
      <View name='main-view' alignment={'center-center'}>
        {this.renderNormalKey({ localPosition: [0, 0, 0], title: 'C',onClick: this.onButtonClick2({ playC: false },{ playC: true }) })}
        {this.renderSpecialKey({ localPosition: [0.024, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.048, 0, 0], title: 'D', onClick: this.onButtonClick2({ playD: false },{ playD: true }) })}
        {this.renderSpecialKey({ localPosition: [0.072, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.096, 0, 0], title: 'E', onClick: this.onButtonClick2({ playE: false },{ playE: true }) })}
        {this.renderNormalKey({ localPosition: [0.144, 0, 0], title: 'F', onClick: this.onButtonClick2({ playF: false },{ playF: true }) })}
        {this.renderSpecialKey({ localPosition: [0.168, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.192, 0, 0], title: 'G', onClick: this.onButtonClick2({ playG: false },{ playG: true }) })}
        {this.renderSpecialKey({ localPosition: [0.216, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.240, 0, 0], title: 'A', onClick: this.onButtonClick2({ playA: false },{ playA: true }) })}
        {this.renderSpecialKey({ localPosition: [0.264, 0.075, 0], title: '', onClick: this.onButtonClick({ title: '' }) })}
        {this.renderNormalKey({ localPosition: [0.288, 0, 0], title: 'H', onClick: this.onButtonClick({ title: 'H' }) })}
        {playC && this.renderC()}
        {playD && this.renderD()}
        {playE && this.renderE()}
        {playF && this.renderF()}
        {playG && this.renderG()}
        {playA && this.renderA()}
      </View>
    );
  }
}

export default HackathonApp;
