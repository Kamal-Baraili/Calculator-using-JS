const input = document.getElementById("number-input");
const ans = document.getElementById("answer");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");

function handleFunction(el) {
    const exp = `${input.value}${el.innerText}`;
    input.value = exp;

    let count = 0;

    del.addEventListener("click", () => {
        count += 1;
        console.log(count);
        remove = exp.substring(0, exp.length - count);
        input.value = remove;
    });

    ans.addEventListener("click", () => {
        let res = eval(exp);
         input.value = res;
    })
}

clear.addEventListener("click", () => {
    input.value = '';
})



