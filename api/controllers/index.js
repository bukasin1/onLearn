const { renderIndexViewController } = require('./indexControllers');
const {
  loginUserController,
  logoutUserController,
  renderLoginController,
  renderRegisterController,
  registerNewUserController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
} = require('./usersAuthControllers');
const {
  updateUserProfileController,
  renderUserProfileController,
  renderEditUserProfileController,
} = require('./usersControllers');
const {
  changeRoleToInstructor,
  createNewCourseController,
  renderBeInstructorController,
  renderCreateNewCourseController,
} = require('./instructorsControllers');
const {
  renderMyCoursesController,
  renderAllCoursesController,
  renderStudentListController,
  renderTaughtCourseController,
  renderCourseDetailsController,
} = require('./coursesControllers');

module.exports = {
  loginUserController,
  logoutUserController,
  renderLoginController,
  changeRoleToInstructor,
  renderRegisterController,
  renderIndexViewController,
  registerNewUserController,
  createNewCourseController,
  renderMyCoursesController,
  renderAllCoursesController,
  renderStudentListController,
  updateUserProfileController,
  renderUserProfileController,
  renderTaughtCourseController,
  renderBeInstructorController,
  renderCourseDetailsController,
  renderCreateNewCourseController,
  renderEditUserProfileController,
  authenticateGoogleLoginController,
  authenticateGoogleCallbackController,
};
