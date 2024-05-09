
const project = {
    project_id: 69,
    title: "chula888",
    description: "we are not gay",
    major: "comsci",
    startDate: "07/05/67",
    pendDate: "10/05/67",
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

export default function AuthorInfo() {
    return (
        <div className="grid gap-x-8 gap-y-8 px-8 xl:grid-cols-1">
            <ul role="list" className="grid gap-x-8 gap-y-8 sm:grid-cols-1 sm:gap-y-8 xl:col-span-2">
                <div className="bg-red text-left pt-5">Author</div>
                {project.author.map((person) => (
                    <li key={person.name} className="hover:cursor-pointer">
                        <a href={person.ig}>
                            <div className="bg-white border-2 shadow-md rounded-md p-6 transition-transform transform hover:scale-105 hover:cursor-pointer">
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.email}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
            <ul role="list" className="grid gap-x-8 gap-y-10 sm:grid-cols-1 sm:gap-y-8 xl:col-span-2">
                <div className="bg-red text-left">Advisor</div>
                {project.advisor.map((person) => (
                    <li key={person.name} className="hover:cursor-pointer">
                        <a href={person.ig}>
                            <div className="bg-white border-2 shadow-md rounded-md p-6 transition-transform transform hover:scale-105 hover:cursor-pointer">
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.email}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
