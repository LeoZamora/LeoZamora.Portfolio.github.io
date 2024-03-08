let menuVisible = false;

function mostrarMenu() {
    if(menuVisible){
        document.getElementById('nav').classList = '';
        menuVisible = false;
    }else{
        document.getElementById('nav').classList.add('responsive');
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById('nav').classList.remove('responsive');
    menuVisible = false;
}

// Investigar innerHeight and getBoundingClientRect
function efectoHabilidades() {
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName('progreso')
        habilidades[0].classList.add('javascript')
        habilidades[1].classList.add('html-css')
        habilidades[2].classList.add('csharp')
        habilidades[3].classList.add('cpp')
        habilidades[4].classList.add('sql')
        habilidades[5].classList.add('comunicacion')
        habilidades[6].classList.add('trabajo-equipo')
        habilidades[7].classList.add('creatividad') 
        habilidades[8].classList.add('dedicacion')
        habilidades[9].classList.add('pm')
    }
}

window.onscroll = function(){
    efectoHabilidades();
}