import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Toyazone`
    }, [title])
};

export default useTitle;