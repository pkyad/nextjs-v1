import Link from 'next/link'

const notFound = (): JSX.Element => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go back home</Link>
    </>
  )
}

export default notFound
