const parent = document.getElementById('formInput')
let input = document.createElement('input')
input.setAttribute('placeholder', 'Введіть посилання')
document.getElementById('list').addEventListener('click', function (event) {
  if (event.target.id == 'btnToInput') {
    if (!parent.contains(input)) parent.appendChild(input)
  } else if (event.target.id == 'btnUrl') {
    location.href = urlCheck(input.value)
  }
})
function urlCheck(myUrl) {
  try {
    return new URL(myUrl).href
  } catch (err) {
    console.error(err)
  }
}
