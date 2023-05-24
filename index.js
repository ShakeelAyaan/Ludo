    
export const java = () => {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let btn = document.createElement('button');

    div.appendChild(img);
    div.appendChild(btn);
    document.body.appendChild(div)

    
    img.loading = "eager|lazy";
    img.id = ""
    img.src = "./img/loader.gif";
    
    btn.classList.add("glow-on-hover");
    btn.style.margin="top:40px"
    btn.addEventListener('click',  function data() {
    let random = Math.floor(Math.random() * 6 + 1)
    let change = img.src = `img/${random}.png`
    
    getData(random)
    })
    
    function getData(r) {
        setTimeout(() => {
            btn.innerText = `${r}Dice`

        }, 2300);

        setTimeout(() => {
            img.id="newClass"
        }, 10);
    } 
     
    return {
    get: (das) => {
        btn.innerText = das
    } 
    }
}

                 //  currentRotaion +=80;
            // img.style.rotate=`(${currentRotaion}deg)`
            // img.style.transform = 'rotate(' + currentRotaion + 'deg)'
            // img.style.transition ='transform 0.5s'

             //   let arr=[1,2,3,4,5,6]
        // if (random) {
        //     const check = arr.filter(r => r === random)
        //     if (check) {
              
        //         let ds = document.createElement('p');
        //         div.appendChild(ds)
                 
        //         setTimeout(() => {
        //             ds.innerText = `${check}Dice`
        //             }, 2300);
        //     }
            
        // }