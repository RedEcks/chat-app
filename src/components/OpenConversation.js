import React, { useState } from 'react'
import {Button, Form, FormGroup, InputGroup} from 'react-bootstrap'

export default function OpenConversation() {
    const [text, setText]=useState('')
    
    return (
        <div className="d-flex flex-column flex-grow-1">
        <div className='flex-grow-1 overflow-auto'>
            Open Conversation
        </div>
        <Form>
            <FormGroup className='m-2'>
                <InputGroup>
                <Form.Control 
                    as="textarea"
                    required
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    style={{height: '75px', resize: 'none'}}
                    />
                <Button type='submit'>Send</Button>
                </InputGroup>
            </FormGroup>
        </Form>
    </div>
  )
}
