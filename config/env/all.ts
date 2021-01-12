import { IEnv } from "./IEnv";

export = <IEnv>{
  mongo: process.env.MONGO_URI,
  paypalClientId: process.env.PAYPAL_CLIENT_ID,
  jwtSecret: "abc123",
  port: 5000,
  serverURL:"http://localhost:4000"
}
