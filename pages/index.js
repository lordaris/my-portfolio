import Link from '@/components/Link'
import languageIcons from '@/data/languageIcons'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import TypingAnimation from '../components/TypingAnimation'

// const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex flex-col lg:flex-row ">
          <div className={'basis-3/3 '}>
            <h1 className="text-4xl font-bold sm:text-5xl ">Armando Peña</h1>
            <p className={'py-5 text-xs leading-9 sm:text-base'}>
              <TypingAnimation />
            </p>
            <p className="my-1 py-2">
              I'm a very passionate programmer who loves to learn new skills all the time. Right now
              I'm very into web applications development and web development, but I also like
              scripting and data analysis. If you want to know more about me, you can check my
              resume, read my blog or clic the next button:
            </p>
            <button className="btn-primary btn">
              <Link href="/about">About Me</Link>
            </button>
          </div>
        </div>
      </div>
      <div className={'snap-start'}>
        <div className={'py-5 text-center text-5xl'}>Some skills</div>
        <div className={'grid grid-cols-1 gap-4 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>
          {languageIcons.map((icon) => (
            <div
              key={icon.name}
              className="shadow-primary shadow-5xl card bg-neutral hover:shadow-md hover:shadow-primary-focus active:scale-105"
            >
              <div className="text-primary card-body hover:text-primary-focus">
                <div className={' card-actions justify-center text-6xl'}>{icon.image}</div>
                <div className={' card-actions justify-center'}>{icon.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*This is a very cool feature to show the last posts. It's disabled because I don't need it*/}
      {/*
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>

          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}

      */}
    </>
  )
}
