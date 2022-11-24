import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} -Knowledge-Repurchase`
    }, [title])
}

export default useTitle