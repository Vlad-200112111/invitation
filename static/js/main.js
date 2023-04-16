document.addEventListener('DOMContentLoaded', function () {
    let fullname = document.getElementById("fullname");
    var url = new URL(document.location.href);
    fullname.value = decodeURI(url.searchParams.get("fullname"));
    document.getElementById("nameU").innerText = `Уважаемый(ая) ${decodeURI(url.searchParams.get("fullname"))}!`

    const deadline = new Date("Thu Aug 10 2023 15:00:00 GMT+0000");


    let timerId = null;

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
        $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }

    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');

    countdownTimer();

    timerId = setInterval(countdownTimer, 1000);
});

document.getElementById("confirmationForm").addEventListener('submit', async (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        await fetch(`${document.location.origin}/api/v1/info/`, {method: 'POST', body: formData})
        let myModalEl = new bootstrap.Modal(document.getElementById('myModal'));
        myModalEl.toggle();
    }
)


document.getElementById("buttonGenerationUrl").addEventListener('click', () => {
        let valueGenerator = document.getElementById("inputUrl").value
        let url = encodeURI(`${document.location.origin}/?fullname=${valueGenerator}`)
        document.getElementById("url").innerText = url
        navigator.clipboard.writeText(url)
        alert("Ссылка скопирована в буфер обмена!")
    }
)