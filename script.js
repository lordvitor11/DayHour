function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora  = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        img.src = "fotomanha.png"
        document.body.style.background = "#a2c4de"
    }else if (hora >= 12 && hora < 18) {
        img.src = "fototarde.png"
        document.body.style.background = "#f46077"
    }else if (hora >= 18 && hora < 00) {
        img.src = "fotonoite.png"
        document.body.style.background = "#035963"
    }else {
        img.src = "fotomadruga.png"
        document.body.style.background = "#353839"
    }
}
