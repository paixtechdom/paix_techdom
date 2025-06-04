export interface confirmBoxInterface {
    showConfirmBox: boolean,
    confirmMessage: string,
    confirmMessageDescription: string,
    confirmedAction: boolean
}


export interface alertInterface {
    showAlert: boolean
    alertType: string,
    alertMessage: string,
}

export interface ExamInfoInterface {
    examKey: string,
    status: string,
    examTitle: string,
    duration: string,
    level: string,
    department: string,
    faculty: string,
    questionsLength: number,
    totalScore: number
}

export interface NavigationInterface{

    showSideNav: boolean,
    currentNav: number,
    currentDropDown: number,
    showTopNav: boolean,
} 


export interface studentInfoInterface {
    firstName: string,
    middleName: string,
    lastName: string,
    id: string,
    matricNumber: string,
    level: string,
    department: string,
    faculty: string
}
