// Alplayer
const aplayer = document.querySelector("#aplayer");

if (aplayer) {
    let dataSong = aplayer.getAttribute("data-song");

    dataSong = JSON.parse(dataSong);

    let dataSinger = aplayer.getAttribute("data-singer");

    dataSinger = JSON.parse(dataSinger);


    const ap = new APlayer({
        container: aplayer,
        audio: [{
            name: dataSong.title,
            artist: dataSinger.fullName,
            url: dataSong.audio,
            cover: dataSong.avatar,
        }],
        autoplay: true
    });

    const avatar = document.querySelector(".singer-detail .inner-avatar");
    ap.on('pause', () => {
        avatar.style.animationPlayState = "paused";
    });

    ap.on('play', () => {
        avatar.style.animationPlayState = "running";
    });
}
// End Alplayer

// Button like
const buttonLike = document.querySelector("[button-like]");
if (buttonLike) {
    const span = buttonLike.querySelector("span");
    buttonLike.addEventListener('click', () => {
        const idSong = buttonLike.getAttribute('button-like');

        const isActive = buttonLike.classList.contains("active");
        const typeLike = isActive ? "dislike" : "like";

        const link = `/songs/like/${typeLike}/${idSong}`;

        const option = {
            method: "PATCH"
        }

        fetch(link, option)
            .then(res => res.json())
            .then(data => {
                span.innerText = data.newLike;

                buttonLike.classList.toggle("active");
            });
    });
}

// End Button like

// Button like
const buttonFavorite = document.querySelector("[button-favorite]");
console.log(buttonFavorite);
if (buttonFavorite) {
    buttonFavorite.addEventListener('click', () => {
        const idSong = buttonFavorite.getAttribute('button-favorite');

        const isActive = buttonFavorite.classList.contains("active");
        const typeFavorite = isActive ? "unfavorite" : "favorite";

        const link = `/songs/favorite/${typeFavorite}/${idSong}`;

        const option = {
            method: "PATCH"
        }

        fetch(link, option)
            .then(res => res.json())
            .then(data => {
                buttonFavorite.classList.toggle("active");
            });
    });
}

// End Button like
