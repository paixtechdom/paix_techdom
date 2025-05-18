import logo from "/favicon.ico"

// const dbLocation = 'https://online-exam-app.000webhostapp.com/quiz_app'
export const dbLocation = 'http://localhost:80/api-quiz-app'

export const PrimaryButtonCLass = "cursor-pointer bg-gray-900 transition-all duration-500 ease-in-out border border-gray-900 rounded-xl py-2 md:py-3 px-4 lg:px-6 text-sm lg:text-base text-gray-100 hover:bg-gray-700 hover:scale-90"

export const SecondaryButtonCLass = "cursor-pointer transition-all duration-500 ease-in-out border border-gray-600 hover:bg-gray-200 rounded-xl py-2 md:py-3 px-4 lg:px-6 text-sm lg:text-base text-gray-900 hover:scale-90"

export const DangerButtonCLass = "cursor-pointer transition-all duration-500 ease-in-out bg-red-900 text-white font-bold hover:bg-red-950 rounded-xl py-2 md:py-3 px-4 lg:px-6 text-sm lg:text-base hover:scale-90"

export const SuccessButtonClass = "cursor-pointer transition-all duration-500 ease-in-out bg-green-700 text-white font-bold rounded-xl py-2 md:py-3 px-4 lg:px-6 text-sm lg:text-base hover:scale-90"

export const ErrorMessageTextClass = 'text-[15px] text-red-700'
export const TextInputClass = 'bg-transparent h-12 shadow shadow-xl px-4 rounded-xl bg-white outline-none'
export const TopLevelHeader = "font-bold text-gray-700 text-4xl"


export const Logo = ""

export const SideNav = [
    {
        title: 'Dashboard',
        link: 'dashboard',
        icon: 'grid-fill',
    },
    {
        title: 'Exams',
        link: 'exams',
        icon: 'people-fill',
        sublinks: [
            {
                title: 'All Exams',
                link: 'all-exams',
                icon: 'person-check-fill'
                
            },
            {
                title: 'Add New Exam',
                link: 'add-new',
                icon: 'plus scale-[1.5]'

            },
        ]
    },
    {
        title: 'Sessions',
        link: 'statistics',
        icon: 'bar-chart-line-fill',
       
    },
    {
        title: 'Schedules',
        link: 'tickets',
        icon: 'card-checklist',
      },
    {
        title: 'Settings',
        link: 'settings',
        icon: 'gear-fill',
    },
 

]


export const availableDepartments =    [
    {
        faculty: "Arts and Communication",
        department: [
            "Mass Communication",
            "Linguistics"
        ],
        color: ""
    },
    {
        
        faculty: "Pure and Applied Sciences",
        department: [
            "Computer Science",
            "Bio Chemistry"
        ]
    },
    {
        faculty: "Management Sciences",
        department: [
            "Accounting",
            "Banking And Finance"
        ]
    },
    {
        faculty: "Social Sciences",
        department: [
            "Transportation and Logistics",
            "Public Administration"
        ]
    }
]

