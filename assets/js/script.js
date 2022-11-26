import { countries, groupTitle, language, teamTitle, time } from "./countries.js";
import { goals } from "./goals.js";
import { match } from "./matches.js";
//  Páginas de grupos
 const groupA = document.querySelector('.group-a')
 const groupB = document.querySelector('.group-b')
 const groupC = document.querySelector('.group-c')
 const groupD = document.querySelector('.group-d')
 const groupE = document.querySelector('.group-e')
 const groupF = document.querySelector('.group-f')
 const groupG = document.querySelector('.group-g')
 const groupH = document.querySelector('.group-h')

//  Botões de grupos
 const btnGroupA = document.querySelector('.btn-group-a')
 const btnGroupB = document.querySelector('.btn-group-b')
 const btnGroupC = document.querySelector('.btn-group-c')
 const btnGroupD = document.querySelector('.btn-group-d')
 const btnGroupE = document.querySelector('.btn-group-e')
 const btnGroupF = document.querySelector('.btn-group-f')
 const btnGroupG = document.querySelector('.btn-group-g')
 const btnGroupH = document.querySelector('.btn-group-h')

 const groups = document.querySelector('.groups')
 const games = document.querySelector('.games')

 export const btnGames = document.querySelector('.title-games')
 export const btnCountries = document.querySelector('.title-countries')
 export const btnClassification = document.querySelector('.title-classification')
 const btnAbout = document.querySelector('.title-about');

 const groupsName = document.querySelector('.groups-name')
 const roundsHeader = document.querySelector('.rounds')
 
 export const btnRound1 = document.querySelector('.btn-round1')
 export const btnRound2 = document.querySelector('.btn-round2')
 export const btnRound3 = document.querySelector('.btn-round3')
 export const btnRoundFinal= document.querySelector('.btn-round-final')
// Páginas
 const round1 = document.querySelector('.round1')
 const round2 = document.querySelector('.round2')
 const round3= document.querySelector('.round3')
 const roundFinal = document.querySelector('.round-final')
 const about = document.querySelector('.about')
export const btnStrikers = document.querySelector('.btn-strikers')
const btnClassificationBack = document.querySelector('.back-classification')
 const strikers = document.querySelector('.strikers')

const goalsHeader = document.querySelector('.goals')
const btnRoundArrow = document.querySelector('.btn-round-arrow')
const btnRoundArrowBack = document.querySelector('.btn-round-arrow-back')
const classification = document.querySelector('.classification')

const flagUrl = '/assets/img/flags/'
language();
btnCountries.style.borderBottom = '4px solid white'
btnGames.style.borderBottom = '4px solid transparent'
btnClassification.style.borderBottom = '4px solid transparent'
btnAbout.style.borderBottom = '4px solid transparent'
btnRound2.style.backgroundColor = 'green'

btnRoundArrow.addEventListener('click', ()=>{
    btnRound1.style.display= 'none';
    btnRound2.style.display= 'none';
    btnRound3.style.display= 'none';
    btnRoundFinal.style.display= 'flex';
    btnRoundArrowBack.style.display= 'flex';
    btnRoundArrow.style.display = 'none';
})
btnRoundArrowBack.addEventListener('click', ()=>{
    btnRound1.style.display= 'flex';
    btnRound2.style.display= 'flex';
    btnRound3.style.display= 'flex';
    btnRoundFinal.style.display= 'none';
    btnRoundArrow.style.display = 'flex';
    btnRoundArrowBack.style.display= 'none';
})

btnCountries.addEventListener('click', ()=>{
    btnGames.style.borderBottom = '4px solid transparent'
    btnCountries.style.borderBottom = '4px solid white'
    btnClassification.style.borderBottom = '4px solid transparent'
    groups.style.display= 'flex'
    games.style.display= 'none'
    classification.style.display = 'none'
    about.style.display = 'none';
    roundsHeader.style.display = 'none'
    groupsName.style.display = 'flex'
    btnAbout.style.color = '#fff'
    goalsHeader.style.display = 'none'
    strikers.style.display = 'none';
    btnStrikers.style.backgroundColor = 'transparent';

})
btnGames.addEventListener('click', ()=>{
    btnGames.style.borderBottom = '4px solid white'
    btnCountries.style.borderBottom = '4px solid transparent'
    btnClassification.style.borderBottom = '4px solid transparent'
    groups.style.display= 'none'
    games.style.display= 'flex'
    classification.style.display = 'none'
    about.style.display = 'none';
    groupsName.style.display ='none'
    roundsHeader.style.display = 'flex'
    btnAbout.style.color = '#fff'
    goalsHeader.style.display = 'none'
    strikers.style.display = 'none';
    btnStrikers.style.backgroundColor = 'transparent';
})
btnClassification.addEventListener('click', ()=>{
    btnClassification.style.borderBottom = '4px solid white'
    btnGames.style.borderBottom = '4px solid transparent'
    btnCountries.style.borderBottom = '4px solid transparent'
    groups.style.display= 'none'
    games.style.display= 'none'
    classification.style.display = 'flex'
    about.style.display = 'none';
    groupsName.style.display ='none'
    roundsHeader.style.display = 'none'
    btnAbout.style.color = '#fff'
    goalsHeader.style.display = 'flex'
    strikers.style.display = 'none';
    btnStrikers.style.backgroundColor = 'transparent';
})

