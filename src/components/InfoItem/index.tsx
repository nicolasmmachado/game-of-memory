import * as C from "./styles"

type Props = {
    label: string,
    value: string
}

export const InfoItem = ({label, value}: Props) => {
    return (
        <C.Container>
            <C.Title>
                {label}
            </C.Title>
            <C.Label>
                {value}
            </C.Label>
        </C.Container>
    )
}