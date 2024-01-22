import '../styles/index.scss';

function About() {
    const aboutText = () => {
        const row1 = "I'm a youthful and energetic software developer from Oulu, Finland. I'm currently studying at Oulu University of Applied Sciences."
        const row2 = "Even though it's yet to show up on these pages, I love all things machine learning. My favourite language is Python, but I'm also very comfortable with Java, C++, and C#. I'm also familiar with JavaScript and React."
        const row3 = "I'm always looking for new challenges and opportunities to learn new things, and I try to make most of everything that can be a learning experience."
        
        return (
            <>
                {row1} <br /> <br />{row2}<br /> <br />{row3}<br />
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
