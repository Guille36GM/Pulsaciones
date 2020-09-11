function CalcularPulsaciones() {

    var edad = document.getElementById("edad").value;

    var sexo = document.querySelector("#sexo").value;

    var pulsaciones = 0;

    if (sexo == 'Femenino') {
        pulsaciones = (220 - edad) / 10;
    } else if (sexo == 'Masculino') {
        pulsaciones = (210 - edad) / 10;
    }
    else {
        pulsaciones = 0;
    }
    document.getElementById("pulsacion").value = pulsaciones;
}

// Disable form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === true) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    event.preventDefault();
                    event.stopPropagation();
                    form.classList.add('was-validated');
                }
            }, false);
        });
    }, false);
})();
