"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { SparklesIcon } from "lucide-react";

function DashboardBtn() {
  const isCandidate = true;
  const isInterviwer = true;
  if (isCandidate) return null;
  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        <SparklesIcon />
        Dashboard
      </Button>
    </Link>
  );
}

export default DashboardBtn;
