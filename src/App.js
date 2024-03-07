import {
  RouterProvider,
  createBrowserRouter,
  redirect
} from "react-router-dom";
import { currentUser } from "./auth";

// components
import { Layout } from "./components/Layout";
import { LoginPage } from "./components/Login";
import { ProfileCreateEditPage } from "./components/Profile/ProfileCreateEdit";
import { ProfilePage } from "./components/Profile";

// route actions
import loginAction from "./router/actions/loginAction";
import createEditAction from "./router/actions/createEditAction";

// route loaders
import loginLoader from "./router/loaders/loginLoader";
import protectedRouteLoader from "./router/loaders/protectedRouteLoader";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      // Our root route always provides the users email, if logged in
      // used to manage user in local storaage
      return { user: currentUser?.email };
    },
    Component: Layout,
    children: [
      {
        path: "login",
        action: loginAction,
        loader: loginLoader,
        Component: LoginPage
      },
      {
        path: "create-edit-profile",
        action: createEditAction,
        loader: protectedRouteLoader,
        Component: ProfileCreateEditPage
      },
      {
        path: "profile",
        loader: protectedRouteLoader,
        Component: ProfilePage
      }
    ]
  },
  {
    path: "/logout",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await currentUser.signout();
      return redirect("/");
    }
  },
  {
    path: "/session-timeout",
    async loader() {
      await currentUser.signout();
      return redirect("/login");
    }
  },
  {
    path: "/delete-profile",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await currentUser.delete(currentUser?.email);
      return redirect("/login");
    }
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}
