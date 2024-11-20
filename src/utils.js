
export default function generateUniqueIdentifier(){
    ////(task.status)
    //task.id=`${task.status}_${Math.floor(Math.random() * 101)}`;
    ////(`taskID: ${task.id}`)
    return `${Math.floor(Math.random() * 101)}`;
}