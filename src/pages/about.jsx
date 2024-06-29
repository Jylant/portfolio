import '../styles/index.scss';

function About() {
    const aboutText = () => {
        const row1 = "I'm a youthful and energetic software developer from Oulu, Finland. I'm currently studying at Oulu University of Applied Sciences."
        const row2 = "Even though it's yet to show up on these pages, I love all things machine learning. My favourite language is Python, but I'm also very comfortable with Java, C++, and C#. I'm also familiar with JavaScript and React."
        const row3 = "I'm always looking for new challenges and opportunities to learn new things, and I try to make most of everything that can be a learning experience."
        const row4 = "I almost forgot to mention that I'm also familiar with SQL and postgreSQL databases, and I've worked with both in my projects."
        const row5 = "My hobbies relevant to programming include tabletop boardgames and role playing games, which have deepened and enforced my natural problem solving skills."
        
        return (
            <>
                {row1} <br /> <br />{row2}<br /> <br />{row3}<br /> <br />{row4}<br /><br />{row5}
            </>
        );
    }
    
    return (
        <>
            <h1>About me</h1>
            <p>{aboutText()}</p>
        </>
    );
}

export default About;