btnAbout.addEventListener('click', ()=>{
    btnAbout.style.color = '#006400'
    btnGames.style.borderBottom = '4px solid transparent'
    btnCountries.style.borderBottom = '4px solid transparent'
    btnClassification.style.borderBottom = '4px solid transparent'
    groups.style.display= 'none'
    games.style.display= 'none'
    classification.style.display = 'none'
    groupsName.style.display ='none'
    roundsHeader.style.display = 'none'
    groupsName.style.display ='none'
    roundsHeader.style.display = 'none'
    about.style.display = 'flex';
    goalsHeader.style.display = 'none'
    strikers.style.display = 'none';
    btnStrikers.style.backgroundColor = 'transparent';
})
btnStrikers.addEventListener('click', ()=>{
    btnStrikers.style.backgroundColor = '#006400';
    strikers.style.display = 'flex';
    classification.style.display= 'none';
    btnClassificationBack.style.display ='flex'
    
})
btnClassificationBack.addEventListener('click', ()=>{
    btnStrikers.style.backgroundColor = 'transparent';
    strikers.style.display = 'none';
    classification.style.display= 'flex';
    btnClassificationBack.style.display ='none'
})
btnGroupA.addEventListener('click', ()=>{
    btnGroupA.style.backgroundColor = '#006400'
    btnGroupB.style.backgroundColor = 'transparent'
    btnGroupC.style.backgroundColor = 'transparent'
    btnGroupD.style.backgroundColor = 'transparent'
    btnGroupE.style.backgroundColor = 'transparent'
    btnGroupF.style.backgroundColor = 'transparent'
    btnGroupG.style.backgroundColor = 'transparent'
    btnGroupH.style.backgroundColor = 'transparent'
    groupA.style.display = 'flex';
    groupB.style.display = 'none';
    groupC.style.display = 'none';
    groupD.style.display = 'none';
    groupE.style.display = 'none';
    groupF.style.display = 'none';
    groupG.style.display = 'none';
    groupH.style.display = 'none';

})
btnGroupB.addEventListener('click', ()=>{
    btnGroupA.style.backgroundColor = 'transparent'
    btnGroupB.style.backgroundColor = '#006400'
    btnGroupC.style.backgroundColor = 'transparent'
    btnGroupD.style.backgroundColor = 'transparent'
    btnGroupE.style.backgroundColor = 'transparent'
    btnGroupF.style.backgroundColor = 'transparent'
    btnGroupG.style.backgroundColor = 'transparent'
    btnGroupH.style.backgroundColor = 'transparent'
    groupA.style.display = 'none';
    groupB.style.display = 'flex';
    groupC.style.display = 'none';
    groupD.style.display = 'none';
    groupE.style.display = 'none';
    groupF.style.display = 'none';
    groupG.style.display = 'none';
    groupH.style.display = 'none';

})
btnGroupC.addEventListener('click', ()=>{
    btnGroupA.style.backgroundColor = 'transparent'
    btnGroupB.style.backgroundColor = 'transparent'
    btnGroupC.style.backgroundColor = '#006400'
    btnGroupD.style.backgroundColor = 'transparent'
    btnGroupE.style.backgroundColor = 'transparent'
    btnGroupF.style.backgroundColor = 'transparent'
    btnGroupG.style.backgroundColor = 'transparent'
    btnGroupH.style.backgroundColor = 'transparent'
    groupA.style.display = 'none';
    groupB.style.display = 'none';
    groupC.style.display = 'flex';
    groupD.style.display = 'none';
    groupE.style.display = 'none';
    groupF.style.display = 'none';
    groupG.style.display = 'none';
    groupH.style.display = 'none';

})
btnGroupD.addEventListener('click', ()=>{
    btnGroupA.style.backgroundColor = 'transparent'
    btnGroupB.style.backgroundColor = 'transparent'
    btnGroupC.style.backgroundColor = 'transparent'
    btnGroupD.style.backgroundColor = '#006400'
    btnGroupE.style.backgroundColor = 'transparent'
    btnGroupF.style.backgroundColor = 'transparent'
    btnGroupG.style.backgroundColor = 'transparent'
    btnGroupH.style.backgroundColor = 'transparent'
    groupA.style.display = 'none';
    groupB.style.display = 'none';
    groupC.style.display = 'none';
    groupD.style.display = 'flex';
    groupE.style.display = 'none';
    groupF.style.display = 'none';
    groupG.style.display = 'none';
    groupH.style.display = 'none';

})
btnGroupE.addEventListener('click', ()=>{
    btnGroupA.style.backgroundColor = 'transparent'
    btnGroupB.style.backgroundColor = 'transparent'
    btnGroupC.style.backgroundColor = 'transparent'
    btnGroupD.style.backgroundColor = 'transparent'
    btnGroupE.style.backgroundColor = '#006400'
    btnGroupF.style.backgroundColor = 'transparent'
    btnGroupG.style.backgroundColor = 'transparent'
    btnGroupH.style.backgroundColor = 'transparent'
    groupA.style.display = 'none';
    groupB.style.display = 'none';
    groupC.style.display = 'none';
    groupD.style.display = 'none';
    groupE.style.display = 'flex';
    groupF.style.display = 'none';
    groupG.style.display = 'none';
    groupH.style.display = 'none';

})
btnGroupF.addEventListener('click', ()=>{
    btnGroupA.style.backgroundColor = 'transparent'
    btnGroupB.style.backgroundColor = 'transparent'
    btnGroupC.style.backgroundColor = 'transparent'
    btnGroupD.style.backgroundColor = 'transparent'
    btnGroupE.style.backgroundColor = 'transparent'
    btnGroupF.style.backgroundColor = '#006400'
    btnGroupG.style.backgroundColor = 'transparent'
    btnGroupH.style.backgroundColor = 'transparent'
    groupA.style.display = 'none';
    groupB.style.display = 'none';
    groupC.style.display = 'none';
    groupD.style.display = 'none';
    groupE.style.display = 'none';
    groupF.style.display = 'flex';
    groupG.style.display = 'none';
    groupH.style.display = 'none';

})
btnGroupG.addEventListener('click', ()=>{
    btnGroupA.style.backgroundColor = 'transparent'
    btnGroupB.style.backgroundColor = 'transparent'
    btnGroupC.style.backgroundColor = 'transparent'
    btnGroupD.style.backgroundColor = 'transparent'
    btnGroupE.style.backgroundColor = 'transparent'
    btnGroupF.style.backgroundColor = 'transparent'
    btnGroupG.style.backgroundColor = '#006400'
    btnGroupH.style.backgroundColor = 'transparent'
    groupA.style.display = 'none';
    groupB.style.display = 'none';
    groupC.style.display = 'none';
    groupD.style.display = 'none';
    groupE.style.display = 'none';
    groupF.style.display = 'none';
    groupG.style.display = 'flex';
    groupH.style.display = 'none';

})
btnGroupH.addEventListener('click', ()=>{
    btnGroupA.style.backgroundColor = 'transparent'
    btnGroupB.style.backgroundColor = 'transparent'
    btnGroupC.style.backgroundColor = 'transparent'
    btnGroupD.style.backgroundColor = 'transparent'
    btnGroupE.style.backgroundColor = 'transparent'
    btnGroupF.style.backgroundColor = 'transparent'
    btnGroupG.style.backgroundColor = 'transparent'
    btnGroupH.style.backgroundColor = '#006400'
    groupA.style.display = 'none';
    groupB.style.display = 'none';
    groupC.style.display = 'none';
    groupD.style.display = 'none';
    groupE.style.display = 'none';
    groupF.style.display = 'none';
    groupG.style.display = 'none';
    groupH.style.display = 'flex';

})
btnRound1.addEventListener('click', ()=>{
    btnRound1.style.backgroundColor = '#006400'
    btnRound2.style.backgroundColor = 'transparent'
    btnRound3.style.backgroundColor = 'transparent'
    btnRoundFinal.style.backgroundColor = 'transparent';
    round1.style.display = 'flex'
    round2.style.display = 'none'
    round3.style.display = 'none'
    roundFinal.style.display = 'none'
})
btnRound2.addEventListener('click', ()=>{
    btnRound2.style.backgroundColor = '#006400'
    btnRound1.style.backgroundColor = 'transparent'
    btnRound3.style.backgroundColor = 'transparent'
    btnRoundFinal.style.backgroundColor = 'transparent';
    round1.style.display = 'none'
    round3.style.display = 'none'
    roundFinal.style.display = 'none'
    round2.style.display = 'flex'
})
btnRound3.addEventListener('click', ()=>{
    btnRound3.style.backgroundColor = '#006400'
    btnRound1.style.backgroundColor = 'transparent'
    btnRound2.style.backgroundColor = 'transparent'
    btnRoundFinal.style.backgroundColor = 'transparent';
    round1.style.display = 'none'
    round2.style.display = 'none'
    roundFinal.style.display = 'none'
    round3.style.display = 'flex'
})
btnRoundFinal.addEventListener('click', ()=>{
    btnRoundFinal.style.backgroundColor = '#006400';
    btnRound1.style.backgroundColor = 'transparent'
    btnRound2.style.backgroundColor = 'transparent'
    btnRound3.style.backgroundColor = 'transparent'
    roundFinal.style.display = 'flex'
    round1.style.display = 'none'
    round2.style.display = 'none'
    round3.style.display = 'none'
})

    groupA.innerHTML = `
    <div class="countries">
        <img class="flags" src="${flagUrl}${countries.Catar.code}.svg" alt="">
        <p>${countries.Catar.name}</p>
    </div>
    <div class="countries">
        <img class="flags" src="${flagUrl}${countries.Equador.code}.svg" alt="">
        <p>${countries.Equador.name}</p>
    </div>
    <div class="countries">
        <img class="flags" src="${flagUrl}${countries.Senegal.code}.svg" alt="">
        <p>${countries.Senegal.name}</p>
    </div>
    <div class="countries">
        <img class="flags" src="${flagUrl}${countries.Holanda.code}.svg" alt="">
        <p>${countries.Holanda.name}</p>
    </div>
    `
    groupB.innerHTML = `
    <div class="countries">
        <img class="flags" src="${flagUrl}${countries.Inglaterra.code}.svg" alt="">
        <p>${countries.Inglaterra.name}</p>
    </div>
    <div class="countries">
        <img class="flags" src="${flagUrl}${countries.Ira.code}.svg" alt="">
        <p>${countries.Ira.name}</p>
    </div>
    <div class="countries">
        <img class="flags" src="${flagUrl}${countries.EstadosUnidos.code}.svg" alt="">
        <p>${countries.EstadosUnidos.name}</p>
    </div>
    <div class="countries">
        <img class="flags" src="${flagUrl}${countries.Gales.code}.svg" alt="">
        <p>${countries.Gales.name}</p>
    </div>
    `
    groupC.innerHTML = `
    <div class="countries">
        <img class="flags" src="${flagUrl}${countries.Argentina.code}.svg" alt="">
        <p>${countries.Argentina.name}</p>
    </div>
    <div class="countries">
        <img class="flags" src="${flagUrl}${countries.ArabiaSaudita.code}.svg" alt="">
        <p>${countries.ArabiaSaudita.name}</p>
    </div>
    <div class="countries">
    <img class="flags" src="${flagUrl}${countries.Mexico.code}.svg" alt="">
        <p>${countries.Mexico.name}</p>
        </div>
    <div class="countries">
        <img class="flags" src="${flagUrl}${countries.Polonia.code}.svg" alt="">
        <p>${countries.Polonia.name}</p>
    </div>
    `

    groupD.innerHTML = `
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Franca.code}.svg" alt="">
            <p>${countries.Franca.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Australia.code}.svg" alt="">
            <p>${countries.Australia.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Dinamarca.code}.svg" alt="">
            <p>${countries.Dinamarca.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Tunisia.code}.svg" alt="">
            <p>${countries.Tunisia.name}</p>
        </div>
    `

    groupE.innerHTML = `
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Espanha.code}.svg" alt="">
            <p>${countries.Espanha.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.CostaRica.code}.svg" alt="">
            <p>${countries.CostaRica.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Alemanha.code}.svg" alt="">
            <p>${countries.Alemanha.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Japao.code}.svg" alt="">
            <p>${countries.Japao.name}</p>
        </div>
    `
    groupF.innerHTML = `
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Belgica.code}.svg" alt="">
            <p>${countries.Belgica.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Canada.code}.svg" alt="">
            <p>${countries.Canada.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Marrocos.code}.svg" alt="">
            <p>${countries.Marrocos.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Croacia.code}.svg" alt="">
            <p>${countries.Croacia.name}</p>
        </div>
    `

    groupG.innerHTML = `
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Brasil.code}.svg" alt="">
            <p>${countries.Brasil.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Servia.code}.svg" alt="">
            <p>${countries.Servia.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Suica.code}.svg" alt="">
            <p>${countries.Suica.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Camaroes.code}.svg" alt="">
            <p>${countries.Camaroes.name}</p>
        </div>
    `
    groupH.innerHTML = `
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Portugal.code}.svg" alt="">
        <p>${countries.Portugal.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Gana.code}.svg" alt="">
            <p>${countries.Gana.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.Uruguai.code}.svg" alt="">
        <p>${countries.Uruguai.name}</p>
        </div>
        <div class="countries">
            <img class="flags" src="${flagUrl}${countries.CoreiaSul.code}.svg" alt="">
            <p>${countries.CoreiaSul.name}</p>
        </div>
    `
    round1.innerHTML = `
            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Catar.code}.svg" alt="">
                        <p>${countries.Catar.name}</p>
                    </div>

                    <div class="versus">
                        <p>${match[1]}</p>
                    </div>

                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Equador.code}.svg" alt="">
                        <p>${countries.Equador.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[0]}</p>
                    <p>${time.hour[3]}</p>
                </div>
            </div>
           
            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Inglaterra.code}.svg" alt="">
                        <p>${countries.Inglaterra.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[2]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Ira.code}.svg" alt="">
                        <p>${countries.Ira.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[1]}</p>
                    <p>${time.hour[1]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Senegal.code}.svg" alt="">
                        <p>${countries.Senegal.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[3]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Holanda.code}.svg" alt="">
                        <p>${countries.Holanda.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[1]}</p>
                    <p>${time.hour[3]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.EstadosUnidos.code}.svg" alt="">
                        <p>${countries.EstadosUnidos.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[4]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Gales.code}.svg" alt="">
                        <p>${countries.Gales.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[1]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Argentina.code}.svg" alt="">
                        <p>${countries.Argentina.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[5]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.ArabiaSaudita.code}.svg" alt="">
                        <p>${countries.ArabiaSaudita.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[2]}</p>
                    <p>${time.hour[0]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Dinamarca.code}.svg" alt="">
                        <p>${countries.Dinamarca.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[6]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Tunisia.code}.svg" alt="">
                        <p>${countries.Tunisia.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[2]}</p>
                    <p>${time.hour[1]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Mexico.code}.svg" alt="">
                        <p>${countries.Mexico.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[7]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Polonia.code}.svg" alt="">
                        <p>${countries.Polonia.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[2]}</p>
                    <p>${time.hour[3]}</p>
                </div>
            </div>
    

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Franca.code}.svg" alt="">
                        <p>${countries.Franca.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[8]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Australia.code}.svg" alt="">
                        <p>${countries.Australia.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[2]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Marrocos.code}.svg" alt="">
                        <p>${countries.Marrocos.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[9]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Croacia.code}.svg" alt="">
                        <p>${countries.Croacia.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[3]}</p>
                    <p>${time.hour[0]}</p>
                </div>
            </div>

            <div class="round">
            <div class="game">
                <div class="countries-game">
                    <img class="flag-game" src="${flagUrl}${countries.Alemanha.code}.svg" alt="">
                    <p>${countries.Alemanha.name}</p>
                </div>
                <div class="versus">
                    <p>${match[10]}</p>
                </div>
                <div class="countries-game">
                    <img class="flag-game" src="${flagUrl}${countries.Japao.code}.svg" alt="">
                    <p>${countries.Japao.name}</p>
                </div>
            </div>
            <div class="date">
                <p>${time.date[3]}</p>
                <p>${time.hour[1]}</p>
            </div>
          </div>

          <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Espanha.code}.svg" alt="">
                        <p>${countries.Espanha.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[11]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.CostaRica.code}.svg" alt="">
                        <p>${countries.CostaRica.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[3]}</p>
                    <p>${time.hour[3]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Belgica.code}.svg" alt="">
                        <p>${countries.Belgica.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[12]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Canada.code}.svg" alt="">
                        <p>${countries.Canada.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[3]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Suica.code}.svg" alt="">
                        <p>${countries.Suica.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[13]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Camaroes.code}.svg" alt="">
                        <p>${countries.Camaroes.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[4]}</p>
                    <p>${time.hour[0]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Uruguai.code}.svg" alt="">
                        <p>${countries.Uruguai.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[14]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.CoreiaSul.code}.svg" alt="">
                        <p>${countries.CoreiaSul.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[4]}</p>
                    <p>${time.hour[1]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Portugal.code}.svg" alt="">
                        <p>${countries.Portugal.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[15]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Gana.code}.svg" alt="">
                        <p>${countries.Gana.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[4]}</p>
                    <p>${time.hour[3]}</p>
                </div>
            </div>

            <div class="round green">
            <img class="confette" src="./assets/img/confetti.gif" alt="">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Brasil.code}.svg" alt="">
                        <p>${countries.Brasil.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[16]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Servia.code}.svg" alt="">
                        <p>${countries.Servia.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[4]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>   
    `
    round2.innerHTML = `
            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Gales.code}.svg" alt="">
                        <p>${countries.Gales.name}</p>
                    </div>

                    <div class="versus">
                        <p>${match[17]}</p>
                    </div>

                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Ira.code}.svg" alt="">
                        <p>${countries.Ira.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[5]}</p>
                    <p>${time.hour[0]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Catar.code}.svg" alt="">
                        <p>${countries.Catar.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[18]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Senegal.code}.svg" alt="">
                        <p>${countries.Senegal.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[5]}</p>
                    <p>${time.hour[1]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Holanda.code}.svg" alt="">
                        <p>${countries.Holanda.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[19]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Equador.code}.svg" alt="">
                        <p>${countries.Equador.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[5]}</p>
                    <p>${time.hour[3]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Inglaterra.code}.svg" alt="">
                        <p>${countries.Inglaterra.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[20]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.EstadosUnidos.code}.svg" alt="">
                        <p>${countries.EstadosUnidos.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[5]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Tunisia.code}.svg" alt="">
                        <p>${countries.Tunisia.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[21]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Australia.code}.svg" alt="">
                        <p>${countries.Australia.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[6]}</p>
                    <p>${time.hour[0]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Polonia.code}.svg" alt="">
                        <p>${countries.Polonia.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[22]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.ArabiaSaudita.code}.svg" alt="">
                        <p>${countries.ArabiaSaudita.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[6]}</p>
                    <p>${time.hour[1]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Franca.code}.svg" alt="">
                        <p>${countries.Franca.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[23]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Dinamarca.code}.svg" alt="">
                        <p>${countries.Dinamarca.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[6]}</p>
                    <p>${time.hour[3]}</p>
                </div>
            </div>
    

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Argentina.code}.svg" alt="">
                        <p>${countries.Argentina.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[24]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Mexico.code}.svg" alt="">
                        <p>${countries.Mexico.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[6]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Japao.code}.svg" alt="">
                        <p>${countries.Japao.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[25]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.CostaRica.code}.svg" alt="">
                        <p>${countries.CostaRica.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[7]}</p>
                    <p>${time.hour[0]}</p>
                </div>
            </div>

            <div class="round">
            <div class="game">
                <div class="countries-game">
                    <img class="flag-game" src="${flagUrl}${countries.Belgica.code}.svg" alt="">
                    <p>${countries.Belgica.name}</p>
                </div>
                <div class="versus">
                    <p>${match[26]}</p>
                </div>
                <div class="countries-game">
                    <img class="flag-game" src="${flagUrl}${countries.Marrocos.code}.svg" alt="">
                    <p>${countries.Marrocos.name}</p>
                </div>
            </div>
            <div class="date">
                <p>${time.date[7]}</p>
                <p>${time.hour[1]}</p>
            </div>
          </div>

          <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Croacia.code}.svg" alt="">
                        <p>${countries.Croacia.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[27]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Canada.code}.svg" alt="">
                        <p>${countries.Canada.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[7]}</p>
                    <p>${time.hour[3]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Espanha.code}.svg" alt="">
                        <p>${countries.Espanha.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[28]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Alemanha.code}.svg" alt="">
                        <p>${countries.Alemanha.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[7]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Camaroes.code}.svg" alt="">
                        <p>${countries.Camaroes.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[29]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Servia.code}.svg" alt="">
                        <p>${countries.Servia.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[8]}</p>
                    <p>${time.hour[0]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.CoreiaSul.code}.svg" alt="">
                        <p>${countries.CoreiaSul.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[30]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Gana.code}.svg" alt="">
                        <p>${countries.Gana.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[8]}</p>
                    <p>${time.hour[1]}</p>
                </div>
            </div>

            <div class="round green">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Brasil.code}.svg" alt="">
                        <p>${countries.Brasil.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[31]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Suica.code}.svg" alt="">
                        <p>${countries.Suica.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[8]}</p>
                    <p>${time.hour[3]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Portugal.code}.svg" alt="">
                        <p>${countries.Portugal.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[32]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Uruguai.code}.svg" alt="">
                        <p>${countries.Uruguai.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[8]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>   
    `

    round3.innerHTML = `
            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Equador.code}.svg" alt="">
                        <p>${countries.Equador.name}</p>
                    </div>

                    <div class="versus">
                        <p>${match[33]}</p>
                    </div>

                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Senegal.code}.svg" alt="">
                        <p>${countries.Senegal.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[9]}</p>
                    <p>${time.hour[2]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Holanda.code}.svg" alt="">
                        <p>${countries.Holanda.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[34]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Catar.code}.svg" alt="">
                        <p>${countries.Catar.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[9]}</p>
                    <p>${time.hour[2]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Ira.code}.svg" alt="">
                        <p>${countries.Ira.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[35]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.EstadosUnidos.code}.svg" alt="">
                        <p>${countries.EstadosUnidos.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[9]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Gales.code}.svg" alt="">
                        <p>${countries.Gales.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[36]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Inglaterra.code}.svg" alt="">
                        <p>${countries.Inglaterra.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[9]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Tunisia.code}.svg" alt="">
                        <p>${countries.Tunisia.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[37]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Franca.code}.svg" alt="">
                        <p>${countries.Franca.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[10]}</p>
                    <p>${time.hour[2]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Australia.code}.svg" alt="">
                        <p>${countries.Australia.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[38]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Dinamarca.code}.svg" alt="">
                        <p>${countries.Dinamarca.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[10]}</p>
                    <p>${time.hour[2]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Polonia.code}.svg" alt="">
                        <p>${countries.Polonia.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[39]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Argentina.code}.svg" alt="">
                        <p>${countries.Argentina.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[10]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>
    

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.ArabiaSaudita.code}.svg" alt="">
                        <p>${countries.ArabiaSaudita.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[40]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Mexico.code}.svg" alt="">
                        <p>${countries.Mexico.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[10]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Croacia.code}.svg" alt="">
                        <p>${countries.Croacia.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[41]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Belgica.code}.svg" alt="">
                        <p>${countries.Belgica.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[11]}</p>
                    <p>${time.hour[2]}</p>
                </div>
            </div>

            <div class="round">
            <div class="game">
                <div class="countries-game">
                    <img class="flag-game" src="${flagUrl}${countries.Canada.code}.svg" alt="">
                    <p>${countries.Canada.name}</p>
                </div>
                <div class="versus">
                    <p>${match[42]}</p>
                </div>
                <div class="countries-game">
                    <img class="flag-game" src="${flagUrl}${countries.Marrocos.code}.svg" alt="">
                    <p>${countries.Marrocos.name}</p>
                </div>
            </div>
            <div class="date">
                <p>${time.date[11]}</p>
                <p>${time.hour[2]}</p>
            </div>
          </div>

          <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Japao.code}.svg" alt="">
                        <p>${countries.Japao.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[43]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Espanha.code}.svg" alt="">
                        <p>${countries.Espanha.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[11]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.CostaRica.code}.svg" alt="">
                        <p>${countries.CostaRica.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[44]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Alemanha.code}.svg" alt="">
                        <p>${countries.Alemanha.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[11]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.CoreiaSul.code}.svg" alt="">
                        <p>${countries.CoreiaSul.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[45]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Portugal.code}.svg" alt="">
                        <p>${countries.Portugal.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[12]}</p>
                    <p>${time.hour[2]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Gana.code}.svg" alt="">
                        <p>${countries.Gana.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[46]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Uruguai.code}.svg" alt="">
                        <p>${countries.Uruguai.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[12]}</p>
                    <p>${time.hour[2]}</p>
                </div>
            </div>

            <div class="round">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Servia.code}.svg" alt="">
                        <p>${countries.Servia.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[47]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Suica.code}.svg" alt="">
                        <p>${countries.Suica.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[12]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>

            <div class="round green">
                <div class="game">
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Camaroes.code}.svg" alt="">
                        <p>${countries.Camaroes.name}</p>
                    </div>
                    <div class="versus">
                        <p>${match[48]}</p>
                    </div>
                    <div class="countries-game">
                        <img class="flag-game" src="${flagUrl}${countries.Brasil.code}.svg" alt="">
                        <p>${countries.Brasil.name}</p>
                    </div>
                </div>
                <div class="date">
                    <p>${time.date[12]}</p>
                    <p>${time.hour[4]}</p>
                </div>
            </div>   
            
    `
    roundFinal.innerHTML = `
    <div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[0]}</p>
        </div>

        <div class="versus">
            <p>${match[49]}</p>
        </div>

        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[3]}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Oitavas de Final 1</p>
        <p>${time.dateFinals[0]}</p>
        <p>${time.hour[2]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[4]}</p>
        </div>
        <div class="versus">
            <p>${match[50]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[6]}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Oitavas de Final 2</p>
        <p>${time.dateFinals[0]}</p>
        <p>${time.hour[4]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[8]}</p>
        </div>
        <div class="versus">
            <p>${match[51]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[11]}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Oitavas de Final 3</p>
        <p>${time.dateFinals[2]}</p>
        <p>${time.hour[2]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[12]}</p>
        </div>
        <div class="versus">
            <p>${match[52]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[15]}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Oitavas de Final 4</p>
        <p>${time.dateFinals[2]}</p>
        <p>${time.hour[4]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[2]}</p>
        </div>
        <div class="versus">
            <p>${match[53]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[1]}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Oitavas de Final 5</p>
        <p>${time.dateFinals[1]}</p>
        <p>${time.hour[4]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[6]}</p>
        </div>
        <div class="versus">
            <p>${match[54]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[5]}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Oitavas de Final 6</p>
        <p>${time.dateFinals[1]}</p>
        <p>${time.hour[2]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[10]}</p>
        </div>
        <div class="versus">
            <p>${match[55]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[9]}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Oitavas de Final 7</p>
        <p>${time.dateFinals[3]}</p>
        <p>${time.hour[2]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[14]}</p>
        </div>
        <div class="versus">
            <p>${match[56]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.name[13]}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Oitavas de Final 8</p>
        <p>${time.dateFinals[3]}</p>
        <p>${time.hour[4]}</p>
    </div>
</div> 

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
        <div class="versus">
            <p>${match[57]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Quartas de Final 1</p>
        <p>${time.dateFinals[4]}</p>
        <p>${time.hour[4]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
        <div class="versus">
            <p>${match[58]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Quartas de Final 2</p>
        <p>${time.dateFinals[4]}</p>
        <p>${time.hour[2]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
        <div class="versus">
            <p>${match[59]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Quartas de Final 3</p>
        <p>${time.dateFinals[5]}</p>
        <p>${time.hour[4]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
        <div class="versus">
            <p>${match[60]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Quartas de Final 4</p>
        <p>${time.dateFinals[5]}</p>
        <p>${time.hour[4]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
        <div class="versus">
            <p>${match[61]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Semifinal 1</p>
        <p>${time.dateFinals[6]}</p>
        <p>${time.hour[4]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
        <div class="versus">
            <p>${match[62]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Semifinal 2</p>
        <p>${time.dateFinals[7]}</p>
        <p>${time.hour[4]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
        <div class="versus">
            <p>${match[63]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">3º Lugar</p>
        <p>${time.dateFinals[8]}</p>
        <p>${time.hour[2]}</p>
    </div>
</div>

<div class="round">
    <div class="game">
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
        <div class="versus">
            <p>${match[64]}</p>
        </div>
        <div class="countries-game">
            <img class="flag-game" src="${flagUrl}${countries.Default.code}.svg" alt="">
            <p>${countries.Default.text}</p>
        </div>
    </div>
    <div class="date">
        <p class="gold">Final</p>
        <p>${time.date[9]}</p>
        <p>${time.hour[2]}</p>
        
    </div>
</div>
    `
