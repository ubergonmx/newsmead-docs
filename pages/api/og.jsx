/* eslint-env node */
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const fontInter = fetch(new URL('./Inter-SemiBold.otf', import.meta.url)).then((res) =>
  res.arrayBuffer()
)

const fontGaramond = fetch(new URL('./EBGaramond-SemiBold.ttf', import.meta.url)).then((res) =>
  res.arrayBuffer()
)

export default async function (req) {
  const inter = await fontInter
  const garamond = await fontGaramond

  const { searchParams } = new URL(req.url)

  // ?title=<title>
  const hasTitle = searchParams.has('title')
  const hasDescription = searchParams.has('description')
  const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'NewsMead Documentation'
  const description = hasDescription
    ? searchParams.get('description')?.slice(0, 100)
    : 'Documentation of NewsMead'
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 80,
          backgroundColor: '#1A1A1A',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          backgroundPosition: '-30px -10px',
          fontWeight: 600,
          color: 'white',
        }}
      >
        <svg
          style={{ position: 'absolute', top: 70, left: 80, width: '135px', height: '135px' }}
          version="1.1"
          viewBox="0 0 98 98"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#d8ce5a" fill-opacity=".851">
            <path d="m45.91 0h6.3q13.74 1.14 24.29 8.46 19.4 13.45 21.5 37.68v6.1q-0.94 7.55-1.82 10.27-8.04 24.92-32.79 33.41-3.58 1.22-11.28 2.08h-6.33q-16.27-1.37-28.16-11.37-15.76-13.27-17.62-34.54v-6.33q2.38-24.61 22.37-37.89 10.22-6.78 23.54-7.87zm-29.49 57.39c-2.54 2.45-1.9 6.64-0.27 9.57 3.09 5.53 15.82 21.91 23.35 14.54q19.85-19.44 39.59-38.7 1.79-1.75 2.23-3.04c0.89-2.65-0.33-5.83-1.57-8.23q-0.31-0.6 0.17-1.06l2.82-2.71a0.74 0.74 0 0 0 0.04-1.04q-6.7-7.33-13.86-10.76-6.68-3.2-11.68 1.7-21.55 21.1-40.82 39.73z" />
            <path d="m59.89 20.96c1.65-3.66 7.05-1.88 9.7-0.37q4.22 2.43 7.5 5.62 0.49 0.49 0.42 1.17-0.04 0.41-0.33 0.68-0.47 0.44-0.9-0.04l-3.11-3.53a0.69 0.68-43.1 0 0-1-0.03l-6.25 6.22a0.7 0.7 0 0 1-0.99-0.01q-3.64-3.67-5.11-8.59a1.66 1.6 49.6 0 1 0.07-1.12z" />
            <path d="m72.93 42.14q0.26 0.13 0.05 0.34l-36.1 35.15a1.72 1.72 0 0 1-1.6 0.44c-5.84-1.41-13.62-9.99-15.39-15.94q-0.43-1.46 0.67-2.53 17.56-17.01 35.78-34.76a0.3 0.3 0 0 1 0.49 0.1q4.87 11.42 16.1 17.2zm-18.229-10.644a0.26 0.26 0 0 0-0.3677-0.0045l-13.97 13.633a0.26 0.26 0 0 0-0.0045 0.3676l1.2013 1.231a0.26 0.26 0 0 0 0.3677 0.0045l13.97-13.633a0.26 0.26 0 0 0 0.0045-0.3676l-1.2013-1.231zm3.1486 4.9734a0.86 0.86 0 0 0-1.2161-0.0169l-13.048 12.688a0.86 0.86 0 0 0-0.017 1.2161l0.3625 0.3728a0.86 0.86 0 0 0 1.2161 0.0169l13.048-12.688a0.86 0.86 0 0 0 0.017-1.2161l-0.3625-0.3728zm3.2518 3.8068a0.68 0.68 0 0 0-0.9616-0.0135l-13.177 12.814a0.68 0.68 0 0 0-0.0134 0.9616l0.5298 0.5448a0.68 0.68 0 0 0 0.9616 0.0135l13.177-12.814a0.68 0.68 0 0 0 0.0134-0.9616l-0.5298-0.5448zm4.0953 2.9678a0.49 0.49 0 0 0-0.6928-0.0121l-13.538 13.074a0.49 0.49 0 0 0-0.0121 0.6929l0.7503 0.7769a0.49 0.49 0 0 0 0.6928 0.0121l13.538-13.074a0.49 0.49 0 0 0 0.0121-0.6929l-0.7503-0.7769zm-40.526 18.406q3.72 7.52 10.86 11.78a1.03 1.02-51.7 0 0 1.25-0.15l13.16-12.81q0.52-0.5-0.11-0.86-7.63-4.43-11.03-12.2a0.49 0.48-34 0 0-0.78-0.15l-13.07 12.77q-0.73 0.71-0.28 1.62z" />
            <path d="m72.24 28.25a0.21 0.21 0 0 1 0.29 0.01l0.12 0.13a10.89 3.51 46.9 0 1 4.88 10.35l-0.06 0.06a10.89 3.51 46.9 0 1-10-5.56l-0.12-0.13a0.21 0.21 0 0 1 0.01-0.3l4.88-4.56z" />
          </g>
          <g fill="#2f2d13" fill-opacity=".851">
            <path d="m16.15 66.96c-1.63-2.93-2.27-7.12 0.27-9.57q19.27-18.63 40.82-39.73 5-4.9 11.68-1.7 7.16 3.43 13.86 10.76a0.74 0.74 0 0 1-0.04 1.04l-2.82 2.71q-0.48 0.46-0.17 1.06c1.24 2.4 2.46 5.58 1.57 8.23q-0.44 1.29-2.23 3.04-19.74 19.26-39.59 38.7c-7.53 7.37-20.26-9.01-23.35-14.54zm43.74-46a1.66 1.6 49.6 0 0-0.07 1.12q1.47 4.92 5.11 8.59a0.7 0.7 0 0 0 0.99 0.01l6.25-6.22a0.69 0.68-43.1 0 1 1 0.03l3.11 3.53q0.43 0.48 0.9 0.04 0.29-0.27 0.33-0.68 0.07-0.68-0.42-1.17-3.28-3.19-7.5-5.62c-2.65-1.51-8.05-3.29-9.7 0.37zm13.04 21.18q-11.23-5.78-16.1-17.2a0.3 0.3 0 0 0-0.49-0.1q-18.22 17.75-35.78 34.76-1.1 1.07-0.67 2.53c1.77 5.95 9.55 14.53 15.39 15.94a1.72 1.72 0 0 0 1.6-0.44l36.1-35.15q0.21-0.21-0.05-0.34zm-0.69-13.89-4.88 4.56a0.21 0.21 0 0 0-0.01 0.3l0.12 0.13a10.89 3.51 46.9 0 0 10 5.56l0.06-0.06a10.89 3.51 46.9 0 0-4.88-10.35l-0.12-0.13a0.21 0.21 0 0 0-0.29-0.01z" />
            <rect
              transform="translate(48.13,39.11) rotate(-44.3)"
              x="-10.02"
              y="-1.12"
              width="20.04"
              height="2.24"
              rx=".26"
            />
            <rect
              transform="translate(50.89 43.6) rotate(-44.2)"
              x="-9.96"
              y="-1.12"
              width="19.92"
              height="2.24"
              rx=".86"
            />
            <path d="m24.67 61.65q-0.45-0.91 0.28-1.62l13.07-12.77a0.49 0.48-34 0 1 0.78 0.15q3.4 7.77 11.03 12.2 0.63 0.36 0.11 0.86l-13.16 12.81a1.03 1.02-51.7 0 1-1.25 0.15q-7.14-4.26-10.86-11.78z" />
          </g>
          <g fill="#0d0a04" fill-opacity=".863">
            <rect
              transform="translate(54.29,47.43) rotate(-44.2)"
              x="-9.87"
              y="-1.06"
              width="19.74"
              height="2.12"
              rx=".68"
            />
            <rect
              transform="translate(58.45 50.51) rotate(-44)"
              x="-9.9"
              y="-1.03"
              width="19.8"
              height="2.06"
              rx=".49"
            />
          </g>
        </svg>

        <p
          style={{
            position: 'absolute',
            bottom: 70,
            left: 80,
            margin: 0,
            fontSize: 30,
            letterSpacing: -1,
          }}
        >
          {description}
        </p>
        <h1
          style={{
            fontSize: 102,
            margin: '0 0 20px -2px',
            lineHeight: 1.1,
            textShadow: '0 2px 30px #000',
            letterSpacing: -4,
            backgroundImage: 'linear-gradient(90deg, #fff 40%, #aaa)',
            backgroundClip: 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent',
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'garamond',
          data: garamond,
          style: 'normal',
        },
        {
          name: 'inter',
          data: inter,
          style: 'normal',
        },
      ],
    }
  )
}
