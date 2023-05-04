import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quis amet facilis voluptate dolore vero nobis eius tempore ipsum voluptatibus, deserunt beatae quam debitis et nesciunt inventore, delectus quasi sequi assumenda illo illum ipsa? Nisi quae cum deleniti dolorem harum. Earum eum cum aut neque officia obcaecati aspernatur ut, nisi omnis quia voluptate rerum esse aliquam facilis corrupti reprehenderit fugit autem vel nam nihil eos atque placeat. Similique nulla a nostrum culpa eius autem quos, sunt possimus eligendi tenetur sapiente nobis nam consectetur vero non voluptatum facilis praesentium ea explicabo sequi quaerat labore recusandae. Vitae quas explicabo corporis fuga adipisci.</p>
            <p><Link to="/register">Go Back to Terms and Conditions</Link></p>
        </Container>
    );
};

export default Terms;