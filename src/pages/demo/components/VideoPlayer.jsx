import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showCaptions, setShowCaptions] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  // Demo video data (mock)
  const videoData = {
    title: 'MIA Assistant - Demo Completa',
    description: 'Scopri come MIA trasforma il tuo business in soli 3 minuti',
    thumbnail: "https://images.unsplash.com/photo-1711183835743-898db45778d1",
    thumbnailAlt: 'Modern restaurant interior with elegant lighting and dining tables showcasing digital transformation',
    duration: 180, // 3 minutes
    chapters: [
    { time: 0, title: 'Introduzione a MIA', description: 'Cos\'è e come funziona' },
    { time: 30, title: 'Setup Rapido', description: 'Configurazione in 5 minuti' },
    { time: 90, title: 'Esperienza Cliente', description: 'Come interagiscono i clienti' },
    { time: 150, title: 'Dashboard e Controlli', description: 'Gestione completa del business' }]

  };

  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];

  useEffect(() => {
    const video = videoRef?.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video?.currentTime);
    const handleDurationChange = () => setDuration(video?.duration);
    const handleEnded = () => setIsPlaying(false);

    video?.addEventListener('timeupdate', handleTimeUpdate);
    video?.addEventListener('durationchange', handleDurationChange);
    video?.addEventListener('ended', handleEnded);

    return () => {
      video?.removeEventListener('timeupdate', handleTimeUpdate);
      video?.removeEventListener('durationchange', handleDurationChange);
      video?.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef?.current;
    if (!video) return;

    if (isPlaying) {
      video?.pause();
    } else {
      video?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const video = videoRef?.current;
    if (!video) return;

    const rect = e?.currentTarget?.getBoundingClientRect();
    const pos = (e?.clientX - rect?.left) / rect?.width;
    const newTime = pos * duration;

    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    const video = videoRef?.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const video = videoRef?.current;
    if (!video) return;

    const newVolume = parseFloat(e?.target?.value);
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleFullscreen = () => {
    const container = containerRef?.current;
    if (!container) return;

    if (!isFullscreen) {
      if (container?.requestFullscreen) {
        container?.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const changePlaybackSpeed = (speed) => {
    const video = videoRef?.current;
    if (!video) return;

    video.playbackRate = speed;
    setPlaybackSpeed(speed);
  };

  const jumpToChapter = (time) => {
    const video = videoRef?.current;
    if (!video) return;

    video.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds?.toString()?.padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);

    if (controlsTimeoutRef?.current) {
      clearTimeout(controlsTimeoutRef?.current);
    }

    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const getCurrentChapter = () => {
    return videoData?.chapters?.slice()?.reverse()?.find((chapter) => currentTime >= chapter?.time);
  };

  const currentChapter = getCurrentChapter();

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
      {/* Video Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {videoData?.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {videoData?.description}
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={16} />
                <span>{formatTime(videoData?.duration)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Play" size={16} />
                <span>Demo Interattiva</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Subtitles" size={16} />
                <span>Sottotitoli IT</span>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCaptions(!showCaptions)}
            iconName="Subtitles"
            iconPosition="left"
            iconSize={16}>

            {showCaptions ? 'Nascondi' : 'Mostra'} Sottotitoli
          </Button>
        </div>
      </div>
      {/* Video Player */}
      <div
        ref={containerRef}
        className="relative bg-black aspect-video"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}>

        {/* Video Element (Mock - using poster image) */}
        <div className="relative w-full h-full">
          <img
            src={videoData?.thumbnail}
            alt={videoData?.thumbnailAlt}
            className="w-full h-full object-cover" />

          
          {/* Play Overlay */}
          {!isPlaying &&
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
              onClick={togglePlay}
              className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-brand group">

                <Icon name="Play" size={32} className="text-primary ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          }

          {/* Current Chapter Indicator */}
          {currentChapter && isPlaying &&
          <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-2 rounded-lg">
              <p className="text-sm font-medium">{currentChapter?.title}</p>
              <p className="text-xs opacity-80">{currentChapter?.description}</p>
            </div>
          }

          {/* Captions */}
          {showCaptions && isPlaying &&
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg max-w-md text-center">
              <p className="text-sm">
                {currentTime < 30 && "Benvenuti nella demo di MIA Assistant, il vostro cameriere digitale."}
                {currentTime >= 30 && currentTime < 90 && "Configurare MIA è semplicissimo: bastano solo 5 minuti."}
                {currentTime >= 90 && currentTime < 150 && "I vostri clienti potranno prenotare direttamente su WhatsApp."}
                {currentTime >= 150 && "Dalla dashboard controllate tutto in tempo reale."}
              </p>
            </div>
          }

          {/* Video Controls */}
          {showControls &&
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              {/* Progress Bar */}
              <div className="mb-4">
                <div
                className="w-full h-2 bg-white/30 rounded-full cursor-pointer"
                onClick={handleSeek}>

                  <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${currentTime / duration * 100}%` }}>
                </div>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                  onClick={togglePlay}
                  className="text-white hover:text-primary transition-brand">

                    <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                    onClick={toggleMute}
                    className="text-white hover:text-primary transition-brand">

                      <Icon name={isMuted ? "VolumeX" : "Volume2"} size={20} />
                    </button>
                    <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-white/30 rounded-full" />

                  </div>

                  <div className="text-white text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {/* Speed Control */}
                  <div className="relative group">
                    <button className="text-white hover:text-primary transition-brand text-sm">
                      {playbackSpeed}x
                    </button>
                    <div className="absolute bottom-full right-0 mb-2 bg-black/90 rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-brand">
                      <div className="space-y-1">
                        {speedOptions?.map((speed) =>
                      <button
                        key={speed}
                        onClick={() => changePlaybackSpeed(speed)}
                        className={`block w-full text-left px-3 py-1 text-sm rounded transition-brand ${
                        speed === playbackSpeed ? 'text-primary bg-white/20' : 'text-white hover:bg-white/10'}`
                        }>

                            {speed}x
                          </button>
                      )}
                      </div>
                    </div>
                  </div>

                  <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-primary transition-brand">

                    <Icon name={isFullscreen ? "Minimize" : "Maximize"} size={20} />
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      {/* Chapter Navigation */}
      <div className="p-6 border-b border-border">
        <h4 className="font-semibold text-foreground mb-4">Capitoli del Video</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {videoData?.chapters?.map((chapter, index) =>
          <button
            key={index}
            onClick={() => jumpToChapter(chapter?.time)}
            className={`p-3 rounded-lg border text-left transition-brand ${
            currentChapter?.time === chapter?.time ?
            'border-primary bg-primary/5 text-primary' : 'border-border hover:border-primary/50 hover:bg-primary/5'}`
            }>

              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{chapter?.title}</span>
                <span className="text-sm text-muted-foreground">
                  {formatTime(chapter?.time)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{chapter?.description}</p>
            </button>
          )}
        </div>
      </div>
      {/* Video Actions */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://wa.me/1234567890?text=Ho visto il video demo e vorrei saperne di più!', '_blank')}
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={16}>

              Contattaci
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigator.share && navigator.share({
                title: videoData?.title,
                text: videoData?.description,
                url: window.location?.href
              })}
              iconName="Share2"
              iconPosition="left"
              iconSize={16}>

              Condividi
            </Button>
          </div>
          
          <Button
            variant="default"
            size="sm"
            className="cta-pulse"
            iconName="Zap"
            iconPosition="left"
            iconSize={16}>

            Inizia Subito la Prova Gratuita
          </Button>
        </div>
      </div>
    </div>);

};

export default VideoPlayer;