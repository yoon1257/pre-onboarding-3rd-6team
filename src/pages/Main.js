import React, { useState } from 'react';
import MovingBar from '../components/recordUI/MovingBar';
import Timer from '../components/Timer';
import styled, { css } from 'styled-components';
import logo from '../asset/images/logo.png';
import waveSoundPlay from '../asset/images/wave-sound-blue.png';
import waveSoundStop from '../asset/images/wave-sound-sky.png';

const Main = (props) => {
  const [recordStatus, setStatus] = useState('record');
  return (
    <RecorderContainer>
      <header>
        <Logo>
          <img src={logo} alt='logo' />
          <span>Audio Recorder</span>
        </Logo>
      </header>
      <main className='sound-status-screen'>
        {/* <img className='sound-wave' src={recordStatus === 'stop' ? waveSoundPlay : waveSoundStop} alt='sound-wave' /> */}
        <div className='wave-box'>
          <div className={`sound-wave-box ${recordStatus}`}>
            <img className='play-wave' alt='sound-wave' src={waveSoundPlay} />
          </div>
          <img className='stop-wave' alt='sound-wave' src={waveSoundStop} />
        </div>

        <div className='sound-time'> {recordStatus === 'stop' ? <Timer /> : '0:00'}</div>
      </main>
      <MovingBar recordStatus={recordStatus} setStatus={setStatus} />
    </RecorderContainer>
  );
};

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
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
    height: 55vh;
    /* padding: 5em; */

    /* .sound-wave {
      width: 11em;
    } */
    .wave-box {
      position: relative;
      width: 11em;
      margin: 0 auto;

      .record {
        width: 0;
        transition: width 1s;
      }

      .stop {
        width: 11em;
        transition: width 1s;
      }
    }
    .sound-wave-box {
      position: relative;
      z-index: 100;
      transition: width 1s;
      overflow: hidden;

      .play-wave {
        /* z-index: 10; */
        width: 11em;
        /* height: 11em; */
      }
    }
    .stop-wave {
      z-index: 1;
      position: absolute;
      top: 0px;
      width: 11em;
      height: 11em;
    }

    .sound-time {
      ${FlexCenter};
      margin-top: 1em;
      height: 2em;
      color: #45c7db;
      font-size: 1.5em;
      font-weight: 500;
    }

    .move {
      transform: translateY(-55vh);
      transition: all 0.3s ease-in;
    }
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
