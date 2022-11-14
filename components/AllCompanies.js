import useSWR from "swr"

export default function Companies(){

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('/api/company', fetcher)
    console.log(data)
    if (error){
        console.log(error)
        return <div>failed to load</div>
    } 
    if (!data) return <div>loading...</div>

    // render data
    return <div>hello {data[0].name}!</div>

}

