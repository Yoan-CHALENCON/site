document.addEventListener('DOMContentLoaded', getSavedMode())

function switch_dark_light_mode(){
    var mode = localStorage.getItem('mode')
    console.log(mode)
    if (mode == 'dark'){
        to_light()
        localStorage.setItem('mode', 'light')
    }
    else{
        to_dark()
        localStorage.setItem('mode', 'dark')
    }
    }

function getSavedMode(){
    if (localStorage.getItem('mode')){
        var savedMode = localStorage.getItem('mode')
        console.log(savedMode)

        if (savedMode == 'light'){
            to_light()
        }
    }
    
    else{
        localStorage.setItem('mode', 'dark')
    }
}

function press(){
    if (localStorage.getItem('mode') == 'dark'){
        document.getElementById('switch_dl').setAttribute('src', 'Assets/switch_ios_miright.svg')
    }
    else{
        document.getElementById('switch_dl').setAttribute('src', 'Assets/switch_ios_mileft.svg')
    }
}

function to_light(){
    document.body.style.color = '#0b0b0b'
    document.body.style.backgroundColor = '#f0f0f0'
    document.getElementById('navbar').style.backgroundColor = 'rgba(240, 240, 240, 0.5)'
    document.getElementById('switch_dl').setAttribute('src', 'Assets/switch_ios_left.svg')
    document.getElementById('pied').style.borderTopColor = 'rgba(11, 11, 11, 0.5)'
}

function to_dark(){
    document.body.style.color = '#f0f0f0'
    document.body.style.backgroundColor = '#0b0b0b'
    document.getElementById('navbar').style.backgroundColor = 'rgba(11, 11, 11, 0.5)'
    document.getElementById('switch_dl').setAttribute('src', 'Assets/switch_ios_right.svg')
    document.getElementById('pied').style.borderTopColor = 'rgba(240, 240, 240, 0.5)'
}