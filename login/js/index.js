function showPassword(){
    const eye = document.getElementById('eye');
    const eyeSlas = document.getElementById('eye-slas');
    const pass = document.getElementById('field-password');

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeSlas.style.display = 'none';
        pass.type = 'text'
    } else {
        eye.style.display = 'none';
        eyeSlas.style.display = 'block';
        pass.type = 'password'
    }
}

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    const user = document.getElementById('user').value
    alert(`Seja bem-vindo ${user}!`)
})