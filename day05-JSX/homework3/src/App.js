
import './App.css';

function App() {
    return (
        <div className='container text-center d-flex justify-content-center my-4'>
            <div className='vh-100 w-25'>
                <form>
                    {/* Email input */}
                    <div className='form-outline mb-4'>
                        <label className='form-label' for='email'>Email address</label>
                        <input type='email' className='form-control' id='email'></input>
                    </div>
                    {/* Password input */}
                    <div className='form-outline mb-4'>
                        <label className='form-label' for='password'>Password</label>
                        <input type='password' className='form-control' id='password'></input>
                    </div>
                    <div className='row mb-4'>
                        <div className='col d-flex justify-content-center'>
                            {/* checkbox */}
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' checked />
                                <label className='form-check-label'>Remember me</label>
                            </div>
                            <div className='col'>
                                <a href='#!'>Forgot password</a>
                            </div>
                        </div>
                        {/* sumbit button */}
                        <button type='button' className='btn btn-primary btn-block mb-4'>Sign in</button>
                        {/* register button */}
                        <div className='text-center'>
                            <p>Not a member ? <a href='#!'>Register</a></p>
                            <p>or sign up with: </p>
                            <button type='button' className='btn btn-link btn-floating mx-1'>
                                <i className='fab fa-facebook'></i>
                            </button>
                            <button type='button' className='btn btn-link btn-floating mx-1'>
                                <i className='fab fa-google'></i>
                            </button>
                            <button type='button' className='btn btn-link btn-floating mx-1'>
                                <i className='fab fa-twitter'></i>
                            </button>
                            <button type='button' className='btn btn-link btn-floating mx-1'>
                                <i className='fab fa-github'></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
