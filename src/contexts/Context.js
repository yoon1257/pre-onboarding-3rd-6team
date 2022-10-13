import React, { createContext, useState } from 'react';

export const RecordContext = createContext({
  onRecAudio: () => {},
  offRecAudio: () => {},
  play: () => {},
  timer: '00:00',

  recordStatus: 'record',
  setStatus: () => {},

  url: '',
  handleSelect: () => {},
});

const Context = ({ children }) => {
  const [recordStatus, setStatus] = useState('record');
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [timeChange, setTimeChange] = useState(100);
  const [timer, setTimer] = useState('00:00');
  const [recordTimer, setRecordTimer] = useState(false);
  const [url, setUrl] = useState('');

  const onRecAudio = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);

      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);
      setRecordTimer(!recordTimer);

      analyser.onaudioprocess = function (e) {
        if (e.playbackTime > timeChange) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();
          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
          };
          console.log('ondataavailable');
          alert('녹음이 완료되었습니다.');
          setStatus('play');
          if (audioUrl) {
            URL.createObjectURL(audioUrl);
          }
        }
        setTimer(e.playbackTime.toFixed(0));
      };
    });
  };

  const offRecAudio = () => {
    media.ondataavailable = function (e) {
      setAudioUrl(e.data);
    };
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });
    media.stop();
    analyser.disconnect();
    source.disconnect();

    if (audioUrl) {
      setUrl(URL.createObjectURL(audioUrl).substr(5) + '.mp4');
    }
    const sound = new File([audioUrl], 'haii-audio', {
      lastModified: new Date().getTime(),
      type: 'audio',
    });
  };

  const play = () => {
    const audio = new Audio(URL.createObjectURL(audioUrl));
    audio.loop = false;
    audio.volume = 1;
    audio.play();
  };

  const handleSelect = (e) => {
    setTimeChange(e.target.value);
  };
  return (
    <RecordContext.Provider
      value={{ onRecAudio, offRecAudio, play, timer, recordStatus, setStatus, url, handleSelect }}>
      {children}
    </RecordContext.Provider>
  );
};

export default Context;
