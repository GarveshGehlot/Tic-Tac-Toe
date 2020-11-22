var x = 0

const players = {
    player1 : '',
    player2 : ''
}
const Wins = {
    player1 : 0,
    player2 : 0
}

$(document).ready(function(){
    $('#exampleModal2').modal('show')
    $('#SubmitDataButton').click(function(){
        const first = document.querySelector('#player1').value;
        const second = document.querySelector('#player2').value;
        if(first.trim()=='')
        {
            $('#player1').focus()
            $('#error-div').html('All fields are Required.')
            $('#player1').css('border-color','red')
        }
        else if(second.trim()=='')
        {
            $('#player2').focus()
            $('#error-div').html('All fields are Required.')
            $('#player2').css('border-color','red')
        }
        else 
        {
            $('#SubmitDataButton').attr('data-dismiss','modal')
            players['player1']=first;
            players['player2']=second;
            document.querySelector('.player-display').style.opacity = '1'
            $('#player-display-one').html(players.player1)
            $('#player-display-two').html(players.player2)
        }
    })
})

$('.blocks').click(function(e){
    if(x==0)
    {
        if(e.target.classList.contains('checked2') || e.target.classList.contains('checked1')){
            console.log('Not Available')
        }
        else {
            e.target.classList.add('checked1')
            x++;
        }
        if(document.querySelector('.block11').classList.contains('checked1') && document.querySelector('.block12').classList.contains('checked1') && document.querySelector('.block13').classList.contains('checked1')) {
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player1} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player1']++;
            x--;
        }
        if(document.querySelector('.block21').classList.contains('checked1') && document.querySelector('.block22').classList.contains('checked1') && document.querySelector('.block23').classList.contains('checked1')) {
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player1} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player1']++;
            x--;
        }
        if(document.querySelector('.block31').classList.contains('checked1') && document.querySelector('.block32').classList.contains('checked1') && document.querySelector('.block33').classList.contains('checked1')) {
            console.log('Cross Won the match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player1} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player1']++;
            x--;
        }
        if(document.querySelector('.block11').classList.contains('checked1') && document.querySelector('.block21').classList.contains('checked1') && document.querySelector('.block31').classList.contains('checked1')) {
            console.log('Cross Won the Match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player1} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player1']++;
            x--;
        }
        if(document.querySelector('.block13').classList.contains('checked1') && document.querySelector('.block23').classList.contains('checked1') && document.querySelector('.block33').classList.contains('checked1')) {
            console.log('Cross Won the Match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player1} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player1']++;
            x--;
        }
        if(document.querySelector('.block11').classList.contains('checked1') && document.querySelector('.block22').classList.contains('checked1') && document.querySelector('.block33').classList.contains('checked1')) {
            console.log('Cross Won the Match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player1} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player1']++;
            x--;
        }
        if(document.querySelector('.block13').classList.contains('checked1') && document.querySelector('.block22').classList.contains('checked1') && document.querySelector('.block31').classList.contains('checked1')) {
            console.log('Cross Won the Match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player1} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player1']++;
            x--;
        }
        if(document.querySelector('.block12').classList.contains('checked1') && document.querySelector('.block22').classList.contains('checked1') && document.querySelector('.block32').classList.contains('checked1')) {
            console.log('Cross Won the Match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player1} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player1']++;
            x--;
        }
        if(
            (document.querySelector('.block11').classList.contains('checked1') ||
            document.querySelector('.block11').classList.contains('checked2')) && 
            (document.querySelector('.block12').classList.contains('checked1') ||
            document.querySelector('.block12').classList.contains('checked2')) && 
            (document.querySelector('.block13').classList.contains('checked1') ||
            document.querySelector('.block13').classList.contains('checked2')) && 
            (document.querySelector('.block21').classList.contains('checked1') ||
            document.querySelector('.block21').classList.contains('checked2')) && 
            (document.querySelector('.block22').classList.contains('checked1') ||
            document.querySelector('.block22').classList.contains('checked2')) && 
            (document.querySelector('.block23').classList.contains('checked1') ||
            document.querySelector('.block23').classList.contains('checked2')) && 
            (document.querySelector('.block31').classList.contains('checked1') ||
            document.querySelector('.block31').classList.contains('checked2')) && 
            (document.querySelector('.block32').classList.contains('checked1') ||
            document.querySelector('.block32').classList.contains('checked2')) && 
            (document.querySelector('.block33').classList.contains('checked1') ||
            document.querySelector('.block33').classList.contains('checked2'))
            )
        {
            $('#exampleModal').modal('show')
            $('.modal-title').html(`Match is tie`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            if(x==1)
            {
                x--;
            }
        }
    }
    else {
        if(e.target.classList.contains('checked2') || e.target.classList.contains('checked1')){
            console.log('Not Available')
        }
        else {
            e.target.classList.add('checked2')
            x--;
        }
        if(document.querySelector('.block11').classList.contains('checked2') && document.querySelector('.block12').classList.contains('checked2') && document.querySelector('.block13').classList.contains('checked2')) {
            console.log('Circle Won the match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player2} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player2']++;
            x++;
        }
        if(document.querySelector('.block21').classList.contains('checked2') && document.querySelector('.block22').classList.contains('checked2') && document.querySelector('.block23').classList.contains('checked2')) {
            console.log('Circle Won the match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player2} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player2']++;
            x++;
        }
        if(document.querySelector('.block31').classList.contains('checked2') && document.querySelector('.block32').classList.contains('checked2') && document.querySelector('.block33').classList.contains('checked2')) {
            console.log('Circle Won the match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player2} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player2']++;
            x++;
        }
        if(document.querySelector('.block11').classList.contains('checked2') && document.querySelector('.block21').classList.contains('checked2') && document.querySelector('.block31').classList.contains('checked2')) {
            console.log('Circle Won the Match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player2} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player2']++;
            x++;
        }
        if(document.querySelector('.block13').classList.contains('checked2') && document.querySelector('.block23').classList.contains('checked2') && document.querySelector('.block33').classList.contains('checked2')) {
            console.log('Circle Won the Match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player2} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player2']++;
            x++;
        }
        if(document.querySelector('.block11').classList.contains('checked2') && document.querySelector('.block22').classList.contains('checked2') && document.querySelector('.block33').classList.contains('checked2')) {
            console.log('Circle Won the Match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player2} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player2']++;
            x++;
        }
        if(document.querySelector('.block13').classList.contains('checked2') && document.querySelector('.block22').classList.contains('checked2') && document.querySelector('.block31').classList.contains('checked2')) {
            console.log('Circle Won the Match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player2} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player2']++;
            x++;
        }
        if(document.querySelector('.block12').classList.contains('checked2') && document.querySelector('.block22').classList.contains('checked2') && document.querySelector('.block32').classList.contains('checked2')) {
            console.log('Circle Won the Match')
            $('#exampleModal').modal('show')
            $('.modal-title').html(`${players.player2} Won the match`)
            $('.blocks').removeClass('checked1')
            $('.blocks').removeClass('checked2')
            Wins['player2']++;
            x++;
        }
    }
})

$('.score-card-button').click(function(){
    $('#result-1').html(`${players.player1} - ${Wins.player1}`)
    $('#result-2').html(`${players.player2} - ${Wins.player2}`)
})