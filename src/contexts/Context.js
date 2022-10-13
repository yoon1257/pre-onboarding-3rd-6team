import React, { createContext, useState } from 'react';
import useInterval from 'use-interval';

export const RecordContext = createContext({
  onRecAudio: () => {},
  offRecAudio: () => {},
  play: () => {},
  pause: () => {},
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
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [disabled, setDisabled] = useState(true);
  const [timeChange, setTimeChange] = useState(100);
  const [timer, setTimer] = useState('00:00');
  const [playTimer, setPlayTimer] = useState(false);
  const [recordTimer, setRecordTimer] = useState(false);
  const [url, setUrl] = useState('');

  // useInterval(() => {
  //   // Your custom logic here
  //   recordStatus === 'pause' && setCount(count + 1);
  //   console.log(count);
  // }, 1000);

  const onRecAudio = () => {
    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);

      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    // 마이크 사용 권한 획득
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);
      setRecordTimer(!recordTimer);

      analyser.onaudioprocess = function (e) {
        // 3분(180초) 지나면 자동으로 음성 저장 및 녹음 중지
        if (e.playbackTime > timeChange) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
            console.log('track.stop');
          });
          mediaRecorder.stop();
          console.log('stop');
          // 메서드가 호출 된 노드 연결 해제
          analyser.disconnect();
          console.log('disconnect');
          audioCtx.createMediaStreamSource(stream).disconnect();
          console.log('createMediaStreamSource');

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
          console.log('ondataavailable');
          alert('녹음이 완료되었습니다.');
          setStatus('play');
          if (audioUrl) {
            URL.createObjectURL(audioUrl); // 출력된 링크에서 녹음된 오디오 확인 가능
          }

          // File 생성자를 사용해 파일로 변환
          const sound = new File([audioUrl], 'haii-audio', {
            lastModified: new Date().getTime(),
            type: 'audio',
          });
        } else {
          setOnRec(false);
        }
        setTimer(e.playbackTime.toFixed(0));
      };
    });
  };

  // 사용자가 음성 녹음을 중지 했을 때
  const offRecAudio = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e) {
      setAudioUrl(e.data);
      setOnRec(true);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    media.stop();

    // 메서드가 호출 된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();

    if (audioUrl) {
      setUrl(URL.createObjectURL(audioUrl).substr(5) + '.mp4');
      console.log('url', url); // 출력된 링크에서 녹음된 오디오 확인 가능
    }

    // File 생성자를 사용해 파일로 변환
    const sound = new File([audioUrl], 'haii-audio', {
      lastModified: new Date().getTime(),
      type: 'audio',
    });

    setDisabled(false);
  };

  const play = () => {
    const audio = new Audio(URL.createObjectURL(audioUrl));
    audio.loop = false;
    audio.volume = 1;
    audio.play();
  };

  const pause = () => {
    // audio.pause();
    // audio.currentTime = 0;
  };

  const handleSelect = (e) => {
    setTimeChange(e.target.value);
  };
  return (
    <RecordContext.Provider
      value={{ onRecAudio, offRecAudio, play, pause, timer, recordStatus, setStatus, url, handleSelect }}>
      {children}
    </RecordContext.Provider>
  );
};

export default Context;
