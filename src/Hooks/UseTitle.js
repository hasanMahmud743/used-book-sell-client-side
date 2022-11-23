import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} -Assignment Twelve`
    }, [title])
}

export default useTitle