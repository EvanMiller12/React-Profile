import { Link, useFetcher, useRouteLoaderData } from "react-router-dom";
import { currentUser } from "../../auth";

export function AuthStatus() {
  // Get our logged in users email, if they exist, from the root route loader data
  const userEmail = useRouteLoaderData("root").user;
  const fetcher = useFetcher();
  const isAuthenticated = sessionStorage.getItem("isLoggedIn");

  if (!isAuthenticated) {
    return (
      <section>
        <p>Login to view, create, edit, or delete your profile.</p>
        <Link to="/login">Login</Link>
      </section>
    );
  }

  const userData = currentUser.get(userEmail);

  // get profile link values based off new or returning user
  const linkCta = userData?.fullName ? "View Profile" : "Create Profile";
  const linkUrl = userData?.fullName ? "/profile" : "/create-edit-profile";

  const isLoggingOut = fetcher.formData != null;

  return (
    <div>
      <p>Welcome {userData?.fullName || userData?.email}!</p>
      <div className="flex">
        <fetcher.Form method="post" action="/logout" className="mr-12">
          <button
            type="submit"
            disabled={isLoggingOut}
            className="btn btn-secondary"
          >
            {isLoggingOut ? "Signing out..." : "Sign out"}
          </button>
        </fetcher.Form>
        <Link to={linkUrl} className="btn btn-primary">
          {linkCta}
        </Link>
      </div>
    </div>
  );
}
