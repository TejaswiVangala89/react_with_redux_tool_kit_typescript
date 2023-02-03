import React from "react";
import Loadable from "react-loadable";
import { Typography } from "@material-ui/core";

const MyLoadable = (opts: any) => {
  return Loadable({
    ...opts,
    loading: () => <Typography variant="h5">Loading...</Typography>,
  });
};

export const AsyncLanding = MyLoadable({
  loader: () => import("../../pages/Landing"),
});

export const AsyncContactUs = MyLoadable({
  loader: () => import("../../pages/ContactUs"),
});

export const AsyncDetails = MyLoadable({
  loader: () => import("../../pages/Details"),
});
