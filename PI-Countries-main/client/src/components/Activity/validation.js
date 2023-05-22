const validaciones = (form) => {
    let errors = {};
  
    if (!form.name) {
      errors.name = 'Debe ingresar un nombre para la actividad';
    } else if (!/^[a-zA-Z]+$/.test(form.name)) {
      errors.name = 'El nombre solo puede contener letras';
    }
  
    if (!form.duration) {
      errors.duration = 'Debe ingresar una duración para la actividad';
    } else if (!/^\d+$/.test(form.duration)) {
      errors.duration = 'La duración solo puede contener números';
    }
  
    return errors;
  };
  

export default validaciones