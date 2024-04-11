function LoginPage() {
    return <div>
        <form>
            <label htmlFor="username">Username:</label><br/>
            <input type="text" id="username" name="username"/><br/>
            <label htmlFor="password">Password:</label><br/>
            <input type="password" id="password" name="password"/>
            <button type="submit" className={"bg-blue-600 text-amber-100 rounded"}>Log In</button>
        </form>
    </div>

}

export default LoginPage