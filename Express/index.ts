import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import compression from "compression"
import { CLIENT_URL } from "../Utilities/Endpoints"

const ExpressConfig = (): express.Application => {
  const app = express()
  app.use(compression())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(
    cors({
      origin: CLIENT_URL,
      credentials: true,
    })
  )
  app.use(helmet())
  app.use(cookieParser())
  app.use(morgan("dev"))

  return app
}

export default ExpressConfig