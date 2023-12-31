const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/user');

/**
 * google login strategy
 */
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        async (accessToken, refreshToken, profile, done) => {
            let user = await User.findOne({ googleId: profile.id });
            if (!user) {
                user = await User.create({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    username: profile.name.familyName,
                    email: profile.emails[0].value,
                    picture: profile.photos[0].value,
                });
            }

            done(null, user);
        }
    )
);

/**
 * github login strategy
 */
passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK_URL,
        },
        async function (accessToken, refreshToken, profile, done) {
            let user = await User.findOne({ githubId: profile.id });
            if (!user) {
                user = await User.create({
                    githubId: profile.id,
                    username: profile.username,
                    displayName: profile.displayName,
                    email: profile?.emails[0].value || '',
                    picture: profile.photos[0].value,
                });
            }

            done(null, user);
        }
    )
);

/**
 * facebook login strategy
 */
passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: process.env.FACEBOOK_CALLBACK_URL,
            profileFields: ['id', 'displayName', 'photos', 'emails', 'name'],
        },
        async function (req, accessToken, refreshToken, profile, done) {
            let user = await User.findOne({ facebookId: profile.id });
            if (!user) {
                user = await User.create({
                    facebookId: profile.id,
                    displayName: profile.displayName,
                    username: profile.name.givenName,
                    picture: profile.photos[0].value,
                });
            }

            done(null, user);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
module.exports = passport;
