import * as Sentry from "@sentry/react-router";
Sentry.init({
  dsn: "https://b6a240fa406a81c37a62fb1ce7a3837f@o4510641470373888.ingest.us.sentry.io/4510641477124096",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});