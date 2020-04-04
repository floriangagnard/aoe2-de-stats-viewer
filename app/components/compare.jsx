import React from 'react'

import { Row, Col, Card, Typography, Progress } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography;


const calculateDammage = (unit1, unit2) => {
    //unit2.categories
    var unit2Def = getDefenseAmount(unit2.stats.defense, unit1.stats.attack.type)
    var unit1BonusVs2ListAmount = unit1.bonus.filter(bonu => unit2.categories.includes(bonu.category)).map(bonu => bonu.amount)

    var totalbonus = unit1BonusVs2ListAmount.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let totalDammage = unit1.stats.attack.amount - unit2Def + totalbonus

    if (totalDammage < 1) {
        return 1
    }
    return totalDammage;
}


const getDefenseAmount = (defense, type) => {
    return defense.find(def => def.type === type).amount

}


const Compare = ({ unitLeft, unitRigth }) => {

    const leftAttack = calculateDammage(unitLeft, unitRigth)
    const rightAttack = calculateDammage(unitRigth, unitLeft)

    const rightRapport = (rightAttack * 100) / (rightAttack + leftAttack)
    const leftRapport = (leftAttack * 100) / (rightAttack + leftAttack)
    return (
        <Row   align="middle" style={{ border: '1px solid black' }}>
            <Col flex={leftRapport} style={{ backgroundColor: '#ffb3b3' }} >

                <Row align="middle" justify="begin"  style={{ minHeight: '90px' }} >
                    <Col> <Title level={4}>{unitLeft.name} - {leftAttack} </Title> </Col>
                </Row>
            </Col>
            <Col flex={rightRapport} style={{ backgroundColor: '#99ccff' }} >
                <Row  align="middle" justify="end" style={{ minHeight: '90px' }}  >
                    <Col><Link to={"/units/" + unitRigth.id}> <Title level={4}> {rightAttack} - {unitRigth.name} </Title></Link></Col>
                </Row>
            </Col>
        </Row>
    )

}






export default Compare