"use client";
import SideBar from "./SideBar";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <SideBar children={children} />
    </>
  );
}
