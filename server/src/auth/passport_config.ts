import passport from "passport";
import jwt from "@/auth/strategies/jwt";
import local from "@/auth/strategies/local";

passport.use(jwt);
passport.use(local);

export default passport;
