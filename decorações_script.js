$(document).ready(function(){ 

        // Atributos //
    let controleDeMostragem = 0;
    var quantiFotos = {
        abelinha:4,
        baby_loneitunes:3,
        baby_shark:4,
        bailarina:5,
        batizado:5,
        batman:3,
        biombo_com_flores:1,
        boteco:3,
        branca_de_neve:3,
        capitão_america:3,
        carros:3,
        casamento:12,
        chaves:8,
        chá_de_bebe_menina:7,
        chá_de_cozinha:2,
        chá_revelação:2,
        cinderela:3,
        corinthians:1,
        coroa:11,
        colorido:2,
        elefante:10,
        flamingos:4,
        frozen:3,
        galinha_pintadinha:6,
        gata_marie:1,
        girasol:6,
        halloween:2,
        homem_aranha:4,
        hotwheels:3,
        ladybug:4,
        lol:5,
        lucas_neto:4,
        magali:10,   
        marinheiro:4,
        mario:3,
        marsha_e_o_urso:3,
        mikey:4,
        minie_rosa:6,
        minie_vermelha:4,
        minions:1,
        moana:5,
        moranguinho:2,
        mulher_maravilha:1,
        musica:4,
        nuvem:6,
        palmeiras:3,
        panda:8,
        patati_patata:6,
        patrulha_canina:10,
        peppa_pig:4,
        pequena_sereia:2,
        pikachu:2,
        pink_e_preto:3,
        pink_com_dourado:5,
        pjmax:7,
        poderoso_chefinho:7,
        preto_e_branco:4,
        quinze_anos:12,
        roxo_com_lilas:1,
        safari:3,
        são_paulo:2,
        seis_princesas:9,
        sereia:3,
        superman:3,
        thomas:1,
        turma_da_monica:3,
        turma_da_monica_baby:2,
        unicornio:15,
        ursinho:2,
        vinte_um_anos:2
    }
    var temas = [
        "magali",
        "abelinha",
        "girasol",
        "marinheiro",
        "unicornio",
        "bailarina",
        "chaves",
        "minie vermelha",
        "poderoso chefinho",
        "lucas neto",
        "pjmax",
        "carros",
        "pikachu",
        "halloween",
        "homem aranha",
        "hotwheels",
        "patati patata",
        "patrulha canina",
        "capitão america",
        "batman",
        "superman",
        "elefante",
        "flamingos",
        "safari",
        "lol",
        "branca de neve",
        "moana",
        "moranguinho",
        "mulher maravilha",
        "gata marie",
        "ursinho",
        "seis princesas",
        "cinderela",
        "sereia",
        "frozen",
        "ladybug",
        "pequena sereia",
        "casamento",
        "quinze anos",
        "chá de bebe menina",
        "chá de cozinha",
        "chá revelação",
        "baby loneitunes",
        "baby shark",
        "batizado",
        "mikey",
        "mario",
        "minions",
        "thomas",
        "turma da monica",
        "turma da monica baby",
        "marsha e o urso",
        "minie rosa",
        "nuvem",
        "galinha pintadinha",
        "boteco",
        "panda",
        "peppa pig",
        "coroa",
        "corinthians",
        "palmeiras",
        "são paulo",
        "musica",
        "vinte um anos",
        "pink com dourado",
        "pink e preto",
        "preto e branco",
        "roxo com lilas",
        "biombo com flores",
        "colorido"   
    ]

        // Funções //

    function changeSpaceToUnderline(a){
        while(a.indexOf(' ') != -1){
            a = a.replace(' ','_');
        }
        return a;
    }
    function createDiv(){
        let b = $('footer#rodape');
        for(let i = 0;i<temas.length;i++){
            let div = `<div class="tema"><img src="img_decorações/${temas[i]}/1.jpg" id='${temas[i]}'alt="${temas[i]}"><p>${temas[i]}</p></div>`;
            b.before(div);
        }
        $('.tema').hide();
    }
    function setOptions(){
        let b = $('#temas');
        let temasOrdenados = temas.slice();
        temasOrdenados.sort();
        for(let i = 0;i<temas.length;i++){
            let option = `<option value='${temasOrdenados[i]}'></option>`;
            b.append(option);
        }
    }
    function setContato(){
        if((screen.width > 1000) && (screen.width < 5500)) {
            $('#telefone').parent().attr('href','#');
            $('#whatsapp').parent().attr('href','https://web.whatsapp.com/send?phone=5511977725547&text=link%20para%20whatsapp');
            $('#facebook').parent().attr('href','https://web.facebook.com/gabriel.decoracoes');
        }
    }
    function trocarImagem(q, quanti){
        q = q.find('img');
        let b = q.attr('src');
        let a = (b.indexOf('.'));
        let c = b.substring(a-2,a);
        if(c.indexOf('/') != -1){
            c = b.substring(a-1,a);
        }
        c = parseInt(c);
        let d = (c==quanti)?1:c+1;
        let i = b.replace(`/${c}.`,`/${d}.`);
        $(q).attr('src', i);
    }
    function showMore(){
        let limite = (controleDeMostragem+7 < temas.length-1)?controleDeMostragem+7:temas.length-1;
        for(let i = controleDeMostragem;i<=limite;i++){
            let p = $('.tema').eq(i).show();
        }
       controleDeMostragem += 7;
    }

        // chamada de funções //

    createDiv();
    showMore();
    setOptions();
    setContato();

        // scroll infinito //
        
    document.onscroll = function(){
    let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if(scrollBottom < 500){
        showMore();
    }
    };

        // Funções de click //
        
    $('.btn-menu').click(function(){
        $('.menu').show();
    })
    $('.btn-close').click(function(){
        $('.menu').hide();
    })
    $('.tema').click(function(){
        let a = $(this).children('p').text();
        a = changeSpaceToUnderline(a);
        a = quantiFotos[`${a}`];
        trocarImagem($(this), a);
    })
    $('div#pesquisa button').click(function(){
        let a = $('div#pesquisa input').val();
        if(a.length > 0){
            $('.tema').hide();

            for(let i = 0;i>-1;i++){
                let p = $('p').eq(i);
                
                if((p.text().indexOf(a)) !== -1){
                    p.parent().show();
                } else if((p.text().indexOf('Copyright')) !== -1){
                    i = -2;
                }
            }
        }
    });
    $('div.logo').click(function(){
        $('.tema').show();
    })
}) 
