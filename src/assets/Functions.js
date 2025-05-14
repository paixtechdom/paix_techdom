export const FormatTime = (time) =>{
    let hours = Math.floor(time/3600) % 24
    let minutes = (Math.floor(time/60) % 60)
    let seconds = Math.floor(time % 60)
    if(minutes < 10) minutes = '0' + minutes
    if(seconds < 10) seconds = '0' + seconds
    return hours + ':' + minutes + ':' + seconds
}