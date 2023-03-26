import { Button } from "@thugga/ui";

interface RSVPProps {
  id?: string;
  status?: string;
}

function ComingSoon() {
  return (
    <Button variant="dark" disabled>
      RSVP coming soon.
    </Button>
  );
}

export default function RSVPButton(props: RSVPProps) {
  if (!props.status || props.status === "UNINVITED") return <ComingSoon />;
  else return <></>
}
