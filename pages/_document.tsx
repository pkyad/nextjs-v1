/* istanbul ignore file */
import { NextPage } from 'next'
import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript
} from 'next/document'
import React from 'react'

const MyDocument: NextPage = () => {
	return (
		<Html lang="en" dir="ltr">
			<Head>
				<meta charSet="utf-8" />
				{/* PWA primary color */}
				<meta name="theme-color" content={'red'} />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
			</Head>
			<body style={{ zoom: 0.9 }}>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
	const initialProps = await Document.getInitialProps(ctx)
	return {
		...initialProps,
		styles: <React.Fragment>{initialProps.styles}</React.Fragment>
	}
}

export default MyDocument
