export const ironOptions = {
    cookieName: process.env.MY_APP_COOKIE_NAME,
    password: process.env.COOKIE_PASSWORD,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  };