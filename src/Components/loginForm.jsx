

const LoginForm = ({ loginData, handleChange, handleLogin }) => {
    return (
<form className="w-full max-w-md bg-gray-800 rounded-lg shadow-2xl p-8 border border-gray-700">
                <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-lime-400 to-blue-400 bg-clip-text text-transparent">
                    Welcome to your HR portal
                </h1>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={loginData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition"
                    />
                </div>

                <div className="mb-8">
                    <label htmlFor="password" className="block text-gray-300 font-semibold mb-2">Password:</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-gradient-to-r from-lime-400 to-blue-400 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-lime-400/50 transition duration-300 transform hover:scale-105"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </form>
    );
}
export default LoginForm;