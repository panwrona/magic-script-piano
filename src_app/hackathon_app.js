import React from 'react';
import { View, Text, Button } from 'magic-script-components';

class HackathonApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = { playC: false,play_C: false, playD: false, playE: false, playF: false, playG: false, playA: false }
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
          fileName={require('../resources/c3.wav')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={true}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  render_C() {
    return (
      <view>
        <audio
          fileName={require('../resources/c_3.wav')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={true}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  renderD() {
    return (
      <view>
        <audio
          fileName={require('../resources/d3.wav')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={true}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  render_D() {
    return (
      <view>
        <audio
          fileName={require('../resources/d_3.wav')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={true}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  renderE() {
    return (
      <view>
        <audio
          fileName={require('../resources/e3.wav')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={true}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  renderF() {
    return (
      <view>
        <audio
          fileName={require('../resources/f3.wav')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={true}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  render_F() {
    return (
      <view>
        <audio
          fileName={require('../resources/f_3.wav')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={true}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  renderG() {
    return (
      <view>
        <audio
          fileName={require('../resources/g3.wav')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={true}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  render_G() {
    return (
      <view>
        <audio
          fileName={require('../resources/g_3.wav')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={true}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  renderA() {
    return (
      <view>
        <audio
          fileName={require('../resources/a3.wav')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={true}
          spatialSoundPosition={{ 'channel': 0, channelPosition: [0, 0, 0] }}
        />
      </view>
    )
  }

  render_A() {
    return (
      <view>
        <audio
          fileName={require('../resources/a_3.wav')}
          action={'start'}
          soundLooping={false}
          soundMute={false}
          soundVolumeLinear={4.0}
          spatialSoundEnable={true}
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
    const { playC,play_C, playD, play_D, playE, playF, play_F, playG, play_G, playA, play_A } = this.state
    return (
      <View name='main-view' alignment={'center-center'}>
        {this.renderNormalKey({ localPosition: [0, 0, 0], title: 'C',onClick: this.onButtonClick2({ playC: false },{ playC: true }) })}
        {this.renderSpecialKey({ localPosition: [0.024, 0.075, 0], title: 'C#', onClick: this.onButtonClick2({ play_C: false },{ play_C: true }) })}
        {this.renderNormalKey({ localPosition: [0.048, 0, 0], title: 'D', onClick: this.onButtonClick2({ playD: false },{ playD: true }) })}
        {this.renderSpecialKey({ localPosition: [0.072, 0.075, 0], title: 'D#', onClick: this.onButtonClick2({ play_D: false },{ play_D: true }) })}
        {this.renderNormalKey({ localPosition: [0.096, 0, 0], title: 'E', onClick: this.onButtonClick2({ playE: false },{ playE: true }) })}
        {this.renderNormalKey({ localPosition: [0.144, 0, 0], title: 'F', onClick: this.onButtonClick2({ playF: false },{ playF: true }) })}
        {this.renderSpecialKey({ localPosition: [0.168, 0.075, 0], title: 'F#', onClick: this.onButtonClick2({ play_F: false },{ play_F: true }) })}
        {this.renderNormalKey({ localPosition: [0.192, 0, 0], title: 'G', onClick: this.onButtonClick2({ playG: false },{ playG: true }) })}
        {this.renderSpecialKey({ localPosition: [0.216, 0.075, 0], title: 'G#', onClick: this.onButtonClick2({ play_G: false },{ play_G: true }) })}
        {this.renderNormalKey({ localPosition: [0.240, 0, 0], title: 'A', onClick: this.onButtonClick2({ playA: false },{ playA: true }) })}
        {this.renderSpecialKey({ localPosition: [0.264, 0.075, 0], title: 'A#', onClick: this.onButtonClick2({ play_A: false },{ play_A: true }) })}
        {this.renderNormalKey({ localPosition: [0.288, 0, 0], title: 'H', onClick: this.onButtonClick({ title: 'H' }) })}
        {playC && this.renderC()}
        {play_C && this.render_C()}
        {playD && this.renderD()}
        {play_D && this.render_D()}
        {playE && this.renderE()}
        {playF && this.renderF()}
        {play_F && this.render_F()}
        {playG && this.renderG()}
        {play_G && this.render_G()}
        {playA && this.renderA()}
        {play_A && this.render_A()}
      </View>
    );
  }
}

export default HackathonApp;
