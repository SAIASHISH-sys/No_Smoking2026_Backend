import "reflect-metadata";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "http";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
// import passport from "passport";
import { buildSchema } from "type-graphql";
import { graphqlUploadExpress } from "graphql-upload-minimal";

// Database & Resolvers
import { prisma } from "./db";
import { AuthResolver } from "./resolvers/authresolver";
import { MerchResolver } from "./resolvers/merchresolver";
import { PaymentResolver } from "./resolvers/paymentresolver";
import {resolvers} from "./generated/type-graphql"
// Utils
// import { authChecker } from "./utils/auth";
// import { initializeGoogleOAuth } from "./utils/oauthGoogle";

dotenv.config();

const strappingBoot = async () => {
//   initializeGoogleOAuth();

  const schema = await buildSchema({
    resolvers: [...resolvers, AuthResolver, MerchResolver, PaymentResolver], // Add your other resolvers here
    // authChecker,
    validate: false,
  });

  const app = express();
  const httpServer = http.createServer(app);

  const apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await apolloServer.start();

  const corsOrigin = [
    "http://localhost:5173",
    "https://shaastra.org",
    "https://www.shaastra.org",
    "https://no-smoking-trial.duckdns.org",

  ];

  app.use(cors({
    origin: corsOrigin,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "x-admin-password", "apollo-require-preflight"],
  }));

  // --- Google OAuth Handler ---
//   app.get("/auth/google", passport.authenticate("google", { scope: ["email", "profile"] }));

//   app.get("/auth/google/callback",
//     passport.authenticate("google", { session: false, failureRedirect: "/login" }),
//     (req, res) => {
//       const data = req.user as any;
//       let payload: any = {};

//       if (data.type === 'EXISTING') {
//         const token = jwt.sign({ id: data.user.id, email: data.user.email }, process.env.JWT_SECRET || "key"); 
//         res.cookie("token", token, { httpOnly: false, maxAge: 7 * 24 * 60 * 60 * 1000 });
//         payload = { type: "LOGIN_SUCCESS", token, user: data.user };
//       } else if (data.type === 'NEW') {
//         const { profile } = data;
//         const signupToken = jwt.sign({
//           email: profile.emails?.[0].value,
//           name: profile.displayName,
//           googleId: profile.id
//         }, process.env.JWT_SECRET || "key");

//         res.cookie("signupToken", signupToken, { httpOnly: false, maxAge: 1 * 60 * 60 * 1000 });
//         payload = { type: "SIGNUP_REQUIRED", signupToken, user: { email: profile.emails?.[0].value, name: profile.displayName } };
//       }

//       res.status(200).send(`
//         <html><body><script>
//           window.opener.postMessage(${JSON.stringify(payload)}, "http://localhost:5173");
//           window.close();
//         </script></body></html>
//       `);
//     }
//   );

  // --- Main GraphQL Route ---
  app.use(
    "/graphql",
    cookieParser(),
    express.json(),
    graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
    expressMiddleware(apolloServer, {
      context: async ({ req, res }: any) => {
        let user: any = null;
        const secret = process.env.JWT_SECRET || "key";

        // 1. Handle Final Session Token (Cookie or Header)
        const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
        
        if (token) {
          try {
            const decoded = jwt.verify(token, secret) as any;
            // Lookup user in Prisma
            const foundUser = await prisma.user.findUnique({
              where: { id: decoded.id || decoded.userId }
            });
            if (foundUser) user = foundUser;
          } catch (err) {
            // If token is invalid, we just proceed as unauthenticated
          }
        }

        // 2. Handle Verification-stage Token (token1)
        // This is useful if your resolvers need to know the 'pending' email
        const token1 = req.cookies?.token1;
        let pendingEmail: string | null = null;
        if (token1) {
          try {
            const decoded1 = jwt.verify(token1, secret) as any;
            pendingEmail = decoded1.email;
          } catch (err) {}
        }

        return { 
          req, 
          res, 
          prisma,
          user, 
          pendingEmail
        };
      },
    }) as any
  );

  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4002;
  httpServer.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/graphql`);
  });
};

strappingBoot().catch(err => console.error("Startup Error:", err));