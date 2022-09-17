import { checkId } from './validationFactory.js';
import Course from '../models/courseModel.js';

export const validateCreatingResult = () => checkId('course', Course);
