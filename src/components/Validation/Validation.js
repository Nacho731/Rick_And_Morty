const validation = (userData) =>{
    const errors = {};

    if (!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = 'El email ingresado no es valido.';
    } 
    if (!userData.email) {
        errors.email = "Debe ingresar un email.";
    }
    if (userData.email.length >35){
        errors.email = "Su nombre de usuario no puede superar los 35 caracteres.";
    }

    if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userData.password)){
        errors.password = "La contraseña debe contener al menos un numero.";
    }
    if (userData.password.length < 6 || userData.password.length > 10){
        errors.password= "La contraseña debe contener entre seis y diez caracteres."
    }
    
    
        return errors

    
}
export default validation;