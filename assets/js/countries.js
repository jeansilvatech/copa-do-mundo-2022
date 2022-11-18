import { btnClassification, btnCountries, btnGames, btnRound1, btnRound2, btnRound3, btnRoundFinal } from "./script.js"


const ptBR = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabádo"]
const es = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
const en = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

export const time ={
    hour:[],
    date:[],
    dateFinals:[]
 }
 
export const countries = {
        Catar:{
            name: "Catar",
            code: "qa"
        
        },
        Equador:{
            name: "Equador",
            code: "ec"
            
        },
        Senegal:{
            name: "Senegal",
            code: "sn"
        },
        Holanda:{
            name: "Holanda",
            code: "nl"
            
        },
        Inglaterra:{
            name: "Inglaterra",
            code: "gb-eng"
            
        },
        Ira:{
            name: "Irã",
            code: "ir",
            
        },
        EstadosUnidos:{
            name: "Estados Unidos",
            code: "us",
            
        },
        Gales:{
            name: "Gales",
            code: "gb-wls",
            
        },
        Argentina:{
            name: "Argentina",
            code: "ar",
            
        },
        ArabiaSaudita:{
            name: "Arábia Saudita",
            code: "sa",
            
        },
        Mexico:{
            name: "México",
            code: "mx",
            
        },
        Polonia:{
            name: "Polônia",
            code: "pl",
            
        },
        Franca:{
            name: "França",
            code: "fr",
            
        },
        Australia:{
            name: "Austrália",
            code: "au",
            
        },
        Dinamarca:{
            name: "Dinamarca",
            code: "dk",
            
        },
        Tunisia:{
            name: "Tunísia",
            code: "tn",
            
        },
        Espanha:{
            name: "Espanha",
            code: "es",
            
        },
        CostaRica:{
            name: "Costa Rica",
            code: "cr",
            
        },
        Alemanha:{
            name: "Alemanha",
            code: "de",
            
        },
        Japao:{
            name: "Japão",
            code: "jp",
            
        },
        Belgica:{
            name: "Bélgica",
            code: "be",
            
        },
        Canada:{
            name: "Canadá",
            code: "ca",
            
        },
        Marrocos:{
            name: "Marrocos",
            code: "ma",
            
        },
        Croacia:{
            name: "Croácia",
            code: "hr",
            
        },
        Brasil:{
            name: "Brasil",
            code: "br",
            
        },
        Servia:{
            name: "Sérvia",
            code: "rs",
            
        },
        Suica:{
            name: "Suiça",
            code: "ch",
            
        },
        Camaroes:{
            name: "Camarões",
            code: "cm",
            
        },
        Portugal:{
            name: "Portugal",
            code: "pt",
            
        },
        Gana:{
            name: "Gana",
            code: "gh",
            
        },
        Uruguai:{
            name: "Uruguai",
            code: "uy",
            
        },
        CoreiaSul:{
            name: "Coreia do Sul",
            code: "kr",
        },
        Default:{
            name:[
                    "1º A",
                    "2º A",
                    "1º B",
                    "2º B",
                    "1º C",
                    "2º C",
                    "1º D",
                    "2º D",
                    "1º E",
                    "2º E",
                    "1º F",
                    "2º F",
                    "1º G",
                    "2º G",
                    "1º H",
                    "2º H"
                ],
            code: "default",
            text: "A confirmar"
        } 
    }


