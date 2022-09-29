// Reference
// https://css-tricks.com/making-an-audio-waveform-visualizer-with-vanilla-javascript/

import React from 'react';
import { useAudioContext } from '../_utils/root/audio-context';

export interface AudioVisualizerProps {
  rawData: Blob;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ rawData }) => {
  const audioData = useAudioData(rawData);

  return (
    <div className="flex flex-col justify-center items-center">
      <h3>{audioData.length}</h3>
      <p>{audioData.join(',')}</p>
    </div>
  );
};

const useAudioData = (rawData: Blob) => {
  const audioContext = useAudioContext();
  const [audioData, setAudioData] = React.useState<number[]>([]);
  React.useEffect(() => {
    (async () => {
      if (rawData.size > 0) {
        console.log('rawData', rawData);

        const audioBuffer = await blobToAudioBuffer(audioContext, rawData);
        const data = normalizeData(filterData(audioBuffer));
        setAudioData(data);
      }
    })();
  }, [rawData]);

  return audioData;
};

const blobToAudioBuffer = async (context: AudioContext, blob: Blob): Promise<AudioBuffer> => {
  const arrayBuffer = await blob.arrayBuffer();
  const audioData = await context.decodeAudioData(arrayBuffer);
  return audioData;
};

const filterData = (audioBuffer: AudioBuffer) => {
  const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
  const samples = 20; // Number of samples we want to have in our final data set
  const blockSize = Math.floor(rawData.length / samples); // the number of samples in each subdivision
  const filteredData = [];
  for (let i = 0; i < samples; i++) {
    const blockStart = blockSize * i; // the location of the first sample in the block
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
    }
    filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
  }
  return filteredData;
};

const normalizeData = (filteredData: number[]) => {
  const multiplier = Math.pow(Math.max(...filteredData), -1);
  return filteredData.map((n) => n * multiplier);
};
