// .storybook/manager.js

import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "foo",
    brandUrl: "https://www.xyz.com/",
    brandImage:
      "/logo.png",
  }),
});