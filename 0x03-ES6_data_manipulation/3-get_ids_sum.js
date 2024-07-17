/* eslint-disabled */
import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(getStudentsId) {
  const studentsId = getListStudentIds(getStudentsId);

  const reducedArray = studentsId.reduce((accumulator,
    currentValue) => accumulator + currentValue, 0);
  return reducedArray;
}