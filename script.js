function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}



function playRound(playerSelection, computerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const playerChoice = playerSelection.toLowerCase();
    if (!choices.includes(playerChoice)){
        return 'Invalid choice';
    }

    if (playerChoice === computerSelection) {
        return `Tie! Computer choose${computerSelection}`;
    }
    else {
        if ((playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')){
        return `You Win! Computer choose${computerSelection}`;
        }
        else {
            return `You Lose! Computer choose${computerSelection}`;
        }
    }

  }

const computerChoice = getComputerChoice();
const playerChoice = prompt('Select your Action');
const result = playRound(playerChoice, computerChoice); // Store the result
console.log(result); // Display the result
   