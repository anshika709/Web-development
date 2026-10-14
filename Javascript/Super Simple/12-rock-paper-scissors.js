let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties:0
        };

       updatescore(); 

       let isAutoPlaying = false;
       let intervalID;

       function autoPlay() /*here we can also use arrow function but I'll prefer not to do so cuz this is easier to read and also it provides hoisting i.e we don't have to worry about order of excuting */ {
        if(!isAutoPlaying) {
            intervalID = setInterval(
            /*function*/ () => {
                const playerMove = pickcomputermove();
                playGame(playerMove);
            }, 1000
        );
        isAutoPlaying = true;
        }
        else{
            clearInterval(intervalID);
            isAutoPlaying = false;
        }
       }

       // setInterval returns a no, we can use it to stop the interval

       document.querySelector('.js-rock-button')
       .addEventListener('click', () => {
        playGame('rock');
       });
       
       document.querySelector('.js-paper-button')
       .addEventListener('click', () => {
        playGame('paper');
       });

       document.querySelector('.js-scissors-button')
       .addEventListener('click', () => {
        playGame('Scissors');
       }); 

       document.querySelector('.js-reset-button')
       .addEventListener('click', () => {
        score.wins=0;
        score.losses=0;
        score.ties=0;
        localStorage.removeItem('score');
        updatescore();
       });

       document.querySelector('.js-auto-button')
       .addEventListener('click', () => {
        autoPlay();
       });

       document.body.addEventListener('keydown', (event) =>{
        if(event.key === 'r' || event.key === 'R'){
            playGame('Rock');
        }
        else if(event.key === 'p' || event.key === 'P'){
            playGame('Paper');
        }
        else if(event.key === 's' || event.key === 'S'){
            playGame('Scissors')
        }
       });

        function playGame(player_move){
            const computer_move=pickcomputermove();


            let result= '';
            
                if(player_move==='Scissors'){
                    if(computer_move=== 'Rock'){
                    result= 'you lose';
                }
                else if(computer_move=== 'Paper'){
                    result='you won';
                }
                else{
                    result= 'tie';
                }
                }
            
                if(player_move==='Paper'){
                    if(computer_move=== 'Rock'){
                    result= 'you won';
                }
                else if(computer_move=== 'Paper'){
                    result='tie';
                }
                else{
                    result= 'you lose';
                }
                }

                if(player_move==='Rock'){
                    if(computer_move=== 'Rock'){
                    result= 'tie';
                }
                else if(computer_move=== 'Paper'){
                    result='you lose';
                }
                else{
                    result= 'you won';
                }
                }


            if(result==='you won'){
                score.wins += 1;
            }
            else if(result === 'you lose'){
                score.losses+=1;
            }
            else{
                score.ties+=1;
            }

            // localStorage only works on string 
            localStorage.setItem('score', JSON.stringify(score));

            updatescore();

            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = `you <img src="images/${player_move}-emoji.png" class="move-icon">
        <img src="images/${computer_move}-emoji.png" class="move-icon">
        computer`;
        }

        function updatescore(){
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        function pickcomputermove(){
            const random_no=Math.random();
            let computer_move='';
            if(random_no>=0 && random_no<1/3){
                computer_move='Rock';
            }
            else if(random_no>=1/3 && random_no<2/3){
                computer_move='Paper';
            }
            else{
                computer_move='Scissors';
            }

            return computer_move;
        }