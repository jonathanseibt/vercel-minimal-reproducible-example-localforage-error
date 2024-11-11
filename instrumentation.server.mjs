import * as Sentry from "@sentry/remix";

Sentry.init({
    dsn: "https://18465fe06b9b5a3275248d9bd43aad96@o4508281568886784.ingest.us.sentry.io/4508281573343232",
    tracesSampleRate: 1,
    autoInstrumentRemix: true
})