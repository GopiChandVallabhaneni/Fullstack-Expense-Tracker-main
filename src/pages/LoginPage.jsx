import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login / Register Page</h1>
      <Link to='/'><button style={{ margin: '10px', padding: '10px 20px' }}>Go Back to Homepage</button></Link>
    </div>
  );
}

export default LoginPage;