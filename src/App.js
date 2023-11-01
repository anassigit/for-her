import logo from './logo.svg';
import './styles/custom.scss';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'reactstrap';
import backgroundMusic from '../src/thousand-years.mp3';
import satu from './Words For Her/Halo Sayangku.svg'
import dua from './Words For Her/Terima Kasih Ya....svg'
import tiga from './Words For Her/Berkat Kamu.svg'
import empat from './Words For Her/Aku Jadi Jauh Lebih Baik.svg'
import lima from './Words For Her/Dari Versi Aku Sebelumnya.svg'
import enam from './Words For Her/Kamu Mungkin.svg'
import tujuh from './Words For Her/Benci Sama Aku.svg'
import delapan from './Words For Her/Sering Marah Sama Aku.svg'
import sembilan from './Words For Her/Tapi Perlu Diinget.svg'
import sepuluh from './Words For Her/Aku Sangat Sayang Sama Kamu.svg'
import sebelas from './Words For Her/I Present This To You.svg'
import duabelas from './Words For Her/For Ranti.svg'

import firstOneGroup from './pics/group1-1.jpg'
import firstSecGroup from './pics/group1-2.jpg'

function App() {

  const [playButton, setPlayButton] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(0);
  const [picsStart, setPicStart] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    // Pause the audio when the component mounts
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  useEffect(() => {
    if (playButton) {
      const interval = setInterval(() => {
        setButtonVisible((prevButtonVisible) => {
          if (prevButtonVisible < 12) {
            return prevButtonVisible + 1;
          } else {
            clearInterval(interval);
            return prevButtonVisible;
          }
        });
      }, 4000);
    }
  }, [playButton]);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        const promise = audioRef.current.play();
        if (promise !== undefined) {
          promise
            .then(() => {
            })
            .catch((error) => {
              console.error('Auto-play failed:', error);
            });
        }
      }
    };

    if (playButton) {
      playAudio();
    }
  }, [playButton]);

  return (
    <div className="App">
      <audio ref={audioRef} autoPlay={true} src={backgroundMusic} />
      {
        playButton === true ?
          (
            <div>
              {buttonVisible === 0 && (
                <img
                  id='text-forher'
                  src={satu}
                />
              )}
              {buttonVisible === 1 && (
                <img
                  id='text-forher'
                  src={dua}
                />
              )}
              {buttonVisible === 2 && (
                <img
                  id='text-forher'
                  src={tiga}
                />
              )}
              {buttonVisible === 3 && (
                <img
                  id='text-forher'
                  src={empat}
                />
              )}
              {buttonVisible === 4 && (
                <img
                  id='text-forher'
                  src={lima}
                />
              )}
              {buttonVisible === 5 && (
                <img
                  id='text-forher'
                  src={enam}
                />
              )}
              {buttonVisible === 6 && (
                <img
                  id='text-forher'
                  src={tujuh}
                />
              )}
              {buttonVisible === 7 && (
                <img
                  id='text-forher'
                  src={delapan}
                />
              )}
              {buttonVisible === 8 && (
                <img
                  id='text-forher'
                  src={sembilan}
                />
              )}
              {buttonVisible === 9 && (
                <img
                  id='text-forher'
                  src={sepuluh}
                />
              )}
              {buttonVisible === 10 && (
                <img
                  id='text-forher'
                  src={sebelas}
                />
              )}
              {buttonVisible === 11 && (
                <img
                  id='text-forher'
                  src={duabelas}
                />
              )}
            </div>

          )
          :
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "3vw",
            }}
          >
            <img
              className='group-pics-1'
              style={{
                width: "15vw",
              }}
              src={firstOneGroup}
            />
            <img
              className='group-pics-2'
              style={{
                width: "15vw",
              }}
              src={firstSecGroup}
            />
            <img
              className='group-pics-3'
              style={{
                width: "15vw",
              }}
              src={firstSecGroup}
            />
          </div>
        // <button
        //   className='fade-in-btn text-light'
        //   style={{ zIndex: 2, fontSize: '4vw', padding: "3vh 3vw 3vh 3vw" }}
        //   onClick={() => setPlayButton(true)}
        // >
        //   click ini kalo udah nyalain suaranya :)
        // </button>
      }
      <div className="stars" style={{ zIndex: -999 }}>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

    </div >
  );
}

export default App;
