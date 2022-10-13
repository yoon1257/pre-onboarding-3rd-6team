import React, { useContext, useState } from 'react';
import { RecordContext } from '../contexts/Context';
import MovingBar from '../components/recordUI/MovingBar';
import Timer from '../components/Timer';
import styled, { css, keyframes } from 'styled-components';
import logo from '../asset/images/logo.png';
import waveSoundPlay from '../asset/images/wave-sound-blue.png';
import waveSoundStop from '../asset/images/wave-sound-sky.png';

const Main = () => {
  const { timer, recordStatus } = useContext(RecordContext);

  return (
    <RecorderContainer transition={`width ${timer}s`}>
      <header>
        <Logo>
          <img src={logo} alt='logo' />
          <span>Audio Recorder</span>
        </Logo>
      </header>
      <main className='sound-status-screen'>
        <div className='wave-box'>
          <div className={`sound-wave-box ${recordStatus}`}>
            <img className='play-wave' src={waveSoundPlay} alt='sound-wave' />
          </div>
          <img className='stop-wave' src={waveSoundStop} alt='sound-wave' />
        </div>
        <div className='sound-time'>{recordStatus !== 'record' && <Timer />}</div>
      </main>
      <MovingBar />
    </RecorderContainer>
  );
};

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WaveMove = keyframes`
  0% {
    width: 11em;
  }

  100% {
    width: 0;
  }
`;

const RecorderContainer = styled.div`
  height: 100vh;
  overflow-y: hidden;

  @media screen and (min-width: 600px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1100px) {
    font-size: 22px;
  }

  header {
    padding: 0.6em 0;
    box-shadow: 0 3px 10px 0 rgba(32, 32, 32, 0.08);
  }

  .sound-status-screen {
    margin: 0 auto;
    height: 44vh;

    .wave-box {
      position: relative;
      width: 11em;
      margin: 12vh auto 0;

      .record {
        width: 0;
      }

      .stop {
        animation: ${WaveMove} 2s 1s infinite linear alternate;
      }

      .play {
        width: 0;
      }

      .pause {
        width: 11em;
        transition: ${(props) => props.transition};
      }
    }
  }
  .sound-wave-box {
    position: relative;
    z-index: 1;
    overflow: hidden;

    .play-wave {
      width: 11em;
      /* height: 11em; */
    }
  }
  .stop-wave {
    position: absolute;
    top: 0px;
    width: 11em;
    height: 11em;
  }

  .sound-time {
    ${FlexCenter};
    margin: 2em 0;
    height: 2em;
    font-size: 1em;
    font-weight: 400;

    .play,
    .record {
      color: #787878;
    }

    .stop,
    .pause {
      color: #05aac6;
    }
  }

  .move {
    transform: translateY(-55vh);
    transition: all 0.3s ease-in;
  }
`;

export const Logo = styled.div`
  ${FlexCenter};
  flex-direction: column;

  img {
    width: 4.7em;
  }

  span {
    padding: 3px 9px;
    border-radius: 0.8em;
    background-color: #05aac6;
    color: white;
    font-size: 0.75em;
  }
`;

export default Main;
