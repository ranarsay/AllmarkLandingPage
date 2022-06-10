import React, { Component } from 'react'
import { Card, CardFooter } from "reactstrap"
import "./Footer.css";

export default class extends Component {
    render() {
        return (
            <div>
                <Card className='footer'>
                    <CardFooter className="text-muted">
                        Copyright 2022 | Created by AllMark Development Team
                    </CardFooter>

                </Card>

            </div>
        )
    }
}
