"use client";
import Link, { type LinkProps } from "next/link";
import { type ComponentPropsWithRef } from "react";
import { usePageTransition } from "./TransitionProvider";

type Props = LinkProps & ComponentPropsWithRef<"a">;

const TransitionLink = ({ href, children, ...rest }: Props) => {
  const { navigate } = usePageTransition();

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        navigate(href.toString());
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
