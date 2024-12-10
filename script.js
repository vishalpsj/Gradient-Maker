let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let output = document.getElementById("output")
let gradientCode = document.querySelector('.gradientCode')
let copy = document.querySelector('.copy')
// let layout = document.getElementById('gradientLayOut').value
let rgb1 = "#BF5562"
let rgb2 = "#522B90"


// Random color generator 

const randomClrGenerator = () => {
    const letter = "0123456789ABCDEF"
    let color = "#"
    
    for(let i = 1; i <= 6; i++){
        color += letter[Math.floor(Math.random()*16)]
    }
    return color;
}

const handlebtn1 = () => {
    rgb1 = randomClrGenerator()   
    btn1.innerText = rgb1
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    output.textContent = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`
    btn1.style.backgroundColor = rgb1

};



const handlebtn2 = () => {
    rgb2 = randomClrGenerator()  
    btn2.innerText = rgb2  
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2}`;
    output.textContent = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`
    btn2.style.backgroundColor = rgb2
    
}


btn1.addEventListener('click', handlebtn1)
btn2.addEventListener('click', handlebtn2)
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(output.innerText)
    copy.innerHTML = '<p>Copied</p><i class="ri-checkbox-multiple-fill"></i>';
    setTimeout(() => {
        copy.innerHTML = `<p>Copy</p><i class="ri-file-copy-fill"></i>`
    }, 1000)
})


