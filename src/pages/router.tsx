import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { PageLayout } = await import("../components/layouts/page-layout")
      return { Component: PageLayout }
    },
    children: [{
      index: true,
      lazy: async () => {
        const { Welcome } = await import("./root")
        return { Component: Welcome }
      },
    }, {
      path: "datetime",
      lazy: async () => {
        const { DatetimeCalcPage: DatetimeCalculator } = await import("./root/datetimeCalc")
        return { Component: DatetimeCalculator }
      },
    }]
  },
]);