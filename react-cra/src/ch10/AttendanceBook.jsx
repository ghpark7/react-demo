import React from "react";

const students = [
    {
        id: 1,
        name: "geonhwi",
    },
    {
        id: 2,
        name: "minjae",
    },
    {
        id: 3,
        name: "lin",
    },
    {
        id: 4,
        name: "juhwan",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;