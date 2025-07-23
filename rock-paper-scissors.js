let result = '';
      let userChoice = '';
      let computerChoice = '';

      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      function updateResultElement() {
        document.querySelector('.js-result').innerHTML = result;
      }

      function updateMovesElement() {
        document.querySelector('.js-moves').innerHTML = `YOU PICKED
          <img src="${userChoice}-emoji.png" class="move-icon">
          <img src="${computerChoice}-emoji.png" class="move-icon">
          COMPUTER PICKED`;
      }

      function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = 
          `SCORE: ${score.wins} wins, ${score.losses} losses, ${score.ties} ties`;
      }

      function computermove() {
        const randomNumber = Math.random();
        if (randomNumber < 0.33) {
          computerChoice = 'rock';
        } else if (randomNumber < 0.66) {
          computerChoice = 'paper';
        } else {
          computerChoice = 'scissors';
        }
      }

      function updateScore(result) {
        if (result === 'You win') {
          score.wins++;
        } else if (result === 'You lose') {
          score.losses++;
        } else {
          score.ties++;
        }
        localStorage.setItem('score', JSON.stringify(score));
      }

       // Show score on first load
      // updateScoreElement();
