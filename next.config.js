function throwError(envVar) {
  throw `Abort: You need to define ${envVar} in the .env file.`
}

if (!process.env.RESEND_API_KEY) return throwError('RESEND_API_KEY');