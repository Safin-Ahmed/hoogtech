import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => {
                setIsLoaded(false);
            })
    }, [])
    return { products, isLoaded }
}
export default useProducts;