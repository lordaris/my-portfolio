import React from 'react'
import data from '../public/static/assets/resume.json'
import profile from '../public/static/images/profile.jpeg'
import Image from "next/image"
const resumeName = data.userFirstName + ' ' + data.userLastName

class Resume extends React.Component {
  render() {
    return (
      <section id={'resume'}>
        <div className="hero min-h-screen ">
          <div className="hero-content text-center">
            <div className="max-w-3xl">
              <div className={'avatar'}>
                <div className={'mt-5 w-32 rounded-full'}>
                  <Image src={profile} alt="" />
                </div>
              </div>
              <h1 className="py-5 text-5xl font-bold">{resumeName}</h1>
              <a className="py-5 text-xl">Python developer</a>

              <p className="py-5 text-sm">audio.aris@gmail.com</p>
              <hr />
              <p className={'py-5 text-center text-xl'}>Education</p>

              {data.education.map((x) => {
                return (
                  <a className={'grid grid-cols-2 gap-10'}>
                    <a>
                      <p className={'text-right font-bold'}>{x.institution}</p>
                      <p className={'text-right font-light'}>{x.degree}</p>
                    </a>
                    <p className={'text-left font-light'}>
                      {x.startDate}-{x.completionDate}
                    </p>
                  </a>
                )
              })}
              <p className={'py-5 text-center text-xl'}>Skills</p>
              {data.skills.map((s) => {
                return (
                  <div>
                    <a className={'grid grid-cols-2 gap-10 py-1'}>
                      <p className={'text-right font-bold '}>{s.skillType}</p>
                      <p className={'text-left'}>{s.skillValues}</p>
                    </a>
                    <div></div>
                  </div>
                )
              })}

              <p className={'py-5 text-center text-xl'}>Projects / Open-Source</p>
              {data.projects.map((projects) => {
                return (
                  <div>
                    <a href={projects.url} className={'grid grid-cols-2 gap-10 py-1'}>
                      <p className={'text-right font-bold '}>{projects.name}</p>
                      <p className={'text-justify font-light'}>{projects.description}</p>
                    </a>
                  </div>
                )
              })}

              <p className={'py-5 text-center text-xl'}>Certifications</p>
              {data.certifications.map((certifications) => {
                return (
                  <div>
                    <a className={'grid grid-cols-2 gap-10 py-1'}>
                      <p className={'text-right font-semibold '}>{certifications.description}</p>

                      <a href={certifications.url} className={'text-justify font-light'}>
                        {certifications.issuedBy}
                      </a>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Resume
