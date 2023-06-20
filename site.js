function underline(id){
    document.getElementById(id).style.textDecoration = 'underline'
	}

function underline_off(id){
    document.getElementById(id).style.textDecoration = 'none'
    }

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
    var liens = document.querySelectorAll('a');
    for (var i = 0; i < liens.length; i++) {
        liens[i].style.color = '#0b0b0b';
    }
    var liens_no = document.querySelectorAll('.link');
    for (var i = 0; i < liens_no.length; i++) {
        liens_no[i].style.color = '#FF6B18';
    }
    document.getElementById('switch_dl').setAttribute('src', 'Assets/switch_ios_left.svg')
    document.getElementById('pied').style.borderTopColor = 'rgba(11, 11, 11, 0.5)'
    document.getElementById('arrow_top').setAttribute('src', 'Assets/arrow_up_circle_dark.svg')
    
    if (document.title == 'CHALENCON Yoan | Accueil'){
        document.getElementById('icon_cta').setAttribute('src', 'Assets/arrow_down_circle_light.svg')
        document.getElementById('cta_accueil').style.color = '#f0f0f0'
        document.getElementById('logo_python').setAttribute('src', 'Assets/Logos/python_dark.svg')
        document.getElementById('logo_html').setAttribute('src', 'Assets/Logos/html_dark.svg')
        document.getElementById('logo_figma').setAttribute('src', 'Assets/Logos/figma_dark.svg')
    }

    if (document.title == 'CHALENCON Yoan | Python'){
        document.getElementById('cta_accueil').style.color = '#f0f0f0'
        document.getElementById('icon_cta').setAttribute('src', 'Assets/arrow_down_circle_light.svg')
        document.getElementById('presentation_image').setAttribute('src', 'Assets/Logos/python_dark.svg')
        var buttons = document.querySelectorAll('.logo_download');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('src', 'Assets/icon_download_light.svg');
        }
        var telechargement = document.querySelectorAll('.real_button');
        for (var i = 0; i < telechargement.length; i++) {
            telechargement[i].style.color = '#f0f0f0';
        }
    }

    if (document.title == 'CHALENCON Yoan | Site Internet'){
        document.getElementById('cta_accueil').style.color = '#f0f0f0'
        document.getElementById('icon_cta').setAttribute('src', 'Assets/Logos/github_light.svg')
    }

    if (document.title == 'CHALENCON Yoan | Design'){
        document.getElementById('cta_accueil').style.color = '#f0f0f0'
        document.getElementById('icon_cta').setAttribute('src', 'Assets/arrow_down_circle_light.svg')
        document.getElementById('presentation_image').setAttribute('src', 'Assets/Logos/figma_dark.svg')
        var buttons = document.querySelectorAll('.logo_open');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('src', 'Assets/Logos/figma_border_light.svg');
        }
        var telechargement = document.querySelectorAll('.real_button');
        for (var i = 0; i < telechargement.length; i++) {
            telechargement[i].style.color = '#f0f0f0';
        }
    }

    if (document.title == 'CHALENCON Yoan | Bénévolat'){
        document.getElementById('cta_accueil').style.color = '#f0f0f0'
        document.getElementById('icon_cta').setAttribute('src', 'Assets/Logos/discord_light.svg')
    }

    if (document.title == 'CHALENCON Yoan | Contact'){
        document.getElementById('button1').style.color = '#f0f0f0'
        document.getElementById('button2').style.color = '#f0f0f0'
        document.getElementById('button3').style.color = '#f0f0f0'
        document.getElementById('button4').style.color = '#f0f0f0'
        document.getElementById('mail_logo').setAttribute('src', 'Assets/icon_mail_light.svg')
        document.getElementById('twitter_logo').setAttribute('src', 'Assets/Logos/twitter_light.svg')
        document.getElementById('discord_logo').setAttribute('src', 'Assets/Logos/discord_light.svg')
        document.getElementById('linkedin_logo').setAttribute('src', 'Assets/Logos/linkedin_light.svg')
    }

    if (document.title == "CHALENCON Yoan | Conditions Générales d'Utilisation" || document.title == 'CHALENCON Yoan | Mentions Légales' || document.title == 'CHALENCON Yoan | Politique de Confidentialité'){
        var links = document.querySelectorAll('.article_content a');
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = '#FF6B18';
        }
        var links_intro = document.querySelectorAll('#intro a');
        for (var i = 0; i < links_intro.length; i++) {
            links_intro[i].style.color = '#FF6B18';
        }
        document.getElementById("button_download").style.color = '#f0f0f0'
        document.getElementById("icon_dl_contrat").setAttribute('src', 'Assets/icon_download_light.svg')
    }
}

