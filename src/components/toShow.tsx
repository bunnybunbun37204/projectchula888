import { useState } from 'react';
import Example from './Dialog';
import ShowAuthor from './showAuthor';

const project = {
  project_id: 22,
  title: 'New Project 234455',
  description: 'Description of the new project',
  endDate: '2024-05-30T00:00:00.000Z',
  startDate: '2024-04-30T00:00:00.000Z',
  status: 'In Progress',
  students: [
    {
      id: 9,
      student_id: '6534435247',
      project_id: 22,
      email: 'Pondd7@gmail.com',
      name: 'Pond',
      major: 'SCI',
    },
    {
      id: 10,
      student_id: '6534435223',
      project_id: 22,
      email: '6534435223@student.chula.ac.th',
      name: 'บัญญวัฒ นวลนาค',
      major: 'student',
    },
  ],
  advisors: [
    {
      id: 7,
      advisor_id: '1234567893',
      project_id: 22,
      name: 'ad4',
      department: 'mathcom',
      email: 'ad4@mail.com',
    },
  ],
};

export default function ToShow() {
  return (
    // bg
    <div className="bg-gray-100 pb-10 min-h-fit">
      
      {/* main part */}
      <div className="mx-60">
        {/* page */}
        <div className="bg-white rounded-3xl pb-10">
          <div className="text-4xl font-bold text-center py-20">{project.title}</div>
          <div className="mx-5 px-20 py-5 border-y-2 border-y-black">{project.description}</div>
          <div className="flex flex-col mx-5 px-20 py-5 border-b-2 border-y-black gap-2">
            <div>
              project_id : {project.project_id}
              <div>
                startDate : {project.startDate}
                <div>
                  endDate : {project.endDate}
                  <div>status : {project.status}</div>
                </div>
              </div>
            </div>
          </div>
          <ShowAuthor />
        </div>
      </div>
    </div>
  );
}