const catar= `<img class="flag-classification" src="${flagUrl}${countries.Catar.code}.svg" alt="">${countries.Catar.name}`
const equador= `<img class="flag-classification" src="${flagUrl}${countries.Equador.code}.svg" alt="">${countries.Equador.name}`
const senegal = `<img class="flag-classification" src="${flagUrl}${countries.Senegal.code}.svg" alt="">${countries.Senegal.name}`
const holanda= `<img class="flag-classification" src="${flagUrl}${countries.Holanda.code}.svg" alt="">${countries.Holanda.name}`

const inglaterra= `<img class="flag-classification" src="${flagUrl}${countries.Inglaterra.code}.svg" alt="">${countries.Inglaterra.name}`
const ira= `<img class="flag-classification" src="${flagUrl}${countries.Ira.code}.svg" alt="">${countries.Ira.name}`
const eua= `<img class="flag-classification" src="${flagUrl}${countries.EstadosUnidos.code}.svg" alt="">${countries.EstadosUnidos.name}`
const gales= `<img class="flag-classification" src="${flagUrl}${countries.Gales.code}.svg" alt="">${countries.Gales.name}`

const argentina= `<img class="flag-classification" src="${flagUrl}${countries.Argentina.code}.svg" alt="">${countries.Argentina.name}`
const arabiaSaudita= `<img class="flag-classification" src="${flagUrl}${countries.ArabiaSaudita.code}.svg" alt="">${countries.ArabiaSaudita.name}`
const mexico= `<img class="flag-classification" src="${flagUrl}${countries.Mexico.code}.svg" alt="">${countries.Mexico.name}`
const polonia= `<img class="flag-classification" src="${flagUrl}${countries.Polonia.code}.svg" alt="">${countries.Polonia.name}`

