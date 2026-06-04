import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import prisma from "@/db/prisma_client";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
};

export default new JwtStrategy(opts, function (jwt_payload, done) {
  try {
    console.log("hello");
    const user = prisma.user.findUnique({
      where: {
        id: jwt_payload.id,
      },
    });
    console.log("user" + user);
    if (!user) {
      console.log("user authentication failed");
      done(null, false, { message: "user authentication failed" });
    }
    return done(null, user);
  } catch (err) {
    done(err, false);
  }
});
