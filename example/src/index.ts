import { loadAudioBuffer } from 'audiobuffer-loader';
import { WaveView } from '../../src';

const context = new AudioContext();

loadAudioBuffer(context, 'audio/orbit.mp3').then(result => {
  const canvas:HTMLCanvasElement = document.querySelector('canvas');
  const wv = new WaveView(canvas, null)
  console.log(result.audioBuffer.getChannelData(0));
});

