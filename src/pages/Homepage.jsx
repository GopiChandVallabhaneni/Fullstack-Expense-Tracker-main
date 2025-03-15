import "../index.css";
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div
            style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: 'bold',
                backgroundImage: "url('https://blogsmedia.lse.ac.uk/blogs.dir/43/files/2021/11/blog-1-1.jpg')",
                backgroundSize: 'cover',
                height: '100vh',
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>Welcome to Expense Tracker Portal</h1>
            <div>
                <button
                    style={{
                        backgroundColor: 'yellow',
                        color: 'black',
                        padding: '20px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '25px',
                        margin: '10px',
                        cursor: 'pointer'
                    }}
                    onClick={handleRegister}
                >
                    Register
                </button>
                <button
                    style={{
                        backgroundColor: 'yellow',
                        color: 'black',
                        padding: '20px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '25px',
                        margin: '10px',
                        cursor: 'pointer'
                    }}
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Homepage;
