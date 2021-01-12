const { updateTaughtCourseController } = require('../index');
const {
  setupReqRes,
  clearMocks,
} = require('../../../../utils/test-utils/courseControllerDeps');
const {
  updateCourseService,
} = require('../../../../database/services/modelServices/courseServices');
const {
  render500ErrorHelper,
  redirectNonexistentCourseHelper,
} = require('../../helpers');
const {
  validateMockValueToHaveBeenCalled,
} = require('../../../../utils/test-utils/validators.utils');

jest.mock('../../helpers');
jest.mock('../../../../database/services/modelServices/courseServices');

let req;
let res;

describe('updateTaughtCourse Controller Test Suite', () => {
  beforeEach(() => {
    const { request, response } = setupReqRes();

    req = request;
    res = response;
  });

  afterEach(() => {
    clearMocks();
  });

  test('should validate render500ErrorHelper is called', async () => {
    updateCourseService.mockReturnValueOnce(new Error());

    await updateTaughtCourseController(req, res);

    validateMockValueToHaveBeenCalled(render500ErrorHelper);
  });

  test('should validate redirectNonexistentCourseHelper is called', async () => {
    updateCourseService.mockReturnValueOnce(null);

    await updateTaughtCourseController(req, res);

    validateMockValueToHaveBeenCalled(redirectNonexistentCourseHelper);
  });

  test('should validate res.status & res.render is called', async () => {
    await updateTaughtCourseController(req, res);

    const { redirect } = res;

    validateMockValueToHaveBeenCalled(redirect);
  });
});
