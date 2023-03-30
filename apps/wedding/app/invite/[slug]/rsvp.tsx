import { Button } from "@thugga/ui";

import fetcher from "@/lib/fetcher";

async function getData(code: string) {
  return await fetcher(`http://localhost:3000/invite/${code}/api/status`);
}

interface RSVPProps {
  code?: string;
}

function ComingSoon() {
  return (
    <Button variant="dark" disabled>
      RSVP coming soon.
    </Button>
  );
}

function InvitationButton() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Button size="large" variant="dark" onClick={handleClick}>
      Yes, I confirm your attendance
    </Button>
  );
}

function Loading() {
  return (
    <Button variant="dark" disabled>
      Loading...
    </Button>
  );
}

export default async function RSVPButton(props: RSVPProps) {
  const data = await getData(props.code || "");
  console.log("data from fetching", data);

  // if (error) return <ShowError />;
  if (!data) return <Loading />;

  switch (data.status) {
    case "INVITED":
      return <InvitationButton />;
    case "NOT INVITED":
      return <ComingSoon />;
    default:
      return <ComingSoon />;
  }
}
