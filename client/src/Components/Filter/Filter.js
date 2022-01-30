import React from 'react'
import {Form ,FormControl } from 'react-bootstrap';
import './Filter.css'

const Filter = () => {
    

 

    return (
        <div className="filter">
          
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                   
                />

            </Form>
           
        </div>
    )
}

export default Filter
