import { css } from '@emotion/react'
import { useState } from 'react'
import { BarLoader } from 'react-spinners'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`

const LoadingSpinner = () => {
    let [loading] = useState(true)

    return <BarLoader loading={loading} css={override} size={50} />
}

export default LoadingSpinner
