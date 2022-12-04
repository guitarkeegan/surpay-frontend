import useSWR from 'swr'
import Container from 'react-bootstrap/Container'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from 'react-bootstrap/Button'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function PastSurveys() {

  const { data, error } = useSWR('/api/survey/read/all/user/taken', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data)

  return (
    <div>
    <h1>View Past Surveys</h1>
     {data ? 
     data.map((item=>{
        return (<Container className='mb-3'>
        <Row>
        <Col><div><h2>{item.name}</h2></div></Col>
        </Row>
        <Row><Col><div>{"(survey link)"}</div></Col></Row>
        <Row className='justify-content-between'><Col><div><p>{`Number of Survey Takers: ${item.number_of_takers_desired}`}</p></div></Col><Col><div><p>{`Funding Amount: ${item.total_payout} MATIC`}</p></div></Col></Row>
        <Row><Col sm md={3}><Button variant='primary'>Launch Survey</Button></Col><Col sm md={3}><Button variant='danger'>Delete</Button></Col></Row>
     </Container>)}))
     :
     <Container><h2>{"No surveys found"}</h2></Container>
     }
    </div>
  )
}