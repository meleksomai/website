"use client";

import { DotsThree, PauseCircle, PlayCircle } from "@phosphor-icons/react";
import React, { useEffect, useRef } from "react";
import { useAudioPlayer } from "react-use-audio-player";

import { Button, Stack, Text, Box, Progress } from "@thugga/ui";

// Enum Statuses for the audio player
enum AudioPlayerStatus {
  Loading = "Loading",
  Pause = "Pause",
  Play = "Play",
}

function PlayIcon({ status }: { status: AudioPlayerStatus }) {
  switch (status) {
    case AudioPlayerStatus.Loading:
      return <DotsThree size={25} />;
    case AudioPlayerStatus.Pause:
      return <PauseCircle size={25} />;
    case AudioPlayerStatus.Play:
      return <PlayCircle size={25} />;
  }
}

export default function AudioPlayer({ audio }: { audio: string }) {
  const { load, play, pause, playing, isReady, duration, getPosition } =
    useAudioPlayer();
  const [pos, setPos] = React.useState(0);
  const [status, setStatus] = React.useState<AudioPlayerStatus>(
    AudioPlayerStatus.Loading,
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

  useEffect(() => {
    load(audio, {
      autoplay: false,
      format: "mp3",
    });
  }, [audio, load]);

  useEffect(() => {
    if (!isReady) {
      setStatus(AudioPlayerStatus.Loading);
    } else if (playing) {
      setStatus(AudioPlayerStatus.Pause);
    } else {
      setStatus(AudioPlayerStatus.Play);
    }
  }, [isReady, playing]);

  const handlePlay = () => {
    if (!isReady) {
      return;
    }

    if (!playing) {
      play();
    } else {
      pause();
    }
  };

  return (
    <Box
      backgroundColor="slate4"
      width={{
        desktop: "9600",
        tablet: "9600",
        mobile: "full",
      }}
      paddingLeft="300"
      paddingRight="600"
      borderRadius="full"
      minHeight="1000"
      alignItems="center"
    >
      <Stack justify="flex-start" align="center" direction="row" space="100">
        {status !== AudioPlayerStatus.Loading && (
          <>
            <Button onClick={handlePlay} variant="simple" size="small">
              <PlayIcon status={status} />
            </Button>
            <Text variant="small" as="span">
              {new Date(pos * 1000).toISOString().substring(14, 19)}
            </Text>
            <Text> / </Text>
            <Text variant="small" color="slate10" as="span">
              {new Date(duration * 1000).toISOString().substring(14, 19)}
            </Text>
            <Progress progress={(pos / duration) * 100} />
          </>
        )}
      </Stack>
    </Box>
  );
}
