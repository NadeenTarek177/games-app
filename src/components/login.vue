<template>
    <div class="popup-login">
        <p style="color:#8064A2"><small class="text-muted">Please add your account details</small></p>
		<p>Don't have an account? </p>
        <a href="#">Create Your Account</a>
		<div class="inputs">
			<input type="text" placeholder="user name">
			<br>
			<input type="password" placeholder="password">
		</div>	
		<br><br>	
		<div class="remember-me--forget-password">
            <label>
                <input type="checkbox" name="item" checked/>
                <span class="text-checkbox">Remember me</span>
            </label>
			<p>forget password?</p>
		</div>
		<br>
		<button>Login</button>
    </div>
</template>

<script>
    export default {
        name:'loginComp',
    }
</script>

<style scoped>
    .popup-login{
        
        width: 250px;
        height: 500px;
        text-align: left;
    }
    .popup-login .inputs{
         overflow: hidden;
    }
    .popup-login input{
        width: 100%;
        padding: 10px;
        margin-top: 25px;
        font-size: 16px;
        border: none;
        outline: none;
        border-bottom: 2px solid 
    }
    .popup-login .remember-me--forget-password input {
        margin: 0;
        width: auto;
        text-align: right;
    }
    .popup-login button{
        text-align: center;
        font-size: 16px;
        width: 100%;
        border-radius: 50px;
        display: inline-block;
        border: 0;
        outline: 0;
        box-shadow: 0px 4px 20px 0px #8064A2;
        background-color: #8064A2;
    }
</style>