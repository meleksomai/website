"use client";

import { Heading } from "@thugga/ui";

import { useCountdown } from "../../hooks/useCountdown";

export interface CountdownTimerProps {
  targetDateTime: string;
}

export default function CountdownTimer({
  targetDateTime,
}: CountdownTimerProps) {
  const [days, hours, minutes, seconds] = useCountdown(targetDateTime);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <>
        <Heading>Thank you for attending the event</Heading>
      </>
    );
  } else {
    return (
      <>
        <Heading
          as="span"
          size="2"
          inline
          css={{ pr: "$1", color: "$slate10" }}
        >
          {days}
        </Heading>
        <Heading
          as="span"
          size="1"
          inline
          css={{ pr: "$1", color: "$slate10" }}
        >
          days
        </Heading>
        <Heading
          as="span"
          size="2"
          inline
          css={{ pr: "$1", color: "$slate10" }}
        >
          {hours}
        </Heading>
        <Heading
          as="span"
          size="1"
          inline
          css={{ pr: "$1", color: "$slate10" }}
        >
          hours
        </Heading>
        <Heading
          as="span"
          size="2"
          inline
          css={{ pr: "$1", color: "$slate10" }}
        >
          {minutes}
        </Heading>
        <Heading
          as="span"
          size="1"
          inline
          css={{ pr: "$1", color: "$slate10" }}
        >
          minutes
        </Heading>
        <Heading
          as="span"
          size="2"
          inline
          css={{ pr: "$1", color: "$slate10" }}
        >
          {seconds}
        </Heading>
        <Heading
          as="span"
          size="1"
          inline
          css={{ pr: "$1", color: "$slate10" }}
        >
          seconds
        </Heading>
      </>
    );
  }
}
