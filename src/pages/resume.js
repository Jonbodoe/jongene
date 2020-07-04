import React from 'react';

export default function Resume() {

    return <section>
        <div className="embed-responsive embed-responsive-1by1">
            <iframe title="resume" className="embed-responsive-item" src={require('../img/JonathanGeneResume.pdf')}></iframe>
        </div>
    </section>
}