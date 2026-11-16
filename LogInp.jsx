
function LogIn() {
    return (
        <div
            style={{
                fontFamily: "sans-serif",
                background: "#f1dada",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                margin: 0,
                padding: 0,
                boxSizing: "border-box"
            }}
        >
            <div
                className="login-container"
                style={{
                    width: "400px",
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "8px",
                    border: "1px solid #929090"
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "20px",
                        color: "#0e0279"
                    }}
                >
                    LogIn Page
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        marginBottom: "20px"
                    }}
                >
                    Welcome to the LogIn page!
                    Please enter your credentials below.
                </p>

                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px",
                        marginBottom: "20px",
                        width: "100%",
                        fontWeight: "bold",
                        boxSizing: "border-box"
                    }}
                >
                    <label For="username">Username:</label>

                    <input
                        type="text"
                        id="username"
                        name="username"
                        style={{
                            padding: "10px",
                            marginBottom: "10px",
                            border: "1px solid #535151",
                            borderRadius: "4px"
                        }}
                    />

                    <label For="password">Password:</label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        style={{
                            padding: "10px",
                            marginBottom: "15px",
                            border: "1px solid #535151",
                            borderRadius: "4px"
                        }}
                    />

                    <button
                        type="submit"
                        className="login-button"
                        style={{
                            padding: "10px",
                            background: "#0e0279",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LogIn;