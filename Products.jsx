
function Products({ name, price, status }) {

    const handleClick = () => {
        alert(`You selected ${name}!`);
    };

    return (
        <div
            className="product-card"
            style={{
                border: "1px solid #89a3f7",
                borderRadius: "8px",
                backgroundColor: "#f7f4f4",
                color: "#0a0a0a",
                padding: "10px",
                margin: "10px"
            }}
        >
            <h2>{name}</h2>

            {/* Price and Status */}
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p>Price: {price}</p>

                <p style={{
                    color: "green",
                    margin: 0
                }}>
                    {status === "in stock"
                        ? "In Stock"
                        : "Out of Stock"}
                </p>
            </div>

            <button onClick={handleClick} style={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: "8px",
                width: "100%"
            }}>
                View Product
            </button>
        </div>
    );
}

export default Products;
