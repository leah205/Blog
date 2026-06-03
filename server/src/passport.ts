import passport from "passport";
import pool from "@/db/pool";
import bcryptjs from "bcryptjs";
import prisma from "@/db/prisma_client";

import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";

export default passport;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    const user = rows[0];
    if (!user) {
      done(null, false);
      return;
    }
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    try {
      const user = prisma.user.findUnique({
        where: {
          id: jwt_payload.id,
        },
      });
      if (!user) {
        console.log("user authentication failed");
        done(null, false, { message: "user authentication failed" });
      }
      return done(null, user);
    } catch (err) {
      done(err, false);
    }
  }),
);

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          username: username,
        },
      });

      if (!user) {
        console.log("incorrect username");
        return done(null, false, { message: "incorrect username" });
      }
      const match = await bcryptjs.compare(password, user.password);

      if (!match) {
        console.log("incorrect password");
        return done(null, false, { message: "incorrect password" });
      }
      console.log("success");
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);
