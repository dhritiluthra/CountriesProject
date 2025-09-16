import React from "react";
import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div>{error.error?.message}</div>
      <div>Something Went Wrong !</div>
    </>
  );
}
