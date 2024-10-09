import React from 'react'
import Card from 'react-bootstrap/Card';
import {getBalanceColor, getAmountColor} from '../formateAmount/GetAmountColor';
import {formatAmount} from '../formateAmount/FormateAmount';

function Tile(props) {
    const formattedAmount = formatAmount(props.amount);
    const amountColor = getAmountColor(props.amount);
    const balanceColor = getBalanceColor(props.balance);
    const balanceFormate = formatAmount(props.balance);
    return (
        <Card>
            <Card.Header as="h5" className="text-danger">{props.date} {props.time}</Card.Header>
            <Card.Body>
            <Card.Title style={{ color: amountColor }}>{formattedAmount}</Card.Title>
                <Card.Text>
                   Toll Name:  {props.place}
                </Card.Text>
            </Card.Body>
            <Card.Footer>Balance <span style={{ color: balanceColor }}>{balanceFormate}</span></Card.Footer>
        </Card>
    )
}

export default Tile
