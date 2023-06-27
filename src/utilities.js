export const getThreads = async ({ setThreads, queryString }) => {

    fetch("//localhost:4200/api/auth/thread" + (queryString ||""))
        .then(data => {
            return data.json()
        })
        .then(threadData => {
            // console.log(threadData)
            setThreads(threadData)
        })
}

