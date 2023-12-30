
    const movie= document.getElementById("F-movie");
    const Ninfo = document.getElementById("Name");
    const Vinfo = document.getElementById("Value");
    const ul = document.getElementById("ul")
    const Filter = document.getElementById("Filter")
    const addbutton = document.getElementById("btn")
    const findB = document.getElementById("btn1")

    let result = () => {
        const movie1 = movie.value;
        const Ninfo1 = Ninfo.value;
        const Vinfo1 = Vinfo.value;
        const list = document.createElement("li");
        const capital = movie1.toUpperCase();
        list.textContent = `${capital} - ${Ninfo1} : ${Vinfo1}`;
        ul.appendChild(list) 
        const Dl = document.createElement("button")
        Dl.setAttribute("id", "dButton") 
        Dl.textContent = `Delete`;
        list.appendChild(Dl);

        const clear = () => {
            list.remove();
        }
           
        Dl.addEventListener("click", clear)
    }
    addbutton.addEventListener("click" , result)


    const searchB = () => {
        const input = Filter.value.toUpperCase();
        const li = document.getElementsByTagName("li");
        for (let i of li){
            const valueS = i.textContent ;
            if(valueS.toUpperCase().indexOf(input)>-1){
                i.style.display ='block'
            }else{
                i.style.display = 'none';
            }             
        }
    }
    findB.addEventListener("click", searchB)
