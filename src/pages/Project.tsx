import { useState } from 'react';
import Example from '../components/Dialog';
import { TrashIcon } from '@heroicons/react/24/outline';

const project = {
  project_id: 22,
  title: 'New Project 234455',
  description: 'Description of the new project',
  endDate: '2024-05-30',
  startDate: '2024-04-30',
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
const student_list = [
  {
    student_id: '6534435224',
    email: 'NmN4@gmail.com',
    name: 'Nm4N',
    major: 'SCI',
  },
  {
    student_id: '6534435225',
    email: 'NmN5@gmail.com',
    name: 'Nm5N',
    major: 'SCI',
  },
  {
    student_id: '6534435226',
    email: 'NmN6@gmail.com',
    name: 'Nm6N',
    major: 'SCI',
  },
  {
    student_id: '6534435227',
    email: 'NmN7@gmail.com',
    name: 'Nm7N',
    major: 'SCI',
  },
  {
    student_id: '6534435247',
    email: 'Pondd7@gmail.com',
    name: 'Pond',
    major: 'SCI',
  },
  {
    student_id: '6534435223',
    email: '6534435223@student.chula.ac.th',
    name: 'บัญญวัฒ นวลนาค',
    major: 'student',
  },
];
const advisor_list = [
  {
    advisor_id: '1234567890',
    name: 'ad1',
    department: 'mathcom',
    email: 'ad1@mail.com',
  },
  {
    advisor_id: '1234567891',
    name: 'ad2',
    department: 'mathcom',
    email: 'ad2@mail.com',
  },
  {
    advisor_id: '1234567892',
    name: 'ad3',
    department: 'mathcom',
    email: 'ad3@mail.com',
  },
  {
    advisor_id: '1234567893',
    name: 'ad4',
    department: 'mathcom',
    email: 'ad4@mail.com',
  },
  {
    advisor_id: '1235567893',
    name: 'ad5',
    department: 'mathcom',
    email: 'ad5@mail.com',
  },
  {
    advisor_id: '1235567897',
    name: 'ad6',
    department: 'mathcom',
    email: 'ad6@mail.com',
  },
  {
    advisor_id: '1235577897',
    name: 'ad6',
    department: 'mathcom',
    email: 'ad655@mail.com',
  },
  {
    advisor_id: '63742',
    name: 'Somchai Rukchart',
    department: 'Biochemistry',
    email: 'somchaizaza007@gmail.com',
  },
  {
    advisor_id: '74253',
    name: 'Prayut Haujai',
    department: 'Geology',
    email: 'nahimyut@hotmail.com',
  },
  {
    advisor_id: '16353',
    name: 'Pita Tatayoung',
    department: 'Chemical Technology',
    email: 'hawardnaja@hotmail.com',
  },
  {
    advisor_id: '85462',
    name: 'Suschart Loveyou',
    department: 'Material Science',
    email: 'suskubiname@hotmail.com',
  },
  {
    advisor_id: '75453',
    name: 'Pluemjit jitsodsai',
    department: 'Physics',
    email: 'jitsokkapok@hotmail.com',
  },
  {
    advisor_id: '53253',
    name: 'Huahin Tinmehoi',
    department: 'Food Technology',
    email: 'hoimaija@hotmail.com',
  },
  {
    advisor_id: '67543',
    name: 'Konkornni prunprelawn',
    department: 'Photographic Science and Printing Technology',
    email: 'yadmamhuador@gmail.com',
  },
  {
    advisor_id: '76543',
    name: 'Eliam modick',
    department: 'Marine Science',
    email: 'bigblackcock@hotmail.com',
  },
  {
    advisor_id: '53455',
    name: 'Maons choi',
    department: 'Botany',
    email: 'meaow@gmail.com',
  },
];

const Home = () => {
  const [isDelete, setDelete] = useState(false);
  const [isSave, setSave] = useState(false);
  const [isCheck, setCheck] = useState(false);
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

  const [isProject, setProject] = useState(project);

  function handleTitleChange(event: { target: HTMLInputElement }) {
    setProject({ ...isProject, title: event.target.value });
  }
  function handleDescChange(event: { target: HTMLInputElement }) {
    setProject({ ...isProject, description: event.target.value });
  }
  function handleStartDateChange(event: { target: HTMLInputElement }) {
    setProject({ ...isProject, startDate: event.target.value });
  }
  function handleEndDateChange(event: { target: HTMLInputElement }) {
    setProject({ ...isProject, endDate: event.target.value });
  }
  function handleStatusSelect(event: { target: HTMLSelectElement }) {
    setProject({ ...isProject, status: event.target.value });
  }

  function saveData() {
    const updatedProject = {
      ...project,
      title: isProject.title,
      description: isProject.description,
      startDate: isProject.startDate,
      end: isProject.endDate,
      status: isProject.status,
    };
    setProject(updatedProject);
    console.log(updatedProject);
  }
  function deleteProject() {
    window.location.href = '/';
  }

  const [std_id, setStdID] = useState('6534435224');
  const [adv_id, setAdvID] = useState('1234567890');
  const [who, setWho] = useState('student');

  function handleWhoSelect(event: { target: HTMLSelectElement }) {
    setWho(event.target.value);
  }
  function handleStdSelect(event: { target: HTMLSelectElement }) {
    setStdID(event.target.value);
  }
  function handleAdvSelect(event: { target: HTMLSelectElement }) {
    setAdvID(event.target.value);
  }

  function submit() {
    saveData();
    console.log('add new author');
    console.log(who, std_id, adv_id);
    const updatedProject = { ...project }; // Create a shallow copy of project
    if (who === 'student') {
      // Find the selected student in the student_list array
      const selectedStudent = student_list.find((student) => student.student_id === std_id);
      updatedProject.students.push({
        id: 69,
        student_id: std_id,
        project_id: project.project_id,
        email: selectedStudent?.email as string, // Get the email from the selected student object
        name: selectedStudent?.name as string,
        major: '',
      });
    } else {
      const selectedAdvisor = advisor_list.find((advisor) => advisor.advisor_id === adv_id);
      updatedProject.advisors.push({
        id: 69,
        advisor_id: adv_id,
        project_id: project.project_id,
        name: selectedAdvisor?.name as string,
        department: '',
        email: selectedAdvisor?.email as string,
      });
    }
    setProject(updatedProject);
  }

  function deleteStudent(studentId: string) {
    const updatedProject = { ...project }; // Create a shallow copy of project
    updatedProject.students = updatedProject.students.filter((student) => student.student_id !== studentId);
    setProject(updatedProject);
  }

  function deleteAdvisor(advisorId: string) {
    const updatedProject = { ...project }; // Create a shallow copy of project
    updatedProject.advisors = updatedProject.advisors.filter((advisor) => advisor.advisor_id !== advisorId);
    setProject(updatedProject);
  }

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
              deleteProject();
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
              saveData();
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
            <input
              disabled={!isSave}
              className="px-3 py-2 leading-tight text-gray-700 text-center focus:outline-none"
              type="text"
              value={isProject.title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mx-5 px-20 py-5 border-y-2 border-y-black">
            <input
              disabled={!isSave}
              className="px-3 py-2 w-full h-20 text-gray-700 focus:outline-none "
              type="text"
              value={isProject.description}
              onChange={handleDescChange}
            />
          </div>
          <div className="flex flex-col mx-5 px-20 py-5 border-b-2 border-y-black gap-2">
            {/* <div>
              project_id :{' '}
              <input
                disabled={true}
                className="px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                type="number"
                value={project.project_id}
              /> */}
            <div>
              Start Date :{' '}
              <input
                disabled={!isSave}
                className="px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                type="text"
                value={isProject.startDate}
                onChange={handleStartDateChange}
              />
              <div>
                End Date :{' '}
                <input
                  disabled={!isSave}
                  className="px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                  type="text"
                  value={isProject.endDate}
                  onChange={handleEndDateChange}
                />
                <div>
                  Status :{' '}
                  <select
                    className="mx-3px-3 border-gray-200 border-2 rounded-md"
                    disabled={!isSave}
                    onChange={handleStatusSelect}
                    defaultValue={'in progress'}
                  >
                    <option value="In progress">In Progress</option>
                    <option value="Pending">Pending</option>
                    <option value="Publish">Publish</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-x-8 gap-y-8 px-8 xl:grid-cols-1">
            <ul role="list" className="grid gap-y-8 sm:grid-cols-1 sm:gap-y-8 xl:col-span-2">
              <div className="bg-red text-left pt-5">Student</div>
              {project.students.map((student) => (
                <li key={student.name} className="hover:cursor-pointer">
                  <div className="bg-white border-2 shadow-md rounded-md p-6 transition-transform transform hover:cursor-pointer">
                    <div className="flex items-center justify-between gap-x-6">
                      <div>
                        <a href="#">
                          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                            {student.name}
                          </h3>
                          <p className="text-sm font-semibold leading-6 text-indigo-600">{student.email}</p>
                        </a>
                      </div>
                      <TrashIcon
                        onClick={() => deleteStudent(student.student_id)}
                        className="h-6 w-6 hover:cursor-pointer hover:text-red-600"
                      />
                    </div>
                  </div>
                </li>
              ))}
              <div className="bg-red text-left">Advisor</div>
              {project.advisors.map((advisor) => (
                <li key={advisor.name} className="hover:cursor-pointer">
                  <div className="bg-white border-2 shadow-md rounded-md p-6 transition-transform transform hover:cursor-pointer">
                    <div className="flex items-center justify-between gap-x-6">
                      <a href="#">
                        <div>
                          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                            {advisor.name}
                          </h3>
                          <p className="text-sm font-semibold leading-6 text-indigo-600">{advisor.email}</p>
                        </div>
                      </a>
                      <TrashIcon
                        onClick={() => deleteAdvisor(advisor.advisor_id)}
                        className="h-6 w-6 hover:cursor-pointer hover:text-red-600"
                      />
                    </div>
                  </div>
                </li>
              ))}
              {/* add new author */}
              <div className="bg-red text-left border-t-2 border-y-black pt-7">Add new author </div>
              <div className="bg-white border-2 shadow-md rounded-md p-6 transition-transform transform">
                <div className="flex items-center justify-between gap-x-6">
                  <div>
                    <select name="who" id="who" className="px-3" onChange={handleWhoSelect}>
                      <option value="student">Student</option>
                      <option value="advisor">Advisor</option>
                    </select>
                    {who === 'student' ? (
                      <select
                        name="id"
                        id="id"
                        className="px-3"
                        defaultValue={student_list[0].student_id}
                        onChange={handleStdSelect}
                      >
                        {student_list.map((option) => (
                          <option value={option.student_id}>{option.name}</option>
                        ))}
                      </select>
                    ) : (
                      <select
                        name="id"
                        id="id"
                        className="px-3"
                        defaultValue={advisor_list[0].advisor_id}
                        onChange={handleAdvSelect}
                      >
                        {advisor_list.map((option) => (
                          <option value={option.advisor_id}>{option.name}</option>
                        ))}
                      </select>
                    )}
                  </div>
                  <button
                    className="border-gray-500 border-2 px-3 rounded-lg hover:scale-105 hover:cursor-pointer"
                    onClick={submit}
                  >
                    add
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
