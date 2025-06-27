import { useEffect } from "react";

const ProductList: React.FC = () => {
    useEffect(() => {
        fetch('/products.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log("Products:", data);
            })
            .catch((error) => {
                console.error("Failed to fetch products:", error);
            });
    }, []); // Runs once on mount

    return (
        <div>
            {/* Add UI logic to display products here */}
        </div>
    );
};

export default ProductList;
