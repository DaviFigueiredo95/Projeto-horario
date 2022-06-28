function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#B5C4C9'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#F4AF6A'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#001220'
    }
}
