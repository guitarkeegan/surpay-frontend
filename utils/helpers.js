export function removeDuplicates(qaArray){
    // move the latest answers to the beginning of the array
    const reversedArray = [...qaArray].reverse()
    const qIds = []
    const finalArray = []
    for (let qa of reversedArray){
        if(!qIds.includes(qa.questionId)){
            finalArray.push(qa)
            qIds.push(qa.questionId)
        }
    }
    return finalArray
}

export function getAnswerIds(qaArray) {
    return qaArray.map(obj=>obj.answerId)
}