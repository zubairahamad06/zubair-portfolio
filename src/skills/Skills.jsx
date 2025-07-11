import React from 'react'
import './skills.css'
import figma from '../skills/figma.png'
import html from '../skills/html.png'
import css from '../skills/css.png'
import bootstrap from '../skills/bootstrap.png'
import javascript from '../skills/javascript.png'
import react from '../skills/react.png'
import firebase from '../skills/firebase.png'
import github from '../skills/github.png'
import jquery from '../skills/jquery.png'
import photoshop from '../skills/photoshop.png'
import wordpress from '../skills/wordpress.png'
import nodejs from '../skills/nodejs.png'
import express from '../skills/express.png'
import mongodb from '../skills/mongodb.png'
import sql from '../skills/sql.png'
import django from '../skills/django.png'
import python from '../skills/python.png'
import netlify from '../skills/netlify.png'

export const Skills = () => {
    return (
        <div>

            <section class="skills-section" id='skills'>
                <h2 class="title">SKILLS</h2>
                <div class="skills-grid">
                    <div class="skill"><img src={figma} alt="Figma"/><p>Figma</p></div>
                    <div class="skill"><img src={html} alt="HTML"/><p>HTML</p></div>
                    <div class="skill"><img src={css} alt="CSS"/><p>CSS</p></div>
                    <div class="skill"><img src={bootstrap} alt="Bootstrap"/><p>Bootstrap</p></div>
                    <div class="skill"><img src={javascript}alt="JavaScript"/><p>Javascript</p></div>
                    <div class="skill"><img src={react} alt="React"/><p>React</p></div>

                    <div class="skill"><img src={firebase} alt="Firebase"/><p>Firebase</p></div>
                    <div class="skill"><img src={github} alt="GitHub"/><p>Git-Hub</p></div>
                    <div class="skill"><img src={jquery} alt="JQuery"/><p>JQuerry</p></div>
                    <div class="skill"><img src={photoshop} alt="Photoshop"/><p>Photoshop</p></div>
                    <div class="skill"><img src={wordpress} alt="WordPress"/><p>Wordpress</p></div>
                    <div class="skill"><img src={nodejs} alt="Node JS"/><p>Node JS</p></div>

                    <div class="skill"><img src={express} alt="Express JS"/><p>Express JS</p></div>
                    <div class="skill"><img src={mongodb} alt="MongoDB"/><p>Mongo DB</p></div>
                    <div class="skill"><img src={sql} alt="MySQL"/><p>MySQL</p></div>
                    <div class="skill"><img src={django} alt="Django"/><p>Django</p></div>
                    <div class="skill"><img src={python} alt="Python"/><p>Python</p></div>
                    <div class="skill"><img src={netlify} alt="Netlify"/><p>Netlify</p></div>
                </div>
            </section>
        </div>
    )
}