function timeGMT(){
    const date = new Date()
    const gmt = [date.toTimeString()]
    const gmtLocal =gmt[0].split(' ')[1]
    switch(gmtLocal){
        // case 'GMT+1200':
        // time.hour =["22:00","01:00", "03:00","04:00","07:00"]
        // break;
        // case 'GMT+1100':
        // time.hour =["21:00","00:00", "02:00","03:00","06:00"]
        // break;
        // case 'GMT+1000':
        // time.hour =["20:00","23:00", "01:00","02:00","05:00"]
        // break;
        // case 'GMT+0900':
        // time.hour =["19:00","22:00", "00:00","01:00","04:00"]
        // break;
        // case 'GMT+0800':
        // time.hour =["18:00","21:00", "23:00","00:00","03:00"]
        // break;
        // case 'GMT+0700':
        // time.hour =["17:00","20:00", "22:00","23:00","02:00"]
        // break;
        // case 'GMT+0600':
        // time.hour =["16:00","19:00", "21:00","22:00","01:00"]
        // break;
        // case 'GMT+0500':
        // time.hour =["15:00","18:00", "20:00","21:00","00:00"]
        // break;
        // // 
        case 'GMT+0400':
        time.hour =["14:00","17:00", "19:00","20:00","23:00"]
        break;
        case 'GMT+0300':
        time.hour =["13:00","16:00", "18:00","19:00","22:00"]
        break;
        case 'GMT+0200':
        time.hour =["12:00","15:00", "17:00","18:00","21:00"]
        break;
        case 'GMT+0100':
        time.hour =["11:00","14:00", "16:00","17:00","20:00"]
        break;
        case 'GMT+0000':
        time.hour =["10:00","13:00", "15:00","16:00","19:00"]
        break;
        case 'GMT-0100':
        time.hour =["09:00","12:00", "14:00","15:00","18:00"]
        break;
        case 'GMT-0200':
        time.hour =["08:00","11:00", "13:00","14:00","17:00"]
        break;
        case 'GMT-0300':
        time.hour =["07:00","10:00", "12:00","13:00","16:00"]
        break; 
        case 'GMT-0400':
        time.hour =["06:00","09:00", "11:00","12:00","15:00"]
         break;
        case 'GMT-0500':
        time.hour =["05:00","08:00", "10:00","11:00","14:00"]
        break;
        case 'GMT-0600':
        time.hour =["04:00","07:00", "09:00","10:00","13:00"]
        break;
        case 'GMT-0700':
        time.hour =["03:00","06:00", "08:00","09:00","12:00"]
        break;
        case 'GMT-0800':
        time.hour =["02:00","05:00", "07:00","08:00","11:00"]
        break;
        case 'GMT-0900':
        time.hour =["01:00","04:00", "06:00","07:00","10:00"]
        break;
        case 'GMT-1000':
        time.hour =["00:00","03:00", "05:00","06:00","09:00"]
        break;
        // case 'GMT-1100':
        // time.hour =["23:00","02:00", "04:00","05:00","08:00"]
        // break;
        // case 'GMT-1200':
        // time.hour =["22:00","01:00", "03:00","04:00","07:00"]
        // break;
        default:
            time.hour =["13:00 UTC +3","16:00 UTC +3", "18:00 UTC +3","19:00 UTC +3","22:00 UTC +3"]
    }
}
export function language(){
    const languageUser = window.navigator.language
    switch(languageUser){
        case 'pt-BR':
            time.date=[  
                `20/11 - ${ptBR[0]}`, 
                `21/11 - ${ptBR[1]}`,
                `22/11 - ${ptBR[2]}`,
                `23/11 - ${ptBR[3]}`,
                `24/11 - ${ptBR[4]}`,
                // 
                `25/11 - ${ptBR[5]}`,
                `26/11 - ${ptBR[6]}`,
                `27/11 - ${ptBR[0]}`, 
                `28/11 - ${ptBR[1]}`,
                // 
                `29/11 - ${ptBR[2]}`, 
                `30/11 - ${ptBR[3]}`,
                `01/12 - ${ptBR[4]}`, 
                `02/12 - ${ptBR[5]}`,
            ]
            time.dateFinals =[
                `03/12 - ${ptBR[6]}`, 
                `04/12 - ${ptBR[0]}`,
                `05/12 - ${ptBR[1]}`,
                `06/12 - ${ptBR[2]}`,
                `09/12 - ${ptBR[5]}`,
                `10/12 - ${ptBR[6]}`,
                `13/12 - ${ptBR[2]}`,
                `14/12 - ${ptBR[3]}`, 
                `17/12 - ${ptBR[6]}`,
                `18/12 - ${ptBR[0]}`
            ]
            btnClassification.innerText = 'Classificação'
            btnCountries.innerText = 'Países'
            btnGames.innerText = 'Jogos'
            btnRound1.innerText = '1ª Rodada'
            btnRound2.innerText = '2ª Rodada'
            btnRound3.innerText = '3ª Rodada'
            btnRoundFinal.innerText = 'Fase Final'
        break;
        case 'es' ||'es-ES' :
            time.date=[  
                `20/11 - ${es[0]}`, 
                `21/11 - ${es[1]}`,
                `22/11 - ${es[2]}`,
                `23/11 - ${es[3]}`,
                `24/11 - ${es[4]}`,
                `25/11 - ${es[5]}`,
                `26/11 - ${es[6]}`,
                `27/11 - ${es[0]}`, 
                `28/11 - ${es[1]}`,
                `29/11 - ${es[2]}`, 
                `30/11 - ${es[3]}`,
                `01/12 - ${es[4]}`, 
                `02/12 - ${es[5]}`,
            ]
            time.dateFinals =[
                `03/12 - ${es[6]}`, 
                `04/12 - ${es[0]}`,
                `05/12 - ${es[1]}`,
                `06/12 - ${es[2]}`,
                `09/12 - ${es[5]}`,
                `10/12 - ${es[6]}`,
                `13/12 - ${es[2]}`,
                `14/12 - ${es[3]}`, 
                `17/12 - ${es[6]}`,
                `18/12 - ${es[0]}`
            ]
            document.title = 'Copa del Mundo'
            btnClassification.innerText = 'Clasificación'
            btnCountries.innerText = 'Países'
            btnGames.innerText = 'Juegos'
            btnRound1.innerText = '1ª Ronda'
            btnRound2.innerText = '2ª Ronda'
            btnRound3.innerText = '3ª Ronda'
            btnRoundFinal.innerText = 'Fase Final'
            countries.Catar.name= 'Qatar'
            countries.Equador.name= 'Ecuador'
            // countries.Senegal.name= 'Senegal'
            countries.Holanda.name= 'Países Bajos'
            countries.Inglaterra.name= 'Inglaterra'
            countries.Ira.name= 'Irã'
            countries.EstadosUnidos.name= 'Estados Unidos'
            countries.Gales.name= 'Gales'
            // countries.Argentina.name= ''
            countries.ArabiaSaudita.name= 'Arabia Saudita'
            // countries.Mexico.name= 'México'
            countries.Polonia.name= 'Polonia'
            countries.Franca.name= 'Francia'
            countries.Australia.name= 'Australia'
            countries.Dinamarca.name= 'Dinamarca'
            countries.Tunisia.name= 'Túnez'
            countries.Espanha.name= 'España'
            // countries.CostaRica.name= 'Costa Rica'
            countries.Alemanha.name= 'Alemania'
            countries.Japao.name= 'Japón'
            countries.Belgica.name= 'Bélgica'
            // countries.Canada.name= 'Canadá'
            countries.Marrocos.name= 'Marruecos'
            countries.Croacia.name= 'Croacia'
            // countries.Brasil.name= 'Brazil'
            countries.Servia.name= 'Serbia'
            countries.Suica.name= 'Suiza'
            countries.Camaroes.name= 'Camerún'
            // countries.Portugal.name= ''
            countries.Gana.name= 'Ghana'
            countries.Uruguai.name= 'Uruguay'
            countries.CoreiaSul.name= 'Corea del Sur'
        break;
        default:
            time.date= [  
                `20/11 - ${en[0]}`, 
                `21/11 - ${en[1]}`,
                `22/11 - ${en[2]}`,
                `23/11 - ${en[3]}`,
                `24/11 - ${en[4]}`,
                // 
                `25/11 - ${en[5]}`,
                `26/11 - ${en[6]}`,
                `27/11 - ${en[0]}`, 
                `28/11 - ${en[1]}`,
                // 
                `29/11 - ${en[2]}`, 
                `30/11 - ${en[3]}`,
                `01/12 - ${en[4]}`, 
                `02/12 - ${en[5]}` 
            ]
            time.dateFinals =[
                `03/12 - ${en[6]}`, 
                `04/12 - ${en[0]}`,
                `05/12 - ${en[1]}`,
                `06/12 - ${en[2]}`,
                `09/12 - ${en[5]}`,
                `10/12 - ${en[6]}`,
                `13/12 - ${en[2]}`,
                `14/12 - ${en[3]}`, 
                `17/12 - ${en[6]}`,
                `18/12 - ${en[0]}`
            ]
            document.title = 'World Cup'
            btnClassification.innerText = 'Classification'
            btnCountries.innerText = 'Countries'
            btnGames.innerText = 'Matches'
            btnRound1.innerText = '1st round'
            btnRound2.innerText = '2nd round'
            btnRound3.innerText = '3rd round'
            btnRoundFinal.innerText = 'Final Phase'
            countries.Catar.name= 'Qatar'
            countries.Equador.name= 'Ecuador'
            // countries.Senegal.name= 'Senegal'
            countries.Holanda.name= 'Netherlands'
            countries.Inglaterra.name= 'England'
            countries.Ira.name= 'Iran'
            countries.EstadosUnidos.name= 'United States'
            countries.Gales.name= 'Wales'
            // countries.Argentina.name= ''
            countries.ArabiaSaudita.name= 'Saudi Arabia'
            countries.Mexico.name= 'Mexico'
            countries.Polonia.name= 'Poland'
            countries.Franca.name= 'France'
            countries.Australia.name= 'Australia'
            countries.Dinamarca.name= 'Denmark'
            countries.Tunisia.name= 'Tunisia'
            countries.Espanha.name= 'Spain'
            countries.CostaRica.name= 'Costa Rica'
            countries.Alemanha.name= 'Germany'
            countries.Japao.name= 'Japan'
            countries.Belgica.name= 'Belgium'
            countries.Canada.name= 'Canada'
            countries.Marrocos.name= 'Morocco'
            countries.Croacia.name= 'Croatia'
            countries.Brasil.name= 'Brazil'
            countries.Servia.name= 'Serbia'
            countries.Suica.name= 'Switzerland'
            countries.Camaroes.name= 'Cameroon'
            // countries.Portugal.name= ''
            countries.Gana.name= 'Ghana'
            countries.Uruguai.name= 'Uruguay'
            countries.CoreiaSul.name= 'South Korea'

    }
}

timeGMT();
