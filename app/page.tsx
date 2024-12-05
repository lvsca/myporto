import Link from 'next/link'
import HeroBackground from '@/components/hero-background'
import { skills, experiences } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="relative flex flex-col items-center justify-center px-4 text-center">
          <h1 className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            Junior Web Developer
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-300">
            Passionate about creating modern web applications with cutting-edge technologies.
            Focused on delivering high-quality user experiences.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="#about"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-100"
            >
              About Me
            </Link>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">John Doe</h3>
              <h4 className="text-xl text-gray-600 mb-4">Junior Web Developer</h4>
              <p className="mb-4">
                I am a passionate junior web developer with a strong foundation in modern web technologies. 
                My goal is to create engaging, user-friendly web applications that solve real-world problems.
              </p>
              <h5 className="text-lg font-semibold mb-2">Cover Letter</h5>
              <p>
                Dear Potential Employer,<br /><br />
                I am excited to bring my skills and enthusiasm to your team. With a solid grasp of HTML, CSS, and JavaScript, 
                and growing expertise in React and Next.js, I am ready to contribute to innovative web projects. 
                My experience includes both internship and freelance work, where I have honed my ability to work collaboratively 
                and deliver high-quality results. I am eager to learn and grow in a dynamic development environment.<br /><br />
                Thank you for considering my application.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="skills" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  {skills.filter(category => ['Web Development', 'IT'].includes(category.name)).map((category) => (
                    <div key={category.name} className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
                      <div className="space-y-4">
                        {category.skill.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-sm text-gray-500">{skill.level}</span>
                            </div>
                            <Progress 
                              value={
                                skill.level === 'Beginner' ? 33 :
                                skill.level === 'Intermediate' ? 66 :
                                skill.level === 'Advanced' ? 90 :
                                skill.level === 'Expert' ? 100 :
                                skill.level === 'Junior' ? 50 : 75
                              } 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  {skills.filter(category => !['Web Development', 'IT'].includes(category.name)).map((category) => (
                    <div key={category.name} className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
                      <div className="space-y-4">
                        {category.skill.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-sm text-gray-500">{skill.level}</span>
                            </div>
                            <Progress 
                              value={
                                skill.level === 'Beginner' ? 33 :
                                skill.level === 'Intermediate' ? 66 :
                                skill.level === 'Advanced' ? 90 :
                                skill.level === 'Expert' ? 100 :
                                skill.level === 'Junior' ? 50 : 75
                              } 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="experience" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-4 justify-between items-center gap-6 md:grid-cols-3">
                {experiences.map((exp, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{exp.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{exp.date}</p>
                      <p className="mb-4">{exp.description}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

