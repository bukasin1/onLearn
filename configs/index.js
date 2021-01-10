require('dotenv').config();

const {
  LOCAL_MONGO_URI,
  SESSION_SECRET,
  DUMMY_PASSWORD,
  DUMMY_EDIT_PASSWORD_WEAK,
  DUMMY_EDIT_PASSWORD_STRONG,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  CLOUDINARY_KEY,
  CLOUDINARY_NAME,
  CLOUDINARY_SECRET,
} = process.env;

module.exports = {
  /* Route prefixes */
  apiPrefix: '/',
  registerPrefix: '/register',
  loginPrefix: '/login',
  logoutPrefix: '/logout',
  profilePrefix: '/profile',
  profileEditPrefix: '/profile/:id/edit',
  googleAuthPrefix: '/auth/google',
  googleAuthCallbackPrefix: '/auth/google/callback',
  instructorPrefix: '/instructor',
  newCoursePrefix: '/course/new',
  courseRegistrationPrefix: '/course/register',
  courseDetailsPrefix: '/course/:id/details',
  allCoursesPrefix: '/all-courses',
  myCoursesPrefix: '/my-courses',
  myCoursesTeachPrefix: '/my-courses/teach/:id',
  myCoursesTeachStudentListPrefix: '/my-courses/teach/:id/studentList',
  myCoursesTeachAddModulePrefix: '/my-courses/teach/:id/module/new',
  myCoursesLearnPrefix: '/my-courses/learn/:id',

  /* Database  */
  localMongoUri: LOCAL_MONGO_URI,
  sessSecret: SESSION_SECRET,

  /* Test Fixture Data */
  dummyPassword: DUMMY_PASSWORD,
  dummyEditPasswordWeak: DUMMY_EDIT_PASSWORD_WEAK,
  dummyEditPasswordStrong: DUMMY_EDIT_PASSWORD_STRONG,

  /* Google Authentication */
  googleAuth: {
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackUrl: '/auth/google/callback',
  },

  /* Cloudinary */
  cloudName: CLOUDINARY_NAME,
  cloudKey: CLOUDINARY_KEY,
  cloudSecret: CLOUDINARY_SECRET,
};
