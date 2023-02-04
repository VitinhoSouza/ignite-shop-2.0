import { useRouter } from "next/router"


export default function Product(){
    const {query} = useRouter();
    return(
        <>Product {query.id}</>
    )
}