const franca= `<img class="flag-classification" src="${flagUrl}${countries.Franca.code}.svg" alt="">${countries.Franca.name}`
const australia= `<img class="flag-classification" src="${flagUrl}${countries.Australia.code}.svg" alt="">${countries.Australia.name}`
const dinamarca= `<img class="flag-classification" src="${flagUrl}${countries.Dinamarca.code}.svg" alt="">${countries.Dinamarca.name}`
const tunisia= `<img class="flag-classification" src="${flagUrl}${countries.Tunisia.code}.svg" alt="">${countries.Tunisia.name}`

const espanha= `<img class="flag-classification" src="${flagUrl}${countries.Espanha.code}.svg" alt="">${countries.Espanha.name}`
const costaRica= `<img class="flag-classification" src="${flagUrl}${countries.CostaRica.code}.svg" alt="">${countries.CostaRica.name}`
const alemanha= `<img class="flag-classification" src="${flagUrl}${countries.Alemanha.code}.svg" alt="">${countries.Alemanha.name}`
const japao= `<img class="flag-classification" src="${flagUrl}${countries.Japao.code}.svg" alt="">${countries.Japao.name}`

const belgica= `<img class="flag-classification" src="${flagUrl}${countries.Belgica.code}.svg" alt="">${countries.Belgica.name}`
const canada= `<img class="flag-classification" src="${flagUrl}${countries.Canada.code}.svg" alt="">${countries.Canada.name}`
const marrocos= `<img class="flag-classification" src="${flagUrl}${countries.Marrocos.code}.svg" alt="">${countries.Marrocos.name}`
const croacia= `<img class="flag-classification" src="${flagUrl}${countries.Croacia.code}.svg" alt="">${countries.Croacia.name}`

