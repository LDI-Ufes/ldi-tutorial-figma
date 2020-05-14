const navLinks = document.querySelectorAll('.nav-menu ul li a');

const navDiv = document.querySelectorAll('.conteudo');




    function scrollActive(){
        navDiv.forEach( (item, index) => {
            const topoDOM = window.pageYOffset;
            const topoSec = item.offsetTop - 200;
            const heightSec = item.getBoundingClientRect().height;

            if(topoSec < topoDOM && topoSec + heightSec >= topoDOM){
                navLinks[index].classList.add("ativo");
            } else{
                navLinks[index].classList.remove("ativo");
            }

        });
    }

window.addEventListener('scroll', scrollActive);