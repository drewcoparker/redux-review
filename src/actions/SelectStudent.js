

export default function selectStudent(student) {
    return {
        type: 'PICK_STUDENT',
        payload: student
    }
}
