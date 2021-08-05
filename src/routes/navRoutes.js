// import { lazy } from "react";

// export const navRoutes = [
//   {
//     name: "Home",
//     path: "/",
//     component: lazy(() =>
//       import("../pages/HomePage" /* webpackChunkName: "HomePage" */)
//     ),
//     exact: true,
//   },
//   {
//     name: "Movie details page",
//     path: "/movie/:id",
//     component: lazy(() =>
//       import(
//         "../pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
//       )
//     ),
//     exact: false,
//   },
//   {
//     name: "Movie",
//     path: "/movie",
//     component: lazy(() =>
//       import("../pages/MoviesPage" /* webpackChunkName: "MoviePage" */)
//     ),
//     exact: false,
//   },
// ];

export const navRoutes = {
  home: "/",
  movies: "/movies",
  moviesDetails: "/movies/:movieId",
};
