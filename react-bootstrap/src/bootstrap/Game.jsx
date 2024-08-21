import React, { useState } from 'react';
import { Button, Container, Row, Col, Card, ListGroup, Modal } from 'react-bootstrap';

const Game = () => {
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [history, setHistory] = useState([]);
    const [gameEnded, setGameEnded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const choices = ['가위', '바위', '보'];

    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) return '비김';
        if (
            (userChoice === '가위' && computerChoice === '보') ||
            (userChoice === '바위' && computerChoice === '가위') ||
            (userChoice === '보' && computerChoice === '바위')
        ) {
            setScore(score + 1);
            return '사람 승';
        } else {
            return '사람 패';
        }
    };

    const handleChoice = (userChoice) => {
        if (gameEnded) return;

        const computerChoice = choices[Math.floor(Math.random() * 3)];
        const result = determineWinner(userChoice, computerChoice);

        // 최근 판정이 윗줄에 보이도록 history 업데이트
        setHistory([`사람=${userChoice} : 컴퓨터=${computerChoice} => ${result}`, ...history]);

        setCount(count + 1);

        if (count + 1 === 10) {
            setGameEnded(true);
            setShowModal(true);
        }
    };

    const handleRestart = () => {
        setCount(0);
        setScore(0);
        setHistory([]);
        setGameEnded(false);
        setShowModal(false);
    };

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
            <Col md={6}>
            <Card>
                <Card.Body>
                <Card.Title className="text-center">가위바위보 게임</Card.Title>
                <Card.Text className="text-center">컴퓨터와 가위바위보를 해보세요</Card.Text>
                <div className="d-flex justify-content-around mb-4">
                    {choices.map((choice) => (
                        <Button 
                            key={choice} 
                            variant="primary" 
                            onClick={() => handleChoice(choice)}
                            disabled={gameEnded}
                        >
                            {choice}
                        </Button>
                    ))}
                </div>
                <Card.Text className="text-center">{`10회중 ${count}번째 선택`}</Card.Text>
                <Card.Text className="text-center">{`승률: ${count === 0 ? 0 : Math.round((score / count) * 100)}%`}</Card.Text>
                <h5>판정이력</h5>
                <ListGroup variant="flush">
                    {history.map((item, index) => (
                        <ListGroup.Item key={index}>{item}</ListGroup.Item>
                    ))}
                </ListGroup>
                </Card.Body>
            </Card>
            </Col>
            </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>게임종료</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                게임이 종료되었습니다. 새로운 게임을 시작하시겠습니까?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    닫기
                </Button>
            <Button variant="primary" onClick={handleRestart}>
                새로운 게임 시작
            </Button>
            </Modal.Footer>
        </Modal>
        </Container>
    );
};

export default Game;