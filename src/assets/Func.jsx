const ScrollTo = (currentPosition, elementId) => {
    
    let element = document.querySelector(`#${elementId}`)
    let elementPos = element.getBoundingClientRect()
    console.log(currentPosition, document.documentElement.scrollTop, elementId, elementPos.top)
    
    document.documentElement.scrollTop = elementPos.top
    
    // document.documentElement.scrollTop = document.documentElement.scrollTop + 1

    // if(currentPosition < elementPos){
    //     const int = setInterval(() => {
    //         document.documentElement.scrollTop = document.documentElement.scrollTop + 1
    //         // if(document.documentElement.scrollTop == elementPos.top) {
    //         //     return () => clearInterval(int)
    //         // }
    //     }, 200);
    // }
    // if(currentPosition > elementPos){
    //     const int = setInterval(() => {
    //         document.documentElement.scrollTop = document.documentElement.scrollTop - 1
    //         // if(document.documentElement.scrollTop == elementPos.top) {
    //         //     return () => clearInterval(int)
    //         // }
    //     }, 200);
    // }
}

export { ScrollTo }