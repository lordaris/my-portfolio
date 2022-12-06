const projectsData = [
  {
    title: 'PDF to bionic reading',
    description: `This script can convert a PDF file into Bionic Reading format to improve reading speed.
     It transforms the PDF into images, which by OCR are converted into plain text, which can be then 
     transformed to Bionic Reading with the API`,
    imgSrc: '/static/images/bionic-reading.png',
    href: 'https://github.com/lordaris/Python/tree/main/My_own_projects/PDF_to_bionic_reading',
  },
  {
    title: 'Hyperskill projects',
    description: `A set of projects from a Python course from Hyperskill "Jet brains academy". -
     They include using functions, conditions, loops, file handling, algorithms and operations with 
     collections, random generation, JSON files, OOP, exception handling, system-specific parameters, 
     and so on.
     The projects include a "simple chatty bot", a "University Admission Algorithm", an "arithmetic exam"
     a flashcards app, and some other funny projects.`,
    imgSrc: '/static/images/hyperskill.png',
    href: 'https://github.com/lordaris/Python/tree/main/Python_Learning/Hyperskill',
  },

  {
    title: "Hitchhiker's guide to python",
    description: `I'm helping with the translation of some chapters of that guide`,
    imgSrc: '/static/images/python.png',
    href: 'https://github.com/lordaris/python-guide',
  },

  {
    title: 'FreeCodeCamp Articles',
    description: `I'm helping with the translation of some articles from FreeCodeCamp`,
    imgSrc: '/static/images/freecodecamp.png',
    href: 'https://www.freecodecamp.org/espanol/news/author/lordaris/',
  },
  {
    title: 'Data Science for Business Jupyter Book',
    description:
      'I made a "jupyter book" to show my knowledge in the use of data analysis and data ' +
      'science tools for python, like pandas, matplotlib, scipy, seaborn, numpy, wquantiles, statsmodels and others. ' +
      'The structure of the book is based on the book "Practical Statistics for Data Scientists: 50+ Essential ' +
      'Concepts Using R and Python", but the content come from other places, and the examples are from my own.',
    imgSrc: '/static/images/dsfb.png',
    href: 'https://lordaris.github.io/data-science-for-business/intro.html',
  },
  {
    title: 'My blog',
    description: `This blog is also one of my projects. I made using the "Tailwind Nextjs Starter Blog" template
    but tweaked some parts, added my own code and I'm actually using the blog and projects section. I also 
    added my resume fetching the data from a JSON file, which I got from "Hackerresume"`,
    imgSrc: '/static/images/blog.png',
    href: 'https://aris-dev.vercel.app/',
  },
]

export default projectsData
