import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div>
        <Link href="/">LiquidPool</Link>
        <Link href="/">
          <div>Home</div>
        </Link>
        <Link href="/existingpools">
          <div>Existing Pools</div>
        </Link>
        <Link href="/createpool">
          <div>Create Pool</div>
        </Link>
        <Link href="/contracts">
          <div>Contracts</div>
        </Link>
      </div>
    </div>
  );
}
