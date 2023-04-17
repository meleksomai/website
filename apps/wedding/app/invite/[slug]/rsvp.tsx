"use client";
import React, { useEffect, useState } from "react";

import { Button, Tag, Flex, Box } from "@thugga/ui";

import fetcher from "@/lib/fetcher";

interface RSVPProps {
  code?: string;
  initialStatus?: string;
}

function ComingSoon() {
  return (
    <Button variant="dark" disabled>
      RSVP coming soon.
    </Button>
  );
}

function ConfirmedStatus() {
  return (
    <Tag size="3" variant="green" css={{ p: "$2" }}>
      You are confirmed to join us!
    </Tag>
  );
}

function NotAttendingStatus() {
  return (
    <Tag size="3" variant="gray" css={{ p: "$2" }}>
      Sorry that you can&apos;t make it. Please let us know if your plans
      change.
    </Tag>
  );
}

function Loading() {
  return (
    <Button variant="dark" disabled>
      Loading...
    </Button>
  );
}

function Error() {
  return <Tag variant="red">Error. Please try again later.</Tag>;
}

interface InvitationButtonProps {
  isLoading?: boolean;
  onClick?: () => void;
}

function InvitationButton({ onClick, isLoading }: InvitationButtonProps) {
  return (
    <Button variant="dark" onClick={onClick} disabled={isLoading}>
      {!isLoading ? (
        <>Yes, I confirm my attendance</>
      ) : (
        <>Wow! Sending the news...</>
      )}
    </Button>
  );
}

function DeclineButton({ onClick, isLoading }: InvitationButtonProps) {
  return (
    <Button variant="simple" onClick={onClick} disabled={isLoading}>
      I am unable to attend
    </Button>
  );
}

export default function RSVPButton(props: RSVPProps) {
  const [status, setStatus] = useState<string>("Unknown");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setStatus(props.initialStatus || "Unknown");
  }, []);

  useEffect(() => {
    if (status && status !== "Unknown") {
      setLoading(false);
    }
  }, [status]);

  const onButtonClicked = (status: string) => {
    setLoading(true);
    const processConfirmation = async () => {
      const data = await fetcher(`${props.code}/api/${status}`);
      return data;
    };
    processConfirmation()
      .catch((err) => {
        console.error(err);
        setStatus("ERROR");
        setLoading(false);
      })
      .then((res) => {
        setStatus(res.status || "ERROR");
        setLoading(false);
      });
  };

  switch (status) {
    case "INVITED":
      return (
        <Box>
          <Box css={{ py: "$1" }}>
            <InvitationButton
              onClick={() => onButtonClicked("confirm")}
              isLoading={isLoading}
            />
          </Box>
          <Box css={{ py: "$1" }}>
            <DeclineButton
              onClick={() => onButtonClicked("decline")}
              isLoading={isLoading}
            />
          </Box>
        </Box>
      );
    case "PENDING":
      return <ComingSoon />;
    case "CONFIRMED":
      return <ConfirmedStatus />;
    case "NOT ATTENDING":
      return <NotAttendingStatus />;
    case "ERROR":
      return <Error />;
    default:
      return <Loading />;
  }
}
