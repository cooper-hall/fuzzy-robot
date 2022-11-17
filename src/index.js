// Your code here
console.log("hi hi hi")

const characterBar = document.getElementById("character-bar")
const detailedInfo = document.getElementById("detailed-info");
const cutieName = document.getElementById('name')
const cutieImage = document.getElementById('image')
const voteCount = document.getElementById('vote-count')
const form = document.getElementById('votes-form')
const votesInForm = document.getElementById('votes')


// rendering the cuties and adding click event to them(ramen rater-esq)
const renderCuties = async() => {
  let req = await fetch("http://localhost:3000/characters");
  let res = await req.json()
  res.forEach((cuties) => {
    let span = document.createElement('span')
    span.innerText = cuties.name
    //console.log(span.innerText)
    characterBar.append(span)
    span.addEventListener('click', () => {
      cutieName.innerText = cuties.name
      cutieImage.src = cuties.image
      voteCount.innerText = cuties.votes
    })
    //
  })
}

// the submit listener to add votes
form.addEventListener('submit', (e) => {
  e.preventDefault()
  //console.log("been submitted")
  // this equation lets the votes be cumalative and converts the strings from the form into integers
  //thank you michael for showing us this right before the challenge 
  let votes = e.target.votes.value
  let currentVotes = voteCount.innerText
  voteCount.innerText = parseInt(currentVotes) + parseInt(votes)
})

//trying out the advanced deliverables
const resetButton = document.getElementById('reset-btn')

//resets votes to zero
resetButton.addEventListener('click', () => {
    voteCount.innerText = 0
  }
)


renderCuties()