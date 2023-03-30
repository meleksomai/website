import { NextResponse } from "next/server";

import { findInviteByCode } from "@/lib/notion";

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const runtime = "experimental-edge";
export const fetchCache = "force-no-store";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  // Error: Code is required
  if (!params.slug) {
    return NextResponse.error();
  }
  // Find invite by code
  const invite = await findInviteByCode(params.slug);
  if (!invite) {
    return NextResponse.error();
  }
  // Return the invite confirmation page
  return NextResponse.json({
    message: "Invite found",
    status: invite.status,
  });
}
