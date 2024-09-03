import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';

export const CommentForm = () => {

   const inputRef_1 = useRef()
   const inputRef_2 = useRef()

   const handelSubmit =() =>{
      console.log(inputRef_1.current,inputRef_2.current);
      
   }
  return (
     <Form>
        <Row className='g-2'>
            <Col lg='8'>
               <Form.Control type='text' placeholder='댓글 내용 작성'ref={inputRef_1}/>
            </Col>

            <Col lg='4'>
              <Form.Control type='text' placeholder='작성자 이름'ref={inputRef_2}/>
            </Col>
        </Row>
        <Row className='my-2'>
            <Col lg='12'>
            <Button className='w-100'  variant='primary'>등록</Button>{' '}
            </Col>
        </Row>
     </Form>
  )
}

export default CommentForm
