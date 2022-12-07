import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className={'basis-1/2 p-5'}>
    <div className="card bg-base-100 shadow-xl">
      <figure>
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image alt={title} src={imgSrc} width={544} height={306} />
            </Link>
          ) : (
            <Image alt={title} src={imgSrc} width={544} height={306} />
          ))}
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {' '}
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p>{description}</p>
        {href && (
          <Link
            href={href}
            className="text-primary text-base font-medium leading-6 hover:text-primary-focus dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
