let submit = document.getElementById('submit')
console.log(submit)
function search () {
submit.addEventListener("click", (e) => console.log(e))
e.preventDefualt()
}
search()