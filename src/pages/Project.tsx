import { useState } from 'react';
import AuthorInfo from '../components/AuthorInfo';
import Example from '../components/Dialog';

const project = {
  project_id: 69,
  title: "chula888",
  description: "we are not gay",
  startDate: "07/05/67",
  endDate: "10/05/67",
  pstatus: "neary dead",
  author: [
    {
      name: 'Bunyawat Naunnak',
      email: 'gay1@hotmail.com',
      imageUrl: '/images/game.jpg',
      ig: 'https://www.instagram.com/plzcallmegame/',
    },
    {
      name: 'Pongsakorn Phimphongpisarn',
      email: 'gay2@hotmail.com',
      imageUrl: '/images/pond.jpg',
      ig: 'https://www.instagram.com/pond.psk54/',
    }
  ],
  advisor: [
    {
      name: 'Thanapat Donlachanon',
      email: 'gay3@hotmail.com',
      imageUrl: '/images/pakky.jpg',
      ig: 'https://www.instagram.com/pakk_kky/',
    },
    {
      name: 'Mintada Puangmintada',
      email: 'gay4@hotmail.com',
      imageUrl: '/images/mui.jpg',
      ig: 'https://www.instagram.com/min.taadaa/',
    },
    {
      name: 'Natawat Chaniat',
      email: 'gay5@hotmail.com',
      imageUrl: '/images/wai.jpg',
      ig: 'https://www.instagram.com/wxi19th/',
    }
  ]
};

const Home = () => {
  function changeSaveColor(isSave: boolean) {
    if (isSave) {
      return 'bg-green-600 hover:bg-green-700'
    }
    return 'bg-blue-600 hover:bg-blue-700'
  }
  function changeDeleteColor(isCheck: boolean) {
    if (isCheck) {
      return 'bg-pink-600 hover:bg-pink-700'
    }
    return 'bg-gray-600 hover:bg-gray-700'
  }
  const [isDelete, setDelete] = useState(false);
  const [isSave, setSave] = useState(false);
  const [isCheck, setCheck] = useState(false);
  return (
    <div className="bg-gray-100 pb-10 min-h-fit">
      {isDelete ? <Example /> : <></>}
      <div className="mx-60">
        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <input className="mr-2 leading-tight mx-4" type="checkbox" onClick={()=>setCheck(!isCheck)}></input>
          <button
            onClick={() => {setDelete(!isDelete)}} disabled={!isCheck}
            type="button"
            className={`flex w-64 justify-center rounded-md ${changeDeleteColor(isCheck)} px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto`}
          >
            delete
          </button>
          <button
            onClick={() => {
              setSave(!isSave)
            }}
            type="button"
            className={`flex w-64 justify-center rounded-md ${changeSaveColor(isSave)} px-5 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto`}
          >
            {isSave ? <p>save</p> : <p>edit</p>}
          </button>
        </div>
        <div className='bg-white rounded-3xl pb-10'>
          <div className='text-4xl font-bold text-center py-20'>
            <input disabled={!isSave} className="px-3 py-2 leading-tight text-gray-700 text-center focus:outline-none" id="username" type="text" placeholder={project.title} />
          </div>
          <div className='mx-5 px-20 py-5 border-y-2 border-y-black'>
            <input disabled={!isSave} className="px-3 py-2 leading-tight text-gray-700 focus:outline-none" id="username" type="text" placeholder={project.description} />
          </div>
          <div className='flex flex-col mx-5 px-20 py-5 border-b-2 border-y-black gap-2'>
            <div>project_id : <input disabled={!isSave} className="px-3 py-2 leading-tight text-gray-700 focus:outline-none" id="username" type="number" placeholder={project.project_id}/>
              <div>startDate : <input disabled={!isSave} className="px-3 py-2 leading-tight text-gray-700 focus:outline-none" id="username" type="text" placeholder={project.startDate} />
                <div>endDate : <input disabled={!isSave} className="px-3 py-2 leading-tight text-gray-700 focus:outline-none" id="username" type="text" placeholder={project.endDate} />
                  <div>status : <input disabled={!isSave} className="px-3 py-2 leading-tight text-gray-700 focus:outline-none" id="username" type="text" placeholder={project.pstatus} />
                  </div>
                  <AuthorInfo />
                </div>
              </div>
            </div >
          </div>
        </div>
      </div>
    </div>

  );

};

export default Home;
