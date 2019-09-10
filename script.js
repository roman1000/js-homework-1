const adminLogin = prompt('логин');
if(adminLogin === null){
    alert('Отменено пользователем!')
}
if(adminLogin === 'admin'){
    const adminPassword = prompt('пароль')
    if(adminPassword === 'm4ngo1zh4ackz0r'){
        alert('Добро пожаловать!')
    }
    else{
        alert('Доступ запрещен, неверный пароль!')
    }
    console.log(adminPassword)
}

else{
    alert('Доступ запрещен, неверный логин!')
}

console.log(adminLogin)