function to_dark(){
    document.body.style.color = '#f0f0f0'
    document.body.style.backgroundColor = '#0b0b0b'
    document.getElementById('navbar').style.backgroundColor = 'rgba(11, 11, 11, 0.5)'
    var liens = document.querySelectorAll('a');
    for (var i = 0; i < liens.length; i++) {
        liens[i].style.color = '#f0f0f0';
    }
    var liens_no = document.querySelectorAll('.link');
    for (var i = 0; i < liens_no.length; i++) {
        liens_no[i].style.color = '#FF6B18';
    }
    document.getElementById('switch_dl').setAttribute('src', 'Assets/switch_ios_right.svg')
    document.getElementById('pied').style.borderTopColor = 'rgba(240, 240, 240, 0.5)'
    document.getElementById('arrow_top').setAttribute('src', 'Assets/arrow_up_circle_light.svg')
    
    if (document.title == 'CHALENCON Yoan | Accueil'){
        document.getElementById('cta_accueil').style.color = '#0b0b0b'
        document.getElementById('icon_cta').setAttribute('src', 'Assets/arrow_down_circle_dark.svg')
        document.getElementById('logo_python').setAttribute('src', 'Assets/Logos/python_light.svg')
        document.getElementById('logo_html').setAttribute('src', 'Assets/Logos/html_light.svg')
        document.getElementById('logo_figma').setAttribute('src', 'Assets/Logos/figma_light.svg')
    }
    if (document.title == 'CHALENCON Yoan | Python'){
        document.getElementById('cta_accueil').style.color = '#0b0b0b'
        document.getElementById('icon_cta').setAttribute('src', 'Assets/arrow_down_circle_dark.svg')
        document.getElementById('presentation_image').setAttribute('src', 'Assets/Logos/python_light.svg')
        var buttons = document.querySelectorAll('.logo_download');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('src', 'Assets/icon_download_dark.svg');
        }
        var telechargement = document.querySelectorAll('.real_button');
        for (var i = 0; i < telechargement.length; i++) {
            telechargement[i].style.color = '#0b0b0b';
        }
    }

    if (document.title == 'CHALENCON Yoan | Site Internet'){
        document.getElementById('cta_accueil').style.color = '#0b0b0b'
        document.getElementById('icon_cta').setAttribute('src', 'Assets/Logos/github_dark.svg')
    }

    if (document.title == 'CHALENCON Yoan | Design'){
        document.getElementById('cta_accueil').style.color = '#0b0b0b'
        document.getElementById('icon_cta').setAttribute('src', 'Assets/arrow_down_circle_dark.svg')
        document.getElementById('presentation_image').setAttribute('src', 'Assets/Logos/figma_light.svg')
        var buttons = document.querySelectorAll('.logo_open');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('src', 'Assets/Logos/figma_border_dark.svg');
        }
        var telechargement = document.querySelectorAll('.real_button');
        for (var i = 0; i < telechargement.length; i++) {
            telechargement[i].style.color = '#0b0b0b';
        }
    }

    if (document.title == 'CHALENCON Yoan | Bénévolat'){
        document.getElementById('cta_accueil').style.color = '#0b0b0b'
        document.getElementById('icon_cta').setAttribute('src', 'Assets/Logos/discord_dark.svg')
    }

    if (document.title == 'CHALENCON Yoan | Contact'){
        document.getElementById('button1').style.color = '#0b0b0b'
        document.getElementById('button2').style.color = '#0b0b0b'
        document.getElementById('button3').style.color = '#0b0b0b'
        document.getElementById('button4').style.color = '#0b0b0b'
        document.getElementById('mail_logo').setAttribute('src', 'Assets/icon_mail_dark.svg')
        document.getElementById('twitter_logo').setAttribute('src', 'Assets/Logos/twitter_dark.svg')
        document.getElementById('discord_logo').setAttribute('src', 'Assets/Logos/discord_dark.svg')
        document.getElementById('linkedin_logo').setAttribute('src', 'Assets/Logos/linkedin_dark.svg')
    }

    if (document.title == "CHALENCON Yoan | Conditions Générales d'Utilisation" || document.title == 'CHALENCON Yoan | Mentions Légales' || document.title == 'CHALENCON Yoan | Politique de Confidentialité'){
        var links = document.querySelectorAll('.article_content a');
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = '#FF6B18';
        }
        var links_intro = document.querySelectorAll('#intro a');
        for (var i = 0; i < links_intro.length; i++) {
            links_intro[i].style.color = '#FF6B18';
        }
        document.getElementById("button_download").style.color = '#0b0b0b'
        document.getElementById("icon_dl_contrat").setAttribute('src', 'Assets/icon_download_dark.svg')
    }
}