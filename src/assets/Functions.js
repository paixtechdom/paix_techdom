

export const FormatTime = (time) =>{
    let hours = Math.floor(time/3600) % 24
    let minutes = (Math.floor(time/60) % 60)
    let seconds = Math.floor(time % 60)
    if(minutes < 10) minutes = '0' + minutes
    if(seconds < 10) seconds = '0' + seconds
    if (hours > 0 ) {
        return `${hours} : ${minutes} : ${seconds}`
    }else{
        return `${minutes} : ${seconds}`
    }
}


export const FormatDate = (date) => {
    const options = {day: "numeric", month: "long", year: "numeric"}
    return date.toLocaleDateString("en-US", options)
}