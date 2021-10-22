import {mochila} from '././assets/mochila.jpg'
import {riñonera} from '././assets/riñonera.jpg'
import {billetera} from '././assets/biletera.jpg'
import {agenda} from '././assets/agenda.jpg'

export const stock =[
    {
        id:1,
        name: "Mochila",
        description: "Mochila de cuero vacuno",
        price: 8950,
        img: {mochila},
        stock:4
    },

    {
        id:2,
        name:"Riñonera",
        description:"Riñonera de cuero vacuno",
        price:6790,
        img:{riñonera},
        stock:7
    },
    {
        id:3,
        name:"Billetera",
        description:"Billetera de cuero vacuno",
        price:4230,
        img:{billetera},
        stock:3
    },
    {
        id:4,
        name:"Agenda",
        description:"Agendaa de cuero vacuno",
        price:5200,
        img:{agenda},
        stock:2,
    }
]