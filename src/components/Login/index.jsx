import {
  Form,
  useActionData,
  useLocation,
  useNavigation
} from "react-router-dom";

export function LoginPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "/";

  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get("email") != null;

  const actionData = useActionData();

  return (
    <div className="login-container">
      <h1>Log In</h1>
      <Form method="post" replace>
        <input type="hidden" name="redirectTo" value={from} />
        <div className="">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="example@gmail.com"
              className="login-input"
            />
          </label>

          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              className="login-input"
            />
          </label>

          <button
            type="submit"
            disabled={isLoggingIn}
            className="btn btn-primary"
          >
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
        </div>
        {actionData && actionData.error ? (
          <p style={{ color: "red" }}>{actionData.error}</p>
        ) : null}
      </Form>
    </div>
  );
}
