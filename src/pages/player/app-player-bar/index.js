import React, { memo, useEffect, useState, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage, formatDate, getPlayUrl } from '@/utils/format-utils.js';
import {
  // getSongDetailAction,
  changePlaySequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction,
} from '../store/actionCreator';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Slider, Tooltip, message } from 'antd';
import { DownloadOutlined, UndoOutlined } from '@ant-design/icons';
import SliderPlaylist from './c-cpns/slider-playlist';
import { Control, Operator, PlayerbarWrapper, PlayerInfo } from './stye';

export default memo(function JMAppPlayerBar() {
  // props/state
  const [currentTime, setCurrentTime] = useState(0); // 用于保存当前播放的时间
  const [isShowBar, setIsShowBar] = useState(false); // 是否显示音量播放条
  const [progress, setProgress] = useState(0); // 滑块进度
  const [isChanging, setIsChanging] = useState(false); // 是否正在滑动
  const [isPlaying, setIsPlaying] = useState(false); // 是否正在播放
  const [isShowSlide, setIsShowSlide] = useState(false); // 是否显示播放列表

  // redux hook
  const dispatch = useDispatch();
  const {
    currentSong,
    playSequence,
    firstLoad,
    lyricList = [],
    currentLyricIndex,
    playlistCount,
  } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
      playSequence: state.getIn(['player', 'playSequence']),
      firstLoad: state.getIn(['player', 'firstLoad']),
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
      playlistCount: state.getIn(['player', 'playListCount']),
    }),
    shallowEqual
  );

  // other hook
  const audioRef = useRef();

  // 设置音频src
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    // 设置音量
    audioRef.current.volume = 0.3;
    // 如果不是首次加载: 播放音乐
    if (!firstLoad) setIsPlaying(true + Math.random());
  }, [currentSong, firstLoad]);

  // 切换歌曲时播放音乐
  useEffect(() => {
    isPlaying && audioRef.current.play();
  }, [isPlaying]);

  // other handle
  const picUrl = currentSong.al && currentSong.al.picUrl; // 图片url
  const songName = currentSong.name; // 歌曲名字
  const singerName = currentSong.ar && currentSong.ar[0].name; //作者名字
  const duration = currentSong.dt; //播放总时间
  const songUrl = getPlayUrl(currentSong.id); // 歌曲URL

  // other function
  // 点击播放或暂停按钮后音乐
  const playMusic = useCallback(() => {
    // 设置src属性
    setIsPlaying(!isPlaying);
    // 播放音乐
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  }, [isPlaying]);

  // 歌曲播放触发
  function timeUpdate(e) {
    // 没有在滑动滑块时触发(默认时没有滑动)
    let currentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(currentTime * 1000);
      setProgress(((currentTime * 1000) / duration) * 100);
    }

    // 当前音乐处于播放状态(用于搜索音乐,点击item播放音乐时使用)
    if (currentTime > 0.1 && currentTime < 0.5) setIsPlaying(true);

    // 获取当前播放歌词
    let i = 0; //用于获取歌词的索引
    // 2.遍历歌词数组
    for (; i < lyricList.length; i++) {
      const item = lyricList[i];
      if (currentTime * 1000 < item.totalTime) {
        // 4.跳出循环
        break;
      }
    }
    // 对dispatch进行优化,如果index没有改变,就不进行dispatch
    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1));
    }

    // 展示歌词
    const lyricContent = lyricList[i - 1] && lyricList[i - 1].content;
    lyricContent &&
      message.open({
        key: 'lyric',
        content: lyricContent,
        duration: 0,
        className: 'lyric-css',
      });

    // 如果显示播放列表那么不展示歌词
    isShowSlide && message.destroy('lyric');
  }

  // 滑动滑块时触发
  const sliderChange = useCallback(
    (value) => {
      // 滑动滑块时:更改标识变量为false(touch move for changing state),此时不会触发onTimeUpdate(歌曲播放事件)
      setIsChanging(true);
      // 更改"当前播放时间"要的是毫秒数: 241840(总毫秒)   1 * 241840 / 1000 241.84 / 60  4.016667
      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime);
      // 更改进度条值
      setProgress(value);
    },
    [duration]
  );

  // 手指抬起时触发
  const slideAfterChange = useCallback(
    (value) => {
      // 重新设置当前播放时长 value(进度)/100 * duration(总毫秒数) / 1000 得到当前播放的"秒数"
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      // 设置当前播放时间的state,设置的是'毫秒',所以需要*1000
      setCurrentTime(currentTime * 1000);
      setIsChanging(false);
      // 更改播放状态
      setIsPlaying(true);
      // 播放音乐
      audioRef.current.play();
    },
    [duration, audioRef]
  );

  // 改变播放列表是否显示
  const changePlaylistShow = useCallback(() => {
    setIsShowSlide(!isShowSlide);
  }, [isShowSlide]);

  // 更改音量
  function changingVolume(value) {
    audioRef.current.volume = value / 100;
  }

  // 更改播放顺序
  const changeSequence = () => {
    let currentSequence = playSequence;
    currentSequence++;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changePlaySequenceAction(currentSequence));
  };

  // 切换歌曲(点击播放下一首或上一首音乐)
  const changeSong = (tag) => {
    // 首先判断播放列表中是否存在音乐，再决定是否播放
    if (playlistCount < 1) {
      message.error('请添加播放列表', 0.5);
      return;
    }
    // 需要需要派发action,所以具体逻辑在actionCreator中完成
    dispatch(changeCurrentIndexAndSongAction(tag));
    setIsPlaying(true + Math.random()); // 更改播放状态图标
  };

  // 切换下一首歌曲,不播放音乐
  const nextMusic = (tag) => {
    // 需要需要派发action,所以具体逻辑在actionCreator中完成
    dispatch(changeCurrentIndexAndSongAction(tag));
    setIsPlaying(false);
  };

  // 当前歌曲播放结束后
  function handleTimeEnd() {
    // 单曲循环
    if (playSequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      // 播放下一首
      dispatch(changeCurrentIndexAndSongAction(1));
      // 更改播放状态
      setIsPlaying(true + Math.random());
    }
  }

  // 播放音乐
  const forcePlayMusic = () => {
    setIsPlaying(true + Math.random());
  };

  // 重新播放音乐
  const refreshMusic = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <PlayerbarWrapper className="sprite_player">
      <div className="w980 content">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_player pre"
            onClick={(e) => changeSong(-1)}
          ></button>
          <button className="sprite_player play" onClick={playMusic}></button>
          <button
            className="sprite_player next"
            onClick={(e) => changeSong(1)}
          ></button>
        </Control>
        <PlayerInfo>
          <NavLink
            to={{
              pathname: '/discover/song',
            }}
            className="image"
          >
            <img src={getSizeImage(picUrl, 35)} alt="" />
          </NavLink>
          <div className="play-detail">
            <div className="song-info">
              <NavLink to="/discover/song" className="song-name">
                {songName}
              </NavLink>
              <a href="/author" className="no-link singer-name">
                {singerName}
              </a>
            </div>
            <Slider
              defaultValue={0}
              value={progress}
              onChange={sliderChange}
              onAfterChange={slideAfterChange}
            />
          </div>
          <div className="song-time">
            <span className="now-time">{formatDate(currentTime, 'mm:ss')}</span>
            <span className="total-time">
              {' '}
              / {duration && formatDate(duration, 'mm:ss')}
            </span>
          </div>
        </PlayerInfo>
        <Operator playSequence={playSequence}>
          <div className="left">
            <Tooltip title="下载音乐">
              <a
                download={currentSong && currentSong.name}
                target="_blank"
                rel="noopener noreferrer"
                href={songUrl}
              >
                <DownloadOutlined />
              </a>
            </Tooltip>
            <Tooltip title="重新播放">
              <UndoOutlined className="refresh" onClick={refreshMusic} />
            </Tooltip>
          </div>
          <div className="right sprite_player">
            <Tooltip title="调节音量">
              <button
                className="sprite_player btn volume"
                onClick={() => setIsShowBar(!isShowBar)}
              ></button>
            </Tooltip>
            <Tooltip
              title={[
                '顺序播放',
                '随机播放',
                '单曲循环',
              ].filter((item, index) =>
                index === playSequence ? item : undefined
              )}
            >
              <button
                className="sprite_player btn loop"
                onClick={(e) => changeSequence()}
              ></button>
            </Tooltip>
            <button
              className="sprite_player btn playlist"
              // 阻止事件捕获,父元素点击事件,不希望点击子元素也触发该事件
              onClick={() => setIsShowSlide(!isShowSlide)}
            >
              <Tooltip title="播放列表">
                <span>{playlistCount}</span>
              </Tooltip>
              <CSSTransition
                in={isShowSlide}
                timeout={3000}
                classNames="playlist"
              >
                <SliderPlaylist
                  isShowSlider={isShowSlide}
                  playlistCount={playlistCount}
                  closeWindow={changePlaylistShow}
                  playMusic={forcePlayMusic}
                  changeSong={nextMusic}
                  isPlaying={isPlaying}
                />
              </CSSTransition>
            </button>
          </div>
          {/* Slide 音量条 */}
          <div
            className="sprite_player top-volume"
            style={{ display: isShowBar ? 'block' : 'none' }}
            onMouseLeave={() => {
              setIsShowBar(false);
            }}
          >
            <Slider vertical defaultValue={30} onChange={changingVolume} />
          </div>
        </Operator>
      </div>
      <audio
        id="audio"
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onEnded={handleTimeEnd}
        preload="auto"
      />
    </PlayerbarWrapper>
  );
});
