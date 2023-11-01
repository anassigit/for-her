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

import firstFstGroup from './pics/group1-1.jpg'
import firstSecGroup from './pics/group1-2.jpg'
import firstThdGroup from './pics/group1-3.jpg'

import secondFstGroup from './pics/group2-1.jpg'
import secondSecGroup from './pics/group2-2.jpg'

import thirdFstGroup from './pics/group3-1.jpg'
import thirdSecGroup from './pics/group3-2.jpg'
import thirdThdGroup from './pics/group3-3.jpg'

import fourthFstGroup from './pics/group4-1.jpg'
import fourthSecGroup from './pics/group4-2.jpg'
import fourthThdGroup from './pics/group4-3.jpg'

import fifthFstGroup from './pics/group5-1.jpg'
import fifthSecGroup from './pics/group5-2.jpg'
import fifthThdGroup from './pics/group5-3.jpg'

import sixthFstGroup from './pics/group6-1.jpg'
import sixthSecGroup from './pics/group6-2.jpg'
import sixthThdGroup from './pics/group6-4.jpg'

import specialFstGroup from './pics/group-special2.jpg'
import specialSecGroup from './pics/group-special4.jpg'
import specialThdGroup from './pics/group-special3.jpg'
import specialFthGroup from './pics/group-special-tidur2.jpg'

import beforeLast from './Words For Her/Liat Semesra Apa Kita.svg'
import lastLast from './Words For Her/I Love You Ranti.svg'

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
    if (buttonVisible > 11) {
      const delay = picsStart === 2 ? 8000 : 9000; // Adjust the delay based on picStart value
      const interval = setInterval(() => {
        setPicStart((prevPicStart) => {
          if (prevPicStart < 12) {
            return prevPicStart + 1;
          } else {
            clearInterval(interval);
            return prevPicStart;
          }
        });
      }, delay);
    }
  }, [buttonVisible]);


  console.log(picsStart)

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
              {
                buttonVisible > 11 && picsStart === 0 && (
                  <div
                    id='photo-container one'
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "3vw",
                    }}
                  >
                    <img
                      className='group-pics-1'
                      style={{
                        height: "40vh"
                      }}
                      src={firstFstGroup}
                    />
                    <img
                      className='group-pics-2'
                      style={{
                        height: "40vh"
                      }}
                      src={firstSecGroup}
                    />
                    <img
                      className='group-pics-3'
                      style={{
                        height: "40vh"
                      }}
                      src={firstThdGroup}
                    />
                  </div>
                )
              }
              {
                buttonVisible > 11 && picsStart === 1 && (
                  <div
                    id='photo-container one'
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "3vw",
                    }}
                  >
                    <img
                      className='group-pics-1'
                      style={{
                        height: "40vh"
                      }}
                      src={secondFstGroup}
                    />
                    <img
                      className='group-pics-2'
                      style={{
                        height: "40vh"
                      }}
                      src={secondSecGroup}
                    />
                  </div>
                )
              }
              {
                buttonVisible > 11 && picsStart === 2 && (
                  <div
                    id='photo-container one'
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "3vw",
                    }}
                  >
                    <img
                      className='group-pics-1'
                      style={{
                        height: "40vh"
                      }}
                      src={thirdFstGroup}
                    />
                    <img
                      className='group-pics-2'
                      style={{
                        height: "40vh"
                      }}
                      src={thirdSecGroup}
                    />
                  </div>
                )
              }

              {
                buttonVisible > 11 && picsStart === 3 && (
                  <div
                    id='photo-container one'
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "3vw",
                    }}
                  >
                    <img
                      className='group-pics-1'
                      style={{
                        height: "40vh"
                      }}
                      src={fourthFstGroup}
                    />
                    <img
                      className='group-pics-2'
                      style={{
                        height: "40vh"
                      }}
                      src={fourthSecGroup}
                    />
                  </div>
                )
              }
              {
                buttonVisible > 11 && picsStart === 4 && (
                  <div
                    id='photo-container one'
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "3vw",
                    }}
                  >
                    <img
                      className='group-pics-1'
                      style={{
                        height: "40vh"
                      }}
                      src={fifthFstGroup}
                    />
                    <img
                      className='group-pics-3'
                      style={{
                        height: "40vh"
                      }}
                      src={fifthThdGroup}
                    />
                  </div>
                )
              }
              {
                buttonVisible > 11 && picsStart === 5 && (
                  <div
                    id='photo-container one'
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "3vw",
                    }}
                  >
                    <img
                      className='group-pics-1'
                      style={{
                        height: "40vh"
                      }}
                      src={sixthFstGroup}
                    />
                    <img
                      className='group-pics-2'
                      style={{
                        height: "40vh"
                      }}
                      src={sixthSecGroup}
                    />
                  </div>
                )
              }
              {
                buttonVisible > 11 && picsStart === 6 && (
                  <img
                    id='last-text'
                    src={beforeLast}
                  />
                )
              }
              {
                buttonVisible > 11 && picsStart === 7 && (
                  <div
                    id='photo-container one'
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "3vw",
                    }}
                  >
                    <img
                      className='group-pics-1'
                      style={{
                        height: "40vh"
                      }}
                      src={specialFstGroup}
                    />
                    <img
                      className='group-pics-2'
                      style={{
                        height: "40vh"
                      }}
                      src={specialSecGroup}
                    />
                  </div>
                )
              }
              {
                buttonVisible > 11 && picsStart === 8 && (
                  <div
                    id='photo-container one'
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "3vw",
                    }}
                  >
                    <img
                      className='group-pics-1'
                      style={{
                        width: "40vh"
                      }}
                      src={specialFthGroup}
                    />
                    <img
                      className='group-pics-2'
                      style={{
                        height: "40vh"
                      }}
                      src={specialThdGroup}
                    />
                  </div>
                )
              }
              {
                buttonVisible > 11 && picsStart === 9 && (
                  <img
                    id='last-text'
                    src={lastLast}
                  />
                )
              }
            </div>
          )
          :
          <button
            className='fade-in-btn text-light'
            style={{ zIndex: 2, fontSize: '4vw', padding: "3vh 3vw 3vh 3vw" }}
            onClick={() => setPlayButton(true)}
          >
            click ini kalo udah nyalain suaranya :)
          </button>
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
