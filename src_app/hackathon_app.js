import React from 'react';
import { View, Text, Button } from 'magic-script-components';

const octaves = [
  '3', '4', '5'
];

const tones = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

const semi_tones = ['db', 'eb', 'gb', 'ab', 'bb'];

function getSound(sound = "") {
  switch (sound) {
    case "a3": return require(`../resources/a3.wav`)
    case "a4": return require(`../resources/a4.wav`)
    case "a5": return require(`../resources/a5.wav`)
    case "ab3": return require(`../resources/ab3.wav`)
    case "ab4": return require(`../resources/ab4.wav`)
    case "ab5": return require(`../resources/ab5.wav`)
    case "b3": return require(`../resources/b3.wav`)
    case "b4": return require(`../resources/b4.wav`)
    case "b5": return require(`../resources/b5.wav`)
    case "bb3": return require(`../resources/bb3.wav`)
    case "bb4": return require(`../resources/bb4.wav`)
    case "bb5": return require(`../resources/bb5.wav`)
    case "c3": return require(`../resources/c3.wav`)
    case "c5": return require(`../resources/c5.wav`)
    case "c6": return require(`../resources/c6.wav`)
    case "d3": return require(`../resources/d3.wav`)
    case "d4": return require(`../resources/d4.wav`)
    case "d5": return require(`../resources/d5.wav`)
    case "db3": return require(`../resources/db3.wav`)
    case "db4": return require(`../resources/db4.wav`)
    case "db5": return require(`../resources/db5.wav`)
    case "e3": return require(`../resources/e3.wav`)
    case "e4": return require(`../resources/e4.wav`)
    case "e5": return require(`../resources/e5.wav`)
    case "eb3": return require(`../resources/eb3.wav`)
    case "eb4": return require(`../resources/eb4.wav`)
    case "eb5": return require(`../resources/eb5.wav`)
    case "f3": return require(`../resources/f3.wav`)
    case "f4": return require(`../resources/f4.wav`)
    case "f5": return require(`../resources/f5.wav`)
    case "g3": return require(`../resources/g3.wav`)
    case "g4": return require(`../resources/g4.wav`)
    case "g5": return require(`../resources/g5.wav`)
    case "gb3": return require(`../resources/gb3.wav`)
    case "gb4": return require(`../resources/gb4.wav`)
    case "gb5": return require(`../resources/gb5.wav`)
  };
}

class HackathonApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      play_a3: false,
      play_a4: false,
      play_a5: false,
      play_ab3: false,
      play_ab4: false,
      play_ab5: false,
      play_b3: false,
      play_b4: false,
      play_b5: false,
      play_bb3: false,
      play_bb4: false,
      play_bb5: false,
      play_c3: false,
      play_c5: false,
      play_c6: false,
      play_d3: false,
      play_d4: false,
      play_d5: false,
      play_db3: false,
      play_db4: false,
      play_db5: false,
      play_e3: false,
      play_e4: false,
      play_e5: false,
      play_eb3: false,
      play_eb4: false,
      play_eb5: false,
      play_f3: false,
      play_f4: false,
      play_f5: false,
      play_g3: false,
      play_g4: false,
      play_g5: false,
      play_gb3: false,
      play_gb4: false,
      play_gb5: false,
    }
  }

  renderKeys() {
    const objects = []
    for (const [octaveIndex, octave] of octaves.entries()) {
      for (const [toneIndex, tone] of tones.entries()) {
        x = 7 * octaveIndex * 0.048 + toneIndex * 0.048
        objects.push(
          this.renderNormalKey(
            {
              key: `${tone}${octave}`,
              localPosition: [x, 0, 0],
              title: `${tone}${octave}`,
              onClick: this.onButtonClick(`${tone}${octave}`)
            })
        )
      }
      for (const [semiToneIndex, semiTone] of semi_tones.entries()) {
        multiplier = 0
        if (semiTone == 'db') {
          multiplier = 0
        } else if (semiTone == 'eb') {
          multiplier = 1
        } else if (semiTone == 'gb') {
          multiplier = 3
        } else if (semiTone == 'ab') {
          multiplier = 4
        } else if (semiTone == 'bb') {
          multiplier = 5
        }
        x = 7 * octaveIndex * 0.048 + multiplier * 0.048 + 0.024
        objects.push(
          this.renderSpecialKey(
            {
              key: `${semiTone}${octave}`,
              localPosition: [x, 0.075, 0],
              title: `${semiTone}${octave}`,
              onClick: this.onButtonClick(`${semiTone}${octave}`)
            })
        )
      }
    }

    return (
      <view>
        {objects}
      </view>
    )

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
    key = "",
    onClick = () => { }
  }) {
    return (
      <view
        key={key}>
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
          localPosition={[localPosition[0], localPosition[1], -0.005]}
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
    key = ""
  }) {
    return (
      <view
        key={key}>
        <button
          localPosition={[localPosition[0], localPosition[1], 0.009]}
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
          localPosition={[localPosition[0], localPosition[1], 0.005]}
          width={width}
          height={height}
        />
      </view>
    );
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

  renderAudio(sound = "") {
    return (
      <view
      key= {`audio_${sound}`}>
        <audio
          fileName={getSound(`${sound}`)}
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

  onButtonClick(sound = "") {
      switch (sound) {
        case "a3": return () => { this.setState({ play_a3: false }); this.setState({ play_a3: true }); };
        case "a4": return () => { this.setState({ play_a4: false }); this.setState({ play_a4: true }); };
        case "a5": return () => { this.setState({ play_a5: false }); this.setState({ play_a5: true }); };
        case "ab3": return () => { this.setState({ play_ab3: false }); this.setState({ play_ab3: true }); };
        case "ab4": return () => { this.setState({ play_ab4: false }); this.setState({ play_ab4: true }); };
        case "ab5": return () => { this.setState({ play_ab5: false }); this.setState({ play_ab5: true }); };
        case "b3": return () => { this.setState({ play_b3: false }); this.setState({ play_b3: true }); };
        case "b4": return () => { this.setState({ play_b4: false }); this.setState({ play_b4: true }); };
        case "b5": return () => { this.setState({ play_b5: false }); this.setState({ play_b5: true }); };
        case "bb3": return () => { this.setState({ play_bb3: false }); this.setState({ play_bb3: true }); };
        case "bb4": return () => { this.setState({ play_bb4: false }); this.setState({ play_bb4: true }); };
        case "bb5": return () => { this.setState({ play_bb5: false }); this.setState({ play_bb5: true }); };
        case "c3": return () => { this.setState({ play_c3: false }); this.setState({ play_c3: true }); };
        case "c5": return () => { this.setState({ play_c5: false }); this.setState({ play_c5: true }); };
        case "c6": return () => { this.setState({ play_c6: false }); this.setState({ play_c6: true }); };
        case "d3": return () => { this.setState({ play_d3: false }); this.setState({ play_d3: true }); };
        case "d4": return () => { this.setState({ play_d4: false }); this.setState({ play_d4: true }); };
        case "d5": return () => { this.setState({ play_d5: false }); this.setState({ play_d5: true }); };
        case "db3": return () => { this.setState({ play_db3: false }); this.setState({ play_db3: true }); };
        case "db4": return () => { this.setState({ play_db4: false }); this.setState({ play_db4: true }); };
        case "db5": return () => { this.setState({ play_db5: false }); this.setState({ play_db5: true }); };
        case "e3": return () => { this.setState({ play_e3: false }); this.setState({ play_e3: true }); };
        case "e4": return () => { this.setState({ play_e4: false }); this.setState({ play_e4: true }); };
        case "e5": return () => { this.setState({ play_e5: false }); this.setState({ play_e5: true }); };
        case "eb3": return () => { this.setState({ play_eb3: false }); this.setState({ play_eb3: true }); };
        case "eb4": return () => { this.setState({ play_eb4: false }); this.setState({ play_eb4: true }); };
        case "eb5": return () => { this.setState({ play_eb5: false }); this.setState({ play_eb5: true }); };
        case "f3": return () => { this.setState({ play_f3: false }); this.setState({ play_f3: true }); };
        case "f4": return () => { this.setState({ play_f4: false }); this.setState({ play_f4: true }); };
        case "f5": return () => { this.setState({ play_f5: false }); this.setState({ play_f5: true }); };
        case "g3": return () => { this.setState({ play_g3: false }); this.setState({ play_g3: true }); };
        case "g4": return () => { this.setState({ play_g4: false }); this.setState({ play_g4: true }); };
        case "g5": return () => { this.setState({ play_g5: false }); this.setState({ play_g5: true }); };
        case "gb3": return () => { this.setState({ play_gb3: false }); this.setState({ play_gb3: true }); };
        case "gb4": return () => { this.setState({ play_gb4: false }); this.setState({ play_gb4: true }); };
        case "gb5": return () => { this.setState({ play_gb5: false }); this.setState({ play_gb5: true }); };
      }
  }


  render() {
    const {
      play_a3,
      play_a4,
      play_a5,
      play_ab3,
      play_ab4,
      play_ab5,
      play_b3,
      play_b4,
      play_b5,
      play_bb3,
      play_bb4,
      play_bb5,
      play_c3,
      play_c5,
      play_c6,
      play_d3,
      play_d4,
      play_d5,
      play_db3,
      play_db4,
      play_db5,
      play_e3,
      play_e4,
      play_e5,
      play_eb3,
      play_eb4,
      play_eb5,
      play_f3,
      play_f4,
      play_f5,
      play_g3,
      play_g4,
      play_g5,
      play_gb3,
      play_gb4,
      play_gb5,
    } = this.state
    return (
      <View name='main-view' alignment={'center-center'}>
        {this.renderKeys()}
        {play_a3 && this.renderAudio("a3")}
        {play_a4 && this.renderAudio("a4")}
        {play_a5 && this.renderAudio("a5")}
        {play_ab3 && this.renderAudio("ab3")}
        {play_ab4 && this.renderAudio("ab4")}
        {play_ab5 && this.renderAudio("ab5")}
        {play_b3 && this.renderAudio("b3")}
        {play_b4 && this.renderAudio("b4")}
        {play_b5 && this.renderAudio("b5")}
        {play_bb3 && this.renderAudio("bb3")}
        {play_bb4 && this.renderAudio("bb4")}
        {play_bb5 && this.renderAudio("bb5")}
        {play_c3 && this.renderAudio("c3")}
        {play_c5 && this.renderAudio("c5")}
        {play_c6 && this.renderAudio("c6")}
        {play_d3 && this.renderAudio("d3")}
        {play_d4 && this.renderAudio("d4")}
        {play_d5 && this.renderAudio("d5")}
        {play_db3 && this.renderAudio("db3")}
        {play_db4 && this.renderAudio("db4")}
        {play_db5 && this.renderAudio("db5")}
        {play_e3 && this.renderAudio("e3")}
        {play_e4 && this.renderAudio("e4")}
        {play_e5 && this.renderAudio("e5")}
        {play_eb3 && this.renderAudio("eb3")}
        {play_eb4 && this.renderAudio("eb4")}
        {play_eb5 && this.renderAudio("eb5")}
        {play_f3 && this.renderAudio("f3")}
        {play_f4 && this.renderAudio("f4")}
        {play_f5 && this.renderAudio("f5")}
        {play_g3 && this.renderAudio("g3")}
        {play_g4 && this.renderAudio("g4")}
        {play_g5 && this.renderAudio("g5")}
        {play_gb3 && this.renderAudio("gb3")}
        {play_gb4 && this.renderAudio("gb4")}
        {play_gb5 && this.renderAudio("gb5")}
      </View>
    );
  }
}

export default HackathonApp;
