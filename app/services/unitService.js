
import unitsData  from "../data/units.json"

export function  getUnitById (id) {
    console.log ( "Recherche de l'unité "+ id )
    const unit =  unitsData.find( unit => unit.id == id )
    console.log (unit)
    return unit
}

export function  getAllUnits () {
    console.log ( "LireAllUNit ")
    console.log ("unitsData", unitsData)
    return unitsData
}