const brasil= `<img class="flag-classification" src="${flagUrl}${countries.Brasil.code}.svg" alt="">${countries.Brasil.name}`
const servia= `<img class="flag-classification" src="${flagUrl}${countries.Servia.code}.svg" alt="">${countries.Servia.name}`
const suica= `<img class="flag-classification" src="${flagUrl}${countries.Suica.code}.svg" alt="">${countries.Suica.name}`
const camaroes= `<img class="flag-classification" src="${flagUrl}${countries.Camaroes.code}.svg" alt="">${countries.Camaroes.name}`

const portugal= `<img class="flag-classification" src="${flagUrl}${countries.Portugal.code}.svg" alt="">${countries.Portugal.name}`
const gana= `<img class="flag-classification" src="${flagUrl}${countries.Gana.code}.svg" alt="">${countries.Gana.name}`
const uruguai= `<img class="flag-classification" src="${flagUrl}${countries.Uruguai.code}.svg" alt="">${countries.Uruguai.name}`
const coreiaDoSul= `<img class="flag-classification" src="${flagUrl}${countries.CoreiaSul.code}.svg" alt="">${countries.CoreiaSul.name}`

    classification.innerHTML = `
    <div class="classification-group">
    <div>
        <h2>${groupTitle} A</h2>
    </div>
    <div class="title-table">
        <p class="teams-name"> ${teamTitle} </p>
        <p>P</p> <p>PJ</p> <p>V</p> <p>E</p> <p>D</p> <p>GM</p> <p>GC</p> <p>SG</p>
    </div>
    <div class="team">
        <p class="teams-name team-first">1 ${holanda}</p>
        <p>4</p> <p>2</p> <p>1</p> <p>1</p> <p>0</p> <p>3</p> <p>1</p> <p>2</p>
    </div>
    <div class="team">
        <p class="teams-name team-secondary">2 ${equador}</p>
        <p>4</p> <p>2</p> <p>1</p> <p>1</p> <p>0</p> <p>3</p> <p>1</p> <p>2</p>
    </div>
    <div class="team">
        <p class="teams-name">3 ${senegal}</p>
        <p>3</p> <p>2</p> <p>1</p> <p>0</p> <p>1</p> <p>3</p> <p>3</p> <p>0</p>
    </div>
    <div class="team">
        <p class="teams-name">4 ${catar}</p>
        <p>0</p> <p>2</p> <p>0</p> <p>0</p> <p>2</p> <p>1</p> <p>5</p> <p>-4</p>
    </div>
</div>

<div class="classification-group">
<div>
    <h2>${groupTitle} B</h2>
</div>
<div class="title-table">
    <p class="teams-name"> ${teamTitle} </p>
    <p>P</p> <p>PJ</p> <p>V</p> <p>E</p> <p>D</p> <p>GM</p> <p>GC</p> <p>SG</p>
</div>
<div class="team">
    <p class="teams-name team-first">1 ${inglaterra}</p>
    <p>4</p> <p>2</p> <p>1</p> <p>1</p> <p>0</p> <p>6</p> <p>2</p> <p>4</p>
</div>
<div class="team">
    <p class="teams-name team-secondary">2 ${ira}</p>
    <p>3</p> <p>2</p> <p>1</p> <p>0</p> <p>1</p> <p>4</p> <p>6</p> <p>-2</p>
</div>
<div class="team">
    <p class="teams-name">3 ${eua}</p>
    <p>2</p> <p>2</p> <p>0</p> <p>2</p> <p>0</p> <p>1</p> <p>1</p> <p>0</p>
</div>
<div class="team">
    <p class="teams-name">4 ${gales}</p>
    <p>1</p> <p>2</p> <p>0</p> <p>1</p> <p>1</p> <p>1</p> <p>3</p> <p>-2</p>
</div>
</div>

<div class="classification-group">
<div>
    <h2>${groupTitle} C</h2>
</div>
<div class="title-table">
    <p class="teams-name"> ${teamTitle} </p>
    <p>P</p> <p>PJ</p> <p>V</p> <p>E</p> <p>D</p> <p>GM</p> <p>GC</p> <p>SG</p>
</div>
<div class="team">
    <p class="teams-name team-first">1 ${polonia}</p>
    <p>4</p> <p>2</p> <p>1</p> <p>1</p> <p>0</p> <p>2</p> <p>0</p> <p>2</p>
</div>
<div class="team">
    <p class="teams-name team-secondary">2 ${argentina}</p>
    <p>3</p> <p>2</p> <p>1</p> <p>0</p> <p>1</p> <p>3</p> <p>2</p> <p>1</p>
</div>
<div class="team">
    <p class="teams-name">3 ${arabiaSaudita}</p>
    <p>3</p> <p>2</p> <p>1</p> <p>0</p> <p>1</p> <p>2</p> <p>3</p> <p>-1</p>
</div>
<div class="team">
    <p class="teams-name">4 ${mexico}</p>
    <p>1</p> <p>2</p> <p>0</p> <p>1</p> <p>1</p> <p>0</p> <p>2</p> <p>-2</p>
</div>
</div>

<div class="classification-group">
<div>
    <h2>${groupTitle} D</h2>
</div>
<div class="title-table">
    <p class="teams-name"> ${teamTitle} </p>
    <p>P</p> <p>PJ</p> <p>V</p> <p>E</p> <p>D</p> <p>GM</p> <p>GC</p> <p>SG</p>
</div>
<div class="team">
    <p class="teams-name team-first">1${franca}</p>
    <p>6</p> <p>2</p> <p>2</p> <p>0</p> <p>0</p> <p>6</p> <p>2</p> <p>4</p>
</div>
<div class="team">
    <p class="teams-name team-secondary">2${australia}</p>
    <p>3</p> <p>2</p> <p>1</p> <p>0</p> <p>1</p> <p>2</p> <p>4</p> <p>-2</p>
</div>
<div class="team">
    <p class="teams-name">3${dinamarca}</p>
    <p>1</p> <p>2</p> <p>0</p> <p>1</p> <p>1</p> <p>1</p> <p>2</p> <p>-1</p>
</div>
<div class="team">
    <p class="teams-name">4${tunisia}</p>
    <p>1</p> <p>2</p> <p>0</p> <p>1</p> <p>1</p> <p>0</p> <p>1</p> <p>-1</p>
</div>
</div>

<div class="classification-group">
<div>
    <h2>${groupTitle} E</h2>
</div>
<div class="title-table">
    <p class="teams-name"> ${teamTitle} </p>
    <p>P</p> <p>PJ</p> <p>V</p> <p>E</p> <p>D</p> <p>GM</p> <p>GC</p> <p>SG</p>
</div>
<div class="team">
    <p class="teams-name team-first">1${espanha}</p>
    <p>3</p> <p>1</p> <p>1</p> <p>0</p> <p>0</p> <p>7</p> <p>0</p> <p>7</p>
</div>
<div class="team">
<p class="teams-name team-secondary">2${japao}</p>
    <p>3</p> <p>1</p> <p>1</p> <p>0</p> <p>0</p> <p>2</p> <p>1</p> <p>1</p>
</div>
<div class="team">
    <p class="teams-name">3${alemanha}</p>
    <p>0</p> <p>1</p> <p>0</p> <p>0</p> <p>1</p> <p>1</p> <p>2</p> <p>-1</p>
</div>
<div class="team">
    <p class="teams-name">4${costaRica}</p>
    <p>0</p> <p>1</p> <p>0</p> <p>0</p> <p>1</p> <p>0</p> <p>7</p> <p>-7</p>
</div>
</div>

<div class="classification-group">
<div>
    <h2>${groupTitle} F</h2>
</div>
<div class="title-table">
    <p class="teams-name"> ${teamTitle} </p>
    <p>P</p> <p>PJ</p> <p>V</p> <p>E</p> <p>D</p> <p>GM</p> <p>GC</p> <p>SG</p>
</div>
<div class="team">
    <p class="teams-name team-first">1${belgica}</p>
    <p>3</p> <p>1</p> <p>1</p> <p>0</p> <p>0</p> <p>1</p> <p>0</p> <p>1</p>
</div>
<div class="team">
    <p class="teams-name team-secondary">2${marrocos}</p>
    <p>1</p> <p>1</p> <p>0</p> <p>1</p> <p>0</p> <p>0</p> <p>0</p> <p>0</p>
</div>
<div class="team">
<p class="teams-name">3${croacia}</p>
    <p>1</p> <p>1</p> <p>0</p> <p>1</p> <p>0</p> <p>0</p> <p>0</p> <p>0</p>
</div>
<div class="team">
    <p class="teams-name">4${canada}</p>
    <p>0</p> <p>1</p> <p>0</p> <p>0</p> <p>1</p> <p>0</p> <p>1</p> <p>-1</p>
</div>
</div>

<div class="classification-group">
<div>
    <h2>${groupTitle} G</h2>
</div>
<div class="title-table">
    <p class="teams-name"> ${teamTitle} </p>
    <p>P</p> <p>PJ</p> <p>V</p> <p>E</p> <p>D</p> <p>GM</p> <p>GC</p> <p>SG</p>
</div>
<div class="team">
    <p class="teams-name team-first">1${brasil}</p>
    <p>3</p> <p>1</p> <p>1</p> <p>0</p> <p>0</p> <p>2</p> <p>0</p> <p>0</p>
</div>
<div class="team">
    <p class="teams-name team-secondary">2${suica}</p>
    <p>3</p> <p>1</p> <p>1</p> <p>0</p> <p>0</p> <p>1</p> <p>0</p> <p>1</p>
</div>
<div class="team">
    <p class="teams-name">3${camaroes}</p>
    <p>0</p> <p>1</p> <p>0</p> <p>0</p> <p>1</p> <p>0</p> <p>1</p> <p>-1</p>
</div>
<div class="team">
    <p class="teams-name">4${servia}</p>
    <p>0</p> <p>1</p> <p>0</p> <p>0</p> <p>1</p> <p>0</p> <p>2</p> <p>-2</p>
</div>
</div>

<div class="classification-group">
<div>
    <h2>${groupTitle} H</h2>
</div>
<div class="title-table">
    <p class="teams-name"> ${teamTitle} </p>
    <p>P</p> <p>PJ</p> <p>V</p> <p>E</p> <p>D</p> <p>GM</p> <p>GC</p> <p>SG</p>
</div>
<div class="team">
    <p class="teams-name team-first">1${portugal}</p>
    <p>3</p> <p>1</p> <p>1</p> <p>0</p> <p>0</p> <p>3</p> <p>2</p> <p>1</p>
</div>
<div class="team">
    <p class="teams-name team-secondary">2${coreiaDoSul}</p>
    <p>1</p> <p>1</p> <p>0</p> <p>1</p> <p>0</p> <p>0</p> <p>0</p> <p>0</p>
</div>
<div class="team">
    <p class="teams-name">3${uruguai}</p>
    <p>1</p> <p>1</p> <p>0</p> <p>1</p> <p>0</p> <p>0</p> <p>0</p> <p>0</p>
</div>
<div class="team">
    <p class="teams-name">4${gana}</p>
    <p>0</p> <p>1</p> <p>0</p> <p>0</p> <p>1</p> <p>2</p> <p>3</p> <p>-1</p>
</div>
</div>

<div class="strikers">
       
</div>

    ` 
