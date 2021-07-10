/* -- Average price by region -- */

const tarifa_media_norte = 0.602 
const tarifa_media_nordeste = 0.596
const tarifa_media_sudeste = 0.600
const tarifa_media_centro_oeste = 0.641
const tarifa_media_sul = 0.522

/* --  Coast Average -- */
 
const average_factory = '5000'
const average_house = '2300'

/* -- Calculus -- */
let cons_mensal = document.querySelector('#consumo-mensal')
let cons_inst = document.querySelector('#custo-instalacao')
let cons_tarif = document.querySelector('#tarifa-media')


document.querySelector('#calculate').addEventListener('click', e => {
    const showEl = document.querySelector('#result > div')
    const datasEl = document.querySelector('#datas')
    
    let payoff = document.querySelector('#set_payoff')
     
    payoff.innerHTML = (((cons_inst.value/(cons_inst.value - (cons_mensal.value * cons_tarif.value)) + "").split(".")[0])).toString()
    
    showEl.classList.add('show')
    datasEl.classList.add('show_data')
})

console.log(cons_inst - (cons_mensal * cons_tarif))


/* -- Set region by state -- */
document.querySelector('#filtro-do-estado').addEventListener('change', e => {
    const tarifEl = document.querySelector('#tarifa-media')
    const regiaoEl = document.querySelector('#filtro-da-regiao')
    
    if(e.currentTarget.value === 'mg' || 
       e.currentTarget.value === 'sp' ||
       e.currentTarget.value === 'rj' ||
       e.currentTarget.value === 'es') {
        
        regiaoEl.value = 'sudeste'

        /* -- Set tarif -- */
        tarifEl.value = tarifa_media_sudeste
    }

    else if(e.currentTarget.value === 'go' || 
       e.currentTarget.value === 'mt' ||
       e.currentTarget.value === 'ms') {
        
        regiaoEl.value = 'centro-oeste'

        /* -- Set tarif -- */
        tarifEl.value = tarifa_media_centro_oeste
    }

    else if(e.currentTarget.value === 'pr' || 
       e.currentTarget.value === 'sc' ||
       e.currentTarget.value === 'rs') {

        regiaoEl.value = 'sul'
        
        /* -- Set tarif -- */
        tarifEl.value = tarifa_media_sul
    }

    else if(e.currentTarget.value === 'al' || 
       e.currentTarget.value === 'ba' ||
       e.currentTarget.value === 'ce' ||
       e.currentTarget.value === 'ma' ||
       e.currentTarget.value === 'pb' || 
       e.currentTarget.value === 'pe' ||
       e.currentTarget.value === 'pi' ||
       e.currentTarget.value === 'se' ||
       e.currentTarget.value === 'rn') {
        
        regiaoEl.value = 'nordeste'

        /* -- Set tarif -- */
        tarifEl.value = tarifa_media_nordeste
        
    } else {
        
        regiaoEl.value = 'norte'

        /* -- Set tarif -- */
        tarifEl.value = tarifa_media_norte
    }

    regiaoEl.classList.add('non-select')
    tarifEl.classList.add('non-input')

})

/* -- Change Photo -- */

const dir_casa = './img/simulacao-casa1.png'
const dir_comercio = './img/simulacao-comercial1.png'

document.querySelector('#filtro-do-interesse').addEventListener('change', e => {
    const imgEl = document.querySelector('.foto-selecionada > img')
    const custoEl = document.querySelector('#custo-instalacao')

    if (e.currentTarget.value === 'residencial') {
        imgEl.src = dir_casa
        custoEl.value = parseInt(average_house)

    } else {
        imgEl.src = dir_comercio
        custoEl.value = parseInt(average_factory)
    }
})

