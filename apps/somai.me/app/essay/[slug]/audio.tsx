"use client";

import { Pause, Play, SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

import { Button, Stack, Text, Box, Progress } from "@thugga/ui";

// Enum Statuses for the audio player
enum AudioPlayerStatus {
  Pause = "Pause",
  Play = "Play",
}

function PlayIcon({ status }: { status: AudioPlayerStatus }) {
  switch (status) {
    case AudioPlayerStatus.Pause:
      return <Pause weight="fill" />;
    case AudioPlayerStatus.Play:
      return <Play weight="fill" />;
  }
}

export default function AudioPlayer({ audio }: { audio: string }) {
  const {
    src,
    load,
    play,
    pause,
    playing,
    isLoading,
    isReady,
    duration,
    getPosition,
    muted,
    mute,
  } = useGlobalAudioPlayer();
  const [pos, setPos] = useState(0);
  const [status, setStatus] = useState<AudioPlayerStatus>(
    AudioPlayerStatus.Play,
  );

  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      setPos(getPosition());
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useMemo(() => {
    if (audio !== src) {
      load(audio, {
        autoplay: false,
        format: "mp3",
      });
    }
  }, [audio, load, src]);

  useEffect(() => {
    if (playing) {
      setStatus(AudioPlayerStatus.Pause);
    } else {
      setStatus(AudioPlayerStatus.Play);
    }
  }, [playing]);

  const handlePlay = () => {
    if (isLoading) {
      return;
    }

    if (!playing) {
      play();
    } else {
      pause();
    }
  };

  const handleMute = () => {
    if (muted) {
      mute(false);
    } else {
      mute(true);
    }
  };

  return (
    <Box
      borderColor="slate7"
      borderWidth="0.375"
      width={{
        desktop: "9600",
        tablet: "9600",
        mobile: "full",
      }}
      paddingLeft="300"
      paddingRight="300"
      borderRadius="full"
      minHeight="1000"
      alignItems="center"
    >
      <Stack justify="flex-start" align="center" direction="row" space="100">
        <Button
          onClick={handlePlay}
          variant="simple"
          size="small"
          disabled={isLoading}
        >
          <PlayIcon status={status} />
        </Button>
        {(playing || pos !== 0) && isReady && (
          <>
            <Text variant="small" as="span">
              {new Date(pos * 1000).toISOString().substring(14, 19)}
            </Text>
            <Text> / </Text>
            <Text variant="small" color="slate10" as="span">
              {new Date(duration * 1000).toISOString().substring(14, 19)}
            </Text>
            <Progress progress={(pos / duration) * 100} />
            <Button onClick={handleMute} variant="simple" size="small">
              {muted ? (
                <SpeakerSlash weight="fill" />
              ) : (
                <SpeakerHigh weight="fill" />
              )}
            </Button>
          </>
        )}
        {!playing && !isReady && (
          <Text variant="small" color="slate10">
            Loading audio...
          </Text>
        )}
        {!playing && isReady && !isLoading && pos === 0 && (
          <Text variant="small" color="slate12">
            Read aloud
          </Text>
        )}
      </Stack>
    </Box>
  );
}
