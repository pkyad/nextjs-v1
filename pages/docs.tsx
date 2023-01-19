// @ts-nocheck
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { createSwaggerSpec } from 'next-swagger-doc'
import dynamic from 'next/dynamic'
import 'swagger-ui-react/swagger-ui.css'
import NotFound from '@/pages/404'
import config from 'swagger.config'

const SwaggerUI = dynamic<{
  spec: Record<string, any>
}>(import('swagger-ui-react'), { ssr: false })

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ApiDoc = ({ spec }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (spec === undefined) {
    return <NotFound />
  }
  return <SwaggerUI spec={spec} />
}

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      props: {}
    }
  }
  const spec: Record<string, any> = createSwaggerSpec(config)

  return {
    props: {
      spec
    }
  }
}

export default ApiDoc
