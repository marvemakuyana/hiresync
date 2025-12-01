"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import LoaderUI from "@/components/LoaderUI";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";

function MeetingPage() {
  const { id } = useParams();
  const { isLoaded } = useUser();
  const isCallLoading = false;
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (!isLoaded || isCallLoading) return <LoaderUI />;
  return (
    <StreamCall>
      <StreamTheme></StreamTheme>
    </StreamCall>
  );
}

export default MeetingPage;
