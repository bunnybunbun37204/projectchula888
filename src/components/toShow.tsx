import { useState } from "react";
import Example from "./Dialog";
import ShowAuthor from "./showAuthor";

const project = {
  "project_id": 22,
  "title": "New Project 234455",
  "description": "Description of the new project",
  "endDate": "2024-05-30T00:00:00.000Z",
  "startDate": "2024-04-30T00:00:00.000Z",
  "status": "In Progress",
  "students": [
    {
      "id": 9,
      "student_id": "6534435247",
      "project_id": 22,
      "email": "Pondd7@gmail.com",
      "name": "Pond",
      "major": "SCI"
    },
    {
      "id": 10,
      "student_id": "6534435223",
      "project_id": 22,
      "email": "6534435223@student.chula.ac.th",
      "name": "บัญญวัฒ นวลนาค",
      "major": "student"
    }
  ],
  "advisors": [
    {
      "id": 7,
      "advisor_id": "1234567893",
      "project_id": 22,
      "name": "ad4",
      "department": "mathcom",
      "email": "ad4@mail.com"
    }
  ],
};

export default function ToShow() {
  function changeSaveColor(isSave: boolean) {
    if (isSave) {
      return 'bg-green-600 hover:bg-green-700';
    }
    return 'bg-blue-600 hover:bg-blue-700';
  }
  function changeDeleteColor(isCheck: boolean) {
    if (isCheck) {
      return 'bg-pink-600 hover:bg-pink-700';
    }
    return 'bg-gray-600 hover:bg-gray-700';
  }
  const [isDelete, setDelete] = useState(false);
  const [isSave, setSave] = useState(false);
  const [isCheck, setCheck] = useState(false);
  return (
    // bg
    <div className="bg-gray-100 pb-10 min-h-fit">
      {isDelete ? <Example /> : <></>}
      {/* main part */}
      <div className="mx-60">
        {/* botton */}
        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <input className="mr-2 leading-tight mx-4" type="checkbox" onClick={() => setCheck(!isCheck)}></input>
          <button
            onClick={() => {
              setDelete(!isDelete);
            }}
            disabled={!isCheck}
            type="button"
            className={`flex w-64 justify-center rounded-md ${changeDeleteColor(isCheck)} px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto`}
          >
            delete
          </button>
          <button
            onClick={() => {
              setSave(!isSave);
            }}
            type="button"
            className={`flex w-64 justify-center rounded-md ${changeSaveColor(isSave)} px-5 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto`}
          >
            {isSave ? <p>save</p> : <p>edit</p>}
          </button>
        </div>
        {/* page */}
        <div className="bg-white rounded-3xl pb-10">
          <div className="text-4xl font-bold text-center py-20">
            {project.title}
          </div>
          <div className="mx-5 px-20 py-5 border-y-2 border-y-black">
            {project.description}
          </div>
          <div className="flex flex-col mx-5 px-20 py-5 border-b-2 border-y-black gap-2">
            <div>
              project_id :{' '}{project.project_id}
              <div>
                startDate :{' '}{project.startDate}
                <div>
                  endDate :{' '}{project.endDate}
                  <div>
                    status :{' '}{project.status}
                  </div>
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