about.innerHTML = `
<div class="container-about">
        <div class="title">
                <h3 class="title-for">Desenvolvido por</h3>
                <img src="https://github.com/jeansilvatech.png" alt="">
                <h2 class="name">Jean Silva</h2>
                <h4 class="dev">Front End Developer Jr</h4>
            </div>
            <div class="social">
                <a href="https://github.com/jeansilvatech"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/jeanpesil/"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/jeansilvatech"><i class="fa-brands fa-instagram"></i></a>
            </div>

            <div class="footer">
            <p>Gostou e quer fazer uma contribuição?</p>
            <img src="./assets/img/qrcode-pix.png" alt="">
            <h4 class="code-pix">Copiar Código</h4>
            <i class="fa-brands fa-pix"></i>
            <p>Copyright © <span></span></p>
            </div>
        </div>
`

for(let i=0; i <= goals.length; i++){
    goals.sort(function(x,y){
        return y.goal - x.goal;
    })
    strikers.innerHTML = strikers.innerHTML + `
    <div class="player">
            <img src="${flagUrl}${goals[i].country}.svg" alt="" class="flag-player">
            <div class="name">
            <h2 class="player-name">${goals[i].name}</h2>
            <span>${goals[i].position}</span>
            </div>
            <img class="goals-icon" src="./assets/img/goal.png" alt="">
            <p class="player-goals">${goals[i].goal}</p>
            
        </div>
    `
}


const year = new Date().getFullYear()
const span = document.querySelector('.footer p span');
span.innerText = year
const btnCodePix = document.querySelector('.footer .code-pix')
btnCodePix.addEventListener('click', ()=>{
const copyText = '00020126360014BR.GOV.BCB.PIX0114+553197161719252040000530398654040.005802BR5921Jean Pereira da Silva6014Belo Horizonte62180514DOACAOSITECOPA6304D2A9'
navigator.clipboard.writeText(copyText);
setTimeout(() => {
    btnCodePix.innerText = 'Copiar Código'
    btnCodePix.style.backgroundColor = 'white'
    btnCodePix.style.color = '#1c1c1c'
}, 3000);
btnCodePix.innerText = 'Copiado!'
btnCodePix.style.backgroundColor = '#006400'
btnCodePix.style.color = 'white'
        
})