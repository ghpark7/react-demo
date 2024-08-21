import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    function handleSubmit(e){
        e.preventDefault();//전송기능중지
        let em = e.target.em.value
        let pw = e.target.pw.value
        let iu = e.target.iu.checked
        let sipcm = e.target.sipcm.checked
        let ta = e.target.ta.value
        let color = e.target.color.value
        let sel= e.target.sel.value
        // radio 접근법
        let gender0 = e.target.gender[0].checked
        let gender1 = e.target.gender[1].checked
        
        console.log(em, pw, iu, sipcm, ta, color, sel, gender0, gender1)

    }
      return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="em" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="pw" type="password" placeholder="Password" />
        <Form.Text className="text-muted">
          암호는 8자 이상. 숫자와 문자 복합. 숫자반복은 2번. 특수문자1개이상
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>좋아하는 가수를 선택</Form.Label>
        <Form.Check name="iu" type="checkbox" label="아이유" />
        <Form.Check name="sipcm" type="checkbox" label="10Cm" />
        <Form.Text className="text-muted">
          좋아하는 가수를 모두 선택하세요
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control name="ta" as="textarea" rows={5} />
      </Form.Group>        

      <Form.Group className="mb-3" >
        <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
        <Form.Control
            name="color"
            type="color"
            id="exampleColorInput"
            defaultValue="#563d7c"
            title="Choose your color"
            />
       </Form.Group>        

      <Form.Group className="mb-3" >
       <Form.Select name="sel" aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>
       </Form.Group>        

      <Form.Group className="mb-3" >
        <Form.Label htmlFor="exampleColorInput">성별을 선택</Form.Label>
        <Form.Check 
            name="gender"
            type="radio"
            label="남"
            />
        <Form.Check 
            name="gender"
            type="radio"
            label="여"
            />
      </Form.Group>        

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;