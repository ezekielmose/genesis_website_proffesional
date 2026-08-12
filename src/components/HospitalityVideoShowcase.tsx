"use client";

import {
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

import {
  useRef,
  useState,
} from "react";


type VideoItem = {
  id: number;
  title: string;
  location: string;
  src: string;
  poster?: string;
};


const videos: VideoItem[] = [
  {
    id: 1,
    title: "Luxury Resort",
    location: "Hospitality Story",
    src: "https://res.cloudinary.com/yqvxbzsy/video/upload/v1786528509/The_Henderson_Beach_Resort_Spa_view_2.mp4",
  },

  {
    id: 2,
    title: "Destination Escape",
    location: "Travel Experience",
    src: "https://res.cloudinary.com/yqvxbzsy/video/upload/v1786528501/NH_Johannesburg_Sandton_Hotel-Rooms_Suites2.mp4",
  },

  {
    id: 3,
    title: "Hotel Experience",
    location: "Cinematic Reel",
    src: "https://res.cloudinary.com/yqvxbzsy/video/upload/v1786528466/The_Ritz-Carlton_Dubai_3.mp4",
  },

  {
    id: 4,
    title: "Aerial Hospitality",
    location: "Drone Showcase",
    src: "https://res.cloudinary.com/yqvxbzsy/video/upload/v1786528456/Gilpin_Hotel_Lake_House_spa.mp4",
  },

  {
    id: 5,
    title: "Luxury Stay",
    location: "Hotel Reel",
    src: "https://res.cloudinary.com/yqvxbzsy/video/upload/v1786528204/The_Ritz-Carlton__room.mp4",
  },
];


export function HospitalityVideoShowcase() {

  /*
    Duplicate videos so the carousel
    loops continuously.
  */

  const repeatedVideos = [
    ...videos,
    ...videos,
  ];


  return (

    <div className="hospitality-video-marquee">

      <div className="hospitality-video-track">

        {repeatedVideos.map(
          (
            video,
            index
          ) => (

            <VideoCard
              key={
                `${video.id}-${index}`
              }
              video={video}
            />

          )
        )}

      </div>

    </div>

  );

}


// ======================================================
// INDIVIDUAL VIDEO
// ======================================================

function VideoCard({
  video,
}: {
  video: VideoItem;
}) {

  const videoRef =
    useRef<HTMLVideoElement>(
      null
    );


  const [
    playing,
    setPlaying,
  ] =
    useState(false);


  const [
    muted,
    setMuted,
  ] =
    useState(true);


  function togglePlay() {

    const element =
      videoRef.current;


    if (!element) {
      return;
    }


    if (
      element.paused
    ) {

      element.play();

      setPlaying(true);

    } else {

      element.pause();

      setPlaying(false);

    }

  }


  function toggleMute() {

    const element =
      videoRef.current;


    if (!element) {
      return;
    }


    element.muted =
      !element.muted;


    setMuted(
      element.muted
    );

  }


  return (

    <div className="hospitality-video-card">

      {/* VIDEO */}
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        muted={muted}
        playsInline
        preload="metadata"
        loop
        className="hospitality-video"
        onPlay={() =>
          setPlaying(true)
        }
        onPause={() =>
          setPlaying(false)
        }
      />


      {/* DARK OVERLAY */}
      <div className="hospitality-video-overlay" />


      {/* TOP BADGE */}
      <div className="hospitality-video-badge">

        Genesis Digital

      </div>


      {/* PLAY BUTTON */}
      <button
        type="button"
        className="hospitality-video-play"
        onClick={
          togglePlay
        }
        aria-label={
          playing
            ? "Pause video"
            : "Play video"
        }
      >

        {playing ? (

          <Pause
            size={22}
            fill="currentColor"
          />

        ) : (

          <Play
            size={22}
            fill="currentColor"
          />

        )}

      </button>


      {/* VOLUME */}
      <button
        type="button"
        className="hospitality-video-volume"
        onClick={
          toggleMute
        }
        aria-label={
          muted
            ? "Unmute video"
            : "Mute video"
        }
      >

        {muted ? (

          <VolumeX
            size={16}
          />

        ) : (

          <Volume2
            size={16}
          />

        )}

      </button>


      {/* TEXT */}
      <div className="hospitality-video-info">

        <div className="hospitality-video-title">

          {video.title}

        </div>


        <div className="hospitality-video-location">

          {video.location}

        </div>

      </div>

    </div>

  );